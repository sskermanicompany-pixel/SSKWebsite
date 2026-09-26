import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";
import { locales } from "@/lib/i18n";
import { getServiceHref, getServicePageEntries } from "@/lib/services-navigation";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const posts = await getPublishedPosts();
  const services = getServicePageEntries();
  const updatedAt = new Date();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${encodeURIComponent(post.slug)}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...locales.flatMap((locale) =>
      services.map(({ segments }) => ({
        url: `${siteUrl}${getServiceHref(locale, segments)}`,
        lastModified: updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ),
  ];
}
