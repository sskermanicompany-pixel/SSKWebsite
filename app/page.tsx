import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Customers } from "@/components/customers";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { getGalleryImages } from "@/lib/gallery";

export default function Home() {
  const images = getGalleryImages();
  const heroImage = images.at(-1) ?? images[0];

  return (
    <main id="main">
      <Hero image={heroImage} />
      <About />
      <Services images={images} />
      <Projects images={images} />
      <Gallery images={images} />
      <Customers />
      <Contact />
    </main>
  );
}
