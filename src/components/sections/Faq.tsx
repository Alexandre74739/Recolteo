"use client";

import { useState } from "react";
import Reveal from "../animations/Reveal";
import FaqItem from "../ui/FaqItem";
import { faqItems } from "@/src/lib/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto">

        <Reveal delay={0}>
          <div className="mb-12">
            <h2 className="text-sapin font-black mb-4">
              Questions{" "}
              <span className="italic text-peach">fréquentes</span>
            </h2>
            <p className="text-sapin/65 max-w-md leading-relaxed">
              Tout ce que vous devez savoir avant de vous lancer.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {faqItems.map((item, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <FaqItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
