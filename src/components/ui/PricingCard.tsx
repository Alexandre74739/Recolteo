import { Check, X } from "@deemlol/next-icons";
import type { PricingPlan } from "@/src/lib/pricing";
import Btn from "@/src/components/ui/Button";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const hl = plan.highlighted;

  return (
    <div
      className={`relative flex flex-col h-full rounded-3xl p-8 gap-7 ${
        hl
          ? "bg-sapin text-cream shadow-[0_12px_60px_rgba(6,87,63,0.22)]"
          : "bg-white border border-sapin/10 shadow-sm"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 left-8 bg-lime text-sapin text-xs font-bold px-4 py-1 rounded-full tracking-wide">
          {plan.badge}
        </span>
      )}

      <div>
        <p
          className={`text-xs font-bold uppercase tracking-widest mb-1 ${
            hl ? "text-lime" : "text-peach"
          }`}
        >
          {plan.target}
        </p>
        <h3 className={`text-2xl font-black m-0 ${hl ? "text-cream" : "text-sapin"}`}>
          {plan.name}
        </h3>
      </div>

      <div>
        <p
          className={`text-5xl font-black leading-none ${
            hl ? "text-lime" : "text-sapin"
          }`}
        >
          {plan.price}
        </p>
        <p className={`text-sm mt-1 ${hl ? "text-cream/55" : "text-sapin/45"}`}>
          {plan.period}
        </p>
      </div>

      <p className={`text-sm leading-relaxed ${hl ? "text-cream/70" : "text-sapin/65"}`}>
        {plan.description}
      </p>

      <ul className="flex flex-col gap-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3">
            {feature.included ? (
              <Check
                className={`w-5 h-5 shrink-0 mt-0.5 ${hl ? "text-lime" : "text-sapin"}`}
              />
            ) : (
              <X
                className={`w-5 h-5 shrink-0 mt-0.5 ${
                  hl ? "text-cream/20" : "text-sapin/20"
                }`}
              />
            )}
            <span
              className={`text-sm leading-snug ${
                feature.included
                  ? hl
                    ? "text-cream"
                    : "text-sapin"
                  : hl
                    ? "text-cream/35"
                    : "text-sapin/35"
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Btn
        label={plan.cta}
        href={plan.ctaHref}
        variant={hl ? "lime" : "sapin-outline"}
        showArrow={false}
      />
    </div>
  );
}
