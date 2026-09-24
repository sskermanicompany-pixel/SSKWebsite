import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Container } from "@/components/container";
import { PostEditor } from "@/components/post-editor";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "New post",
  robots: { index: false, follow: false },
};

export default async function NewPostPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin");
  }

  return (
    <main id="main" className="py-16 md:py-24">
      <Container>
        <h1 className="mb-10 font-display text-4xl text-navy">New post</h1>
        <PostEditor />
      </Container>
    </main>
  );
}
