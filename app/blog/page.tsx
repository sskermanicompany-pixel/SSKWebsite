import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog-index";
import { getPublishedPosts } from "@/lib/blog";
import { dictionaries } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: dictionaries.fa.blog.title,
  description: dictionaries.fa.blog.description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: dictionaries.fa.blog.title,
    description: dictionaries.fa.blog.description,
    type: "website",
    url: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return <BlogIndex posts={posts} />;
}
