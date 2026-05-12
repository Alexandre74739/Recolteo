import { Zap, TrendingUp, Shield } from "@deemlol/next-icons";
import { type ReactNode } from "react";
import Reveal from "../animations/Reveal";
import { aboutMission, aboutStats, aboutValues, type AboutValueKey } from "@/src/lib/about";

const iconMap: Record<AboutValueKey, ReactNode> = {
  Zap: <Zap size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Shield: <Shield size={24} />,
};

export default function About() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Mission */}
        <div className="max-w-2xl">
          <Reveal delay={0}>
            <span className="inline-flex items-center bg-sapin/8 text-sapin text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              {aboutMission.label}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-sapin font-black mb-6">
              {aboutMission.headline}{" "}
              <span className="relative whitespace-nowrap">
                <span
                  className="absolute inset-0 bg-lime rounded-xl -rotate-1 scale-x-110"
                  aria-hidden="true"
                />
                <span className="relative">{aboutMission.highlight}</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sapin/65 max-w-lg leading-relaxed">
              {aboutMission.description}
            </p>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.1}>
          <div className="bg-lime rounded-3xl px-8 py-10 sm:px-14 sm:py-12 grid grid-cols-3 gap-6">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl sm:text-5xl font-black text-sapin leading-none">
                  {stat.value}
                </p>
                <p className="text-sapin/65 text-xs sm:text-sm font-medium mt-2 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Valeurs */}
        <div className="grid sm:grid-cols-3 gap-6">
          {aboutValues.map((value, i) => (
              <Reveal key={value.title} delay={0.1 + i * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-sapin/8 shadow-sm flex flex-col gap-5 h-full">
                  <div className="w-12 h-12 bg-sapin/8 rounded-2xl flex items-center justify-center shrink-0 text-sapin">
                    {iconMap[value.icon]}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sapin font-bold text-xl m-0 leading-snug">
                      {value.title}
                    </h3>
                    <p className="text-sapin/60 text-sm leading-relaxed m-0">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
