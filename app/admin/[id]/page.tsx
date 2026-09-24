import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Container } from "@/components/container";
import { PostEditor } from "@/components/post-editor";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getPostById } from "@/lib/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Edit post",
  robots: { index: false, follow: false },
};

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin");
  }

  const { id } = await params;
  const post = await getPostById(id);
  if (!post) {
    notFound();
  }

  return (
    <main id="main" className="py-16 md:py-24">
      <Container>
        <h1 className="mb-10 font-display text-4xl text-navy">{post.title}</h1>
        <PostEditor post={post} />
      </Container>
    </main>
  );
}
