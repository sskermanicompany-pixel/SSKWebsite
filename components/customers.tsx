import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { customers } from "@/lib/site";

export function Customers() {
  return (
    <section
      id="customers"
      className="scroll-mt-24 border-y border-line bg-paper py-24 md:py-32"
      aria-labelledby="customers-heading"
    >
      <Container>
        <SectionHeading
          id="customers-heading"
          eyebrow="Customers"
          title="Built around foundry requirements."
          description="SSK’s primary customers are foundries and casting companies."
        />
        <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {customers.map((customer) => (
            <li
              key={customer}
              className="flex min-h-24 items-center justify-center bg-paper px-4 py-6 text-sm tracking-[0.16em] text-charcoal uppercase sm:min-h-28"
            >
              {customer}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
