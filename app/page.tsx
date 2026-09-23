import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Customers } from "@/components/customers";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Values } from "@/components/values";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Customers />
      <Values />
      <Contact />
    </main>
  );
}
