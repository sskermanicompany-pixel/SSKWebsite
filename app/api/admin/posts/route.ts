import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getAllPosts, persistenceMode, savePost } from "@/lib/blog";
import { locales, type Locale } from "@/lib/i18n";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  return NextResponse.json({
    posts: await getAllPosts(),
    persistence: persistenceMode(),
  });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const locale = String(body.locale ?? "");
  if (!locales.includes(locale as Locale)) {
    return NextResponse.json({ error: "Choose Persian or English." }, { status: 400 });
  }

  const title = String(body.title ?? "").trim();
  if (!title) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }

  const post = await savePost({
    id: typeof body.id === "string" ? body.id : undefined,
    slug: String(body.slug ?? ""),
    locale: locale as Locale,
    title,
    excerpt: String(body.excerpt ?? ""),
    content: String(body.content ?? ""),
    featuredImage: String(body.featuredImage ?? ""),
    featuredImageAlt: String(body.featuredImageAlt ?? ""),
    published: Boolean(body.published),
    publishedAt: String(body.publishedAt ?? ""),
    seoTitle: String(body.seoTitle ?? ""),
    seoDescription: String(body.seoDescription ?? ""),
    keywords: String(body.keywords ?? ""),
  });

  return NextResponse.json({ post });
}
