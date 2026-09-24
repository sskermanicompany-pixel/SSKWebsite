"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";
import type { BlogPost } from "@/lib/blog";

type BlogPreviewProps = {
  posts: BlogPost[];
};

export function BlogPreview({ posts }: BlogPreviewProps) {
  const { t, locale } = useLanguage();
  const visible = posts.filter((post) => post.locale === locale).slice(0, 3);

  return (
    <section
      id="blog"
      className="scroll-mt-24 border-y border-line bg-paper py-24 md:py-32"
      aria-labelledby="blog-heading"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="blog-heading"
            eyebrow={t.blog.eyebrow}
            title={t.blog.title}
            description={t.blog.description}
          />
          <Link
            href="/blog"
            className="inline-flex items-center justify-center border border-navy px-5 py-3 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-paper"
          >
            {t.blog.allPosts}
          </Link>
        </div>
        {visible.length === 0 ? (
          <p className="mt-14 text-sm leading-7 text-muted">{t.blog.empty}</p>
        ) : (
          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {visible.map((post) => (
              <li key={post.id}>
                <BlogCard post={post} readMore={t.blog.readMore} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}

export function BlogCard({
  post,
  readMore,
}: {
  post: BlogPost;
  readMore: string;
}) {
  const date = formatDate(post.publishedAt, post.locale);

  return (
    <article className="group h-full border border-line bg-background">
      <Link href={`/blog/${encodeURIComponent(post.slug)}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-navy">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-navy-soft" />
          )}
        </div>
        <div className="p-6">
          <time
            className="eyebrow text-xs font-medium text-accent"
            dateTime={post.publishedAt}
          >
            {date}
          </time>
          <h3 className="mt-3 font-display text-2xl text-navy">{post.title}</h3>
          {post.excerpt ? (
            <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
          ) : null}
          <span className="mt-5 inline-flex text-sm font-medium text-accent transition-colors group-hover:text-accent-hover">
            {readMore}
          </span>
        </div>
      </Link>
    </article>
  );
}

export function formatDate(value: string, locale: "fa" | "en") {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
