import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { locales, type Locale } from "@/lib/i18n";
import { slugify } from "@/lib/slug";

export type BlogPost = {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  featuredImageAlt: string;
  published: boolean;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogPostInput = Omit<BlogPost, "id" | "createdAt" | "updatedAt"> & {
  id?: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "blog-posts.json");
const BLOB_PATH = "blog/posts.json";

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

function asBoolean(value: unknown) {
  return value === true;
}

function normalizePost(value: unknown): BlogPost | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const raw = value as Record<string, unknown>;
  const locale = asString(raw.locale);
  if (!isLocale(locale)) {
    return null;
  }

  const id = asString(raw.id);
  const slug = slugify(asString(raw.slug) || asString(raw.title));
  const title = asString(raw.title);
  if (!id || !title || !slug) {
    return null;
  }

  const now = new Date().toISOString();

  return {
    id,
    slug,
    locale,
    title,
    excerpt: asString(raw.excerpt),
    content: asString(raw.content),
    featuredImage: asString(raw.featuredImage),
    featuredImageAlt: asString(raw.featuredImageAlt) || title,
    published: asBoolean(raw.published),
    publishedAt: asString(raw.publishedAt) || now,
    seoTitle: asString(raw.seoTitle) || title,
    seoDescription: asString(raw.seoDescription) || asString(raw.excerpt),
    keywords: asString(raw.keywords),
    createdAt: asString(raw.createdAt) || now,
    updatedAt: asString(raw.updatedAt) || now,
  };
}

function parsePosts(raw: string): BlogPost[] {
  try {
    const data = JSON.parse(raw) as unknown;
    if (!Array.isArray(data)) {
      return [];
    }
    return data
      .map(normalizePost)
      .filter((post): post is BlogPost => post !== null);
  } catch {
    return [];
  }
}

function usesBlob() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readFromFile() {
  try {
    return parsePosts(await readFile(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

async function writeToFile(posts: BlogPost[]) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
}

async function readFromBlob() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return null;
  }

  const { list } = await import("@vercel/blob");
  const { blobs } = await list({ prefix: BLOB_PATH, token, limit: 20 });
  const match = blobs.find((blob) => blob.pathname === BLOB_PATH);
  if (!match) {
    return null;
  }

  const response = await fetch(match.url, { cache: "no-store" });
  if (!response.ok) {
    return null;
  }

  return parsePosts(await response.text());
}

async function writeToBlob(posts: BlogPost[]) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return;
  }

  const { put } = await import("@vercel/blob");
  await put(BLOB_PATH, JSON.stringify(posts, null, 2), {
    access: "public",
    token,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

export async function getAllPosts() {
  if (usesBlob()) {
    const fromBlob = await readFromBlob();
    if (fromBlob) {
      return fromBlob.sort(sortPosts);
    }
  }

  return (await readFromFile()).sort(sortPosts);
}

export async function getPublishedPosts(locale?: Locale) {
  return (await getAllPosts()).filter(
    (post) => post.published && (!locale || post.locale === locale),
  );
}

export async function getPostBySlug(slug: string) {
  const decoded = decodeURIComponent(slug);
  return (await getAllPosts()).find((post) => post.slug === decoded) ?? null;
}

export async function getPostById(id: string) {
  return (await getAllPosts()).find((post) => post.id === id) ?? null;
}

export async function savePost(input: BlogPostInput) {
  const posts = await getAllPosts();
  const now = new Date().toISOString();
  const slug = await uniqueSlug(posts, slugify(input.slug || input.title), input.id);
  const existing = input.id ? posts.find((post) => post.id === input.id) : null;

  const saved: BlogPost = {
    id: existing?.id ?? crypto.randomUUID(),
    slug,
    locale: input.locale,
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    content: input.content,
    featuredImage: input.featuredImage,
    featuredImageAlt: input.featuredImageAlt.trim() || input.title.trim(),
    published: Boolean(input.published),
    publishedAt: input.publishedAt || now,
    seoTitle: input.seoTitle.trim() || input.title.trim(),
    seoDescription: input.seoDescription.trim() || input.excerpt.trim(),
    keywords: input.keywords.trim(),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };

  const next = existing
    ? posts.map((post) => (post.id === existing.id ? saved : post))
    : [saved, ...posts];

  await persistPosts(next);
  return saved;
}

export async function deletePost(id: string) {
  const posts = await getAllPosts();
  await persistPosts(posts.filter((post) => post.id !== id));
}

export async function persistUploadedImage(file: File) {
  const extension = extensionFromFile(file);
  const filename = `${crypto.randomUUID()}.${extension}`;

  if (usesBlob()) {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    const { put } = await import("@vercel/blob");
    const blob = await put(`blog/images/${filename}`, file, {
      access: "public",
      token,
      addRandomSuffix: false,
    });
    return blob.url;
  }

  const dir = path.join(process.cwd(), "public", "images", "blog");
  await mkdir(dir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(dir, filename), buffer);
  return `/images/blog/${filename}`;
}

export function persistenceMode() {
  return usesBlob() ? "blob" : "filesystem";
}

async function persistPosts(posts: BlogPost[]) {
  if (usesBlob()) {
    await writeToBlob(posts);
    return;
  }

  await writeToFile(posts);
}

async function uniqueSlug(posts: BlogPost[], slug: string, currentId?: string) {
  let next = slug;
  let index = 2;
  while (posts.some((post) => post.slug === next && post.id !== currentId)) {
    next = `${slug}-${index}`;
    index += 1;
  }
  return next;
}

function sortPosts(a: BlogPost, b: BlogPost) {
  return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
}

function extensionFromFile(file: File) {
  const fromName = file.name.split(".").pop()?.toLowerCase();
  if (fromName && /^(jpe?g|png|webp|gif)$/.test(fromName)) {
    return fromName === "jpeg" ? "jpg" : fromName;
  }
  if (file.type === "image/png") return "png";
  if (file.type === "image/webp") return "webp";
  if (file.type === "image/gif") return "gif";
  return "jpg";
}
