"use client";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-provider";

export function Customers() {
  const { t } = useLanguage();

  return (
    <section
      id="customers"
      className="scroll-mt-24 border-y border-line bg-paper py-24 md:py-32"
      aria-labelledby="customers-heading"
    >
      <Container>
        <SectionHeading
          id="customers-heading"
          eyebrow={t.customers.eyebrow}
          title={t.customers.title}
          description={t.customers.description}
        />
        <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {t.customers.items.map((customer) => (
            <li
              key={customer}
              className="flex min-h-24 items-center justify-center bg-paper px-4 py-6 text-sm font-medium text-charcoal sm:min-h-28"
            >
              {customer}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
