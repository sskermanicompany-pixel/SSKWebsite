"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container } from "@/components/container";
import { formatDate } from "@/components/blog-preview";
import { useLanguage } from "@/components/language-provider";
import type { BlogPost } from "@/lib/blog";

type AdminDashboardProps = {
  posts: BlogPost[];
  persistence: "blob" | "filesystem";
};

export function AdminDashboard({ posts, persistence }: AdminDashboardProps) {
  const { t } = useLanguage();
  const router = useRouter();

  async function onDelete(id: string) {
    if (!window.confirm(t.admin.confirmDelete)) {
      return;
    }

    const response = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    if (response.ok) {
      router.refresh();
    }
  }

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  }

  return (
    <main id="main" className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-xs font-medium text-accent">{t.admin.title}</p>
            <h1 className="mt-3 font-display text-4xl text-navy">{t.admin.title}</h1>
          </div>
          <div className="flex gap-3">
            <Link
              href="/admin/new"
              className="inline-flex items-center justify-center bg-navy px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-navy"
            >
              {t.admin.newPost}
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center border border-line px-5 py-3 text-sm font-medium text-navy"
              onClick={onLogout}
            >
              {t.admin.logout}
            </button>
          </div>
        </div>
        {persistence === "filesystem" ? (
          <p className="mt-6 text-sm leading-7 text-muted">{t.admin.persistenceHint}</p>
        ) : null}
        {posts.length === 0 ? (
          <p className="mt-12 text-sm text-muted">{t.admin.noPosts}</p>
        ) : (
          <ul className="mt-10 divide-y divide-line border border-line bg-paper">
            {posts.map((post) => (
              <li
                key={post.id}
                className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-navy">{post.title}</p>
                  <p className="mt-1 text-sm text-muted">
                    /blog/{post.slug} · {post.locale.toUpperCase()} ·{" "}
                    {post.published ? t.admin.publish : t.admin.unpublish} ·{" "}
                    {formatDate(post.publishedAt, post.locale)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/${post.id}`}
                    className="inline-flex border border-line px-4 py-2 text-sm text-navy hover:border-accent hover:text-accent"
                  >
                    {t.admin.edit}
                  </Link>
                  <button
                    type="button"
                    className="inline-flex border border-line px-4 py-2 text-sm text-navy hover:border-accent hover:text-accent"
                    onClick={() => onDelete(post.id)}
                  >
                    {t.admin.delete}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </main>
  );
}
