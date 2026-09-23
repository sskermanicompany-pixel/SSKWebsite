import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Customers } from "@/components/customers";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Customers />
      <Contact />
    </main>
  );
}
