"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import type { BlogPost } from "@/lib/blog";
import { slugify } from "@/lib/slug";
import { locales, type Locale } from "@/lib/i18n";
import { renderMarkdown } from "@/lib/markdown";

type PostEditorProps = {
  post?: BlogPost;
};

type FormState = {
  title: string;
  slug: string;
  locale: Locale;
  excerpt: string;
  content: string;
  featuredImage: string;
  featuredImageAlt: string;
  published: boolean;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
};

function toDateTimeLocal(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  const pad = (part: number) => String(part).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function PostEditor({ post }: PostEditorProps) {
  const { t } = useLanguage();
  const router = useRouter();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [slugTouched, setSlugTouched] = useState(Boolean(post?.slug));
  const [form, setForm] = useState<FormState>({
    title: post?.title ?? "",
    slug: post?.slug ?? "",
    locale: post?.locale ?? "fa",
    excerpt: post?.excerpt ?? "",
    content: post?.content ?? "",
    featuredImage: post?.featuredImage ?? "",
    featuredImageAlt: post?.featuredImageAlt ?? "",
    published: post?.published ?? false,
    publishedAt: toDateTimeLocal(post?.publishedAt ?? new Date().toISOString()),
    seoTitle: post?.seoTitle ?? "",
    seoDescription: post?.seoDescription ?? "",
    keywords: post?.keywords ?? "",
  });

  const preview = useMemo(() => renderMarkdown(form.content), [form.content]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onUpload(file: File) {
    const data = new FormData();
    data.append("file", file);
    const response = await fetch("/api/admin/upload", {
      method: "POST",
      body: data,
    });
    const payload = (await response.json().catch(() => null)) as
      | { url?: string; error?: string }
      | null;
    if (!response.ok || !payload?.url) {
      throw new Error(payload?.error || "Upload failed.");
    }
    update("featuredImage", payload.url);
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");
    setMessage("");

    const payload = {
      ...form,
      publishedAt: form.publishedAt
        ? new Date(form.publishedAt).toISOString()
        : new Date().toISOString(),
    };

    const response = await fetch(
      post ? `/api/admin/posts/${post.id}` : "/api/admin/posts",
      {
        method: post ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    setPending(false);

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error || "Unable to save.");
      return;
    }

    setMessage(t.admin.saved);
    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-5">
        <label className="block text-sm font-medium text-charcoal">
          {t.admin.titleField}
          <input
            className="admin-field mt-2"
            value={form.title}
            onChange={(event) => {
              const title = event.target.value;
              update("title", title);
              if (!slugTouched) {
                update("slug", slugify(title));
              }
            }}
            required
          />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          {t.admin.slug}
          <input
            className="admin-field mt-2"
            value={form.slug}
            onChange={(event) => {
              setSlugTouched(true);
              update("slug", event.target.value);
            }}
            required
          />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          {t.admin.excerpt}
          <textarea
            className="admin-field mt-2 min-h-24"
            value={form.excerpt}
            onChange={(event) => update("excerpt", event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          {t.admin.content}
          <textarea
            className="admin-field mt-2 min-h-72 font-mono text-sm"
            value={form.content}
            onChange={(event) => update("content", event.target.value)}
            placeholder="## Heading&#10;&#10;Paragraph with **bold** and [link](https://example.com)."
          />
        </label>
      </div>
      <div className="space-y-5">
        <label className="block text-sm font-medium text-charcoal">
          {t.admin.language}
          <select
            className="admin-field mt-2"
            value={form.locale}
            onChange={(event) => update("locale", event.target.value as Locale)}
          >
            {locales.map((locale) => (
              <option key={locale} value={locale}>
                {locale === "fa" ? t.language.fa : t.language.en}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-3 text-sm font-medium text-charcoal">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(event) => update("published", event.target.checked)}
          />
          {form.published ? t.admin.publish : t.admin.unpublish}
        </label>
        <label className="block text-sm font-medium text-charcoal">
          {t.admin.publishedAt}
          <input
            type="datetime-local"
            className="admin-field mt-2"
            value={form.publishedAt}
            onChange={(event) => update("publishedAt", event.target.value)}
          />
        </label>
        <div>
          <p className="text-sm font-medium text-charcoal">{t.admin.featuredImage}</p>
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            className="mt-2 block w-full text-sm"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              try {
                await onUpload(file);
              } catch (uploadError) {
                setError(
                  uploadError instanceof Error ? uploadError.message : "Upload failed.",
                );
              }
            }}
          />
          {form.featuredImage ? (
            <div className="relative mt-3 h-40 overflow-hidden border border-line">
              <Image
                src={form.featuredImage}
                alt={form.featuredImageAlt || form.title}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          ) : null}
        </div>
        <label className="block text-sm font-medium text-charcoal">
          {t.admin.imageAlt}
          <input
            className="admin-field mt-2"
            value={form.featuredImageAlt}
            onChange={(event) => update("featuredImageAlt", event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          {t.admin.seoTitle}
          <input
            className="admin-field mt-2"
            value={form.seoTitle}
            onChange={(event) => update("seoTitle", event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          {t.admin.seoDescription}
          <textarea
            className="admin-field mt-2 min-h-24"
            value={form.seoDescription}
            onChange={(event) => update("seoDescription", event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          {t.admin.keywords}
          <input
            className="admin-field mt-2"
            value={form.keywords}
            onChange={(event) => update("keywords", event.target.value)}
          />
        </label>
        {error ? <p className="text-sm text-accent-hover">{error}</p> : null}
        {message ? <p className="text-sm text-navy">{message}</p> : null}
        <div className="flex gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-navy px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-navy"
            disabled={pending}
          >
            {t.admin.save}
          </button>
          <Link
            href="/admin"
            className="inline-flex items-center justify-center border border-line px-5 py-3 text-sm font-medium text-navy"
          >
            {t.blog.backToBlog}
          </Link>
        </div>
        <div>
          <p className="eyebrow text-xs font-medium text-accent">{t.admin.preview}</p>
          <div
            className="blog-content mt-3 border border-line bg-background p-5"
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        </div>
      </div>
    </form>
  );
}
