import { About } from "@/components/about";
import { BlogPreview } from "@/components/blog-preview";
import { Contact } from "@/components/contact";
import { Customers } from "@/components/customers";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { getPublishedPosts } from "@/lib/blog";
import { getGalleryImages } from "@/lib/gallery";
import { getPartnerLogos } from "@/lib/partners";

export default async function Home() {
  const images = getGalleryImages();
  const heroImage = images.at(-1) ?? images[0];
  const partners = getPartnerLogos();
  const posts = await getPublishedPosts();

  return (
    <main id="main">
      <Hero image={heroImage} />
      <About />
      <Services images={images} />
      <Partners logos={partners} />
      <Projects images={images} />
      <Gallery images={images} />
      <BlogPreview posts={posts} />
      <Customers />
      <Contact />
    </main>
  );
}
