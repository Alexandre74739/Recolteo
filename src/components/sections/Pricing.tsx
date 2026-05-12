import Reveal from "../animations/Reveal";
import PricingCard from "../ui/PricingCard";
import { pricingPlans } from "@/src/lib/pricing";

export default function Pricing() {
  return (
    <section
      id="tarifs"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-sapin/[0.03]"
    >
      <div className="max-w-7xl mx-auto">

        <Reveal delay={0}>
          <div className="mb-14">
            <h2 className="text-sapin font-black mb-4">
              Des tarifs{" "}
              <span className="italic text-peach">simples</span>
            </h2>
            <p className="text-sapin/65 max-w-md leading-relaxed">
              Gratuit pour démarrer, flexible pour grandir. Aucune carte
              bancaire requise.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={0.1 + i * 0.1}>
              <div className={`h-full ${plan.highlighted ? "lg:-mt-6 lg:mb-0" : ""}`}>
                <PricingCard plan={plan} />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
