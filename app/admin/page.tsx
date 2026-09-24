import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin-dashboard";
import { AdminLogin } from "@/components/admin-login";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getAllPosts, persistenceMode } from "@/lib/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    return <AdminLogin />;
  }

  const posts = await getAllPosts();
  return <AdminDashboard posts={posts} persistence={persistenceMode()} />;
}
