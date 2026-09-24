import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { deletePost, getPostById, savePost } from "@/lib/blog";
import { locales, type Locale } from "@/lib/i18n";

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await context.params;
  const existing = await getPostById(id);
  if (!existing) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const locale = String(body.locale ?? existing.locale);
  if (!locales.includes(locale as Locale)) {
    return NextResponse.json({ error: "Choose Persian or English." }, { status: 400 });
  }

  const post = await savePost({
    id,
    slug: String(body.slug ?? existing.slug),
    locale: locale as Locale,
    title: String(body.title ?? existing.title),
    excerpt: String(body.excerpt ?? existing.excerpt),
    content: String(body.content ?? existing.content),
    featuredImage: String(body.featuredImage ?? existing.featuredImage),
    featuredImageAlt: String(body.featuredImageAlt ?? existing.featuredImageAlt),
    published: Boolean(body.published),
    publishedAt: String(body.publishedAt ?? existing.publishedAt),
    seoTitle: String(body.seoTitle ?? existing.seoTitle),
    seoDescription: String(body.seoDescription ?? existing.seoDescription),
    keywords: String(body.keywords ?? existing.keywords),
  });

  return NextResponse.json({ post });
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await context.params;
  const existing = await getPostById(id);
  if (!existing) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }

  await deletePost(id);
  return NextResponse.json({ ok: true });
}
