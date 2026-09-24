"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { BlogCard, formatDate } from "@/components/blog-preview";
import { useLanguage } from "@/components/language-provider";
import type { BlogPost } from "@/lib/blog";

export function BlogArticle({
  post,
  related,
  html,
}: {
  post: BlogPost;
  related: BlogPost[];
  html: string;
}) {
  const { t } = useLanguage();
  const visibleRelated = related.filter((item) => item.locale === post.locale).slice(0, 3);

  return (
    <main id="main">
      <article className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="eyebrow text-xs font-medium text-accent">{t.blog.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-navy sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {t.blog.publishedOn}{" "}
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt, post.locale)}
            </time>
          </p>
          {post.featuredImage ? (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden border border-line bg-navy">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
          {post.excerpt ? (
            <p className="mt-8 text-lg leading-8 text-charcoal">{post.excerpt}</p>
          ) : null}
          <div
            className="blog-content mt-10"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Link
            href="/blog"
            className="mt-12 inline-flex border border-navy px-5 py-3 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-paper"
          >
            {t.blog.backToBlog}
          </Link>
        </Container>
      </article>
      {visibleRelated.length > 0 ? (
        <section className="border-t border-line bg-paper py-16" aria-labelledby="related-heading">
          <Container>
            <h2 id="related-heading" className="font-display text-3xl text-navy">
              {t.blog.related}
            </h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              {visibleRelated.map((item) => (
                <li key={item.id}>
                  <BlogCard post={item} readMore={t.blog.readMore} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </main>
  );
}
