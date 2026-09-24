"use client";

import { Container } from "@/components/container";
import { BlogCard } from "@/components/blog-preview";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";
import type { BlogPost } from "@/lib/blog";

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const { t, locale } = useLanguage();
  const visible = posts.filter((post) => post.locale === locale);

  return (
    <main id="main" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow={t.blog.eyebrow}
          title={t.blog.title}
          description={t.blog.description}
        />
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
    </main>
  );
}
