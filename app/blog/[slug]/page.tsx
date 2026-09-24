import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog-article";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";
import { getSiteUrl, site } from "@/lib/site";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    return { title: "Blog" };
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const canonical = `/blog/${encodeURIComponent(post.slug)}`;
  const keywords = post.keywords
    ? post.keywords.split(",").map((item) => item.trim()).filter(Boolean)
    : undefined;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "article",
      locale: post.locale === "fa" ? "fa_IR" : "en_US",
      url: canonical,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              alt: post.featuredImageAlt || post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: post.featuredImage ? "summary_large_image" : "summary",
      title,
      description,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  const related = (await getPublishedPosts(post.locale)).filter(
    (item) => item.id !== post.id,
  );
  const html = renderMarkdown(post.content);
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: post.locale === "fa" ? "fa-IR" : "en-US",
    mainEntityOfPage: `${siteUrl}/blog/${encodeURIComponent(post.slug)}`,
    image: post.featuredImage || undefined,
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${site.logos.fa}`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticle post={post} related={related} html={html} />
    </>
  );
}
