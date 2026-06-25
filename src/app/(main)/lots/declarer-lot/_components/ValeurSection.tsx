"use client";

import { useState } from "react";
import Input from "@/src/components/ui/primitives/Input";

export default function ValeurSection() {
  const [montant, setMontant] = useState<string>("");

  const economie = montant ? parseFloat(montant) * 0.5 : 0;

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sm font-bold text-sapin/40 uppercase tracking-widest">
        Valeur et logistique
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Input
            id="montant_chiffre"
            name="montant_chiffre"
            label="Valeur estimée (€)"
            type="number"
            required
            min={0}
            step="0.01"
            placeholder="150"
            value={montant}
            onChange={(value) => setMontant(value)}
          />
        </div>

        <div>
          <Input
            id="montant_lettre"
            name="montant_lettre"
            label="Valeur en lettres"
            required
            placeholder="cent cinquante euros"
          />
        </div>

        <div className="sm:col-span-2">
          <div className="relative bg-sapin border border-sapin rounded-2xl shadow-[4px_4px_0_0_#04251c] px-6 py-5 overflow-hidden">
            <p className="relative z-10 text-cream text-sm">
              Vous allez économiser jusqu'à
            </p>
            <p className="relative z-10 text-lime font-black text-2xl sm:text-3xl leading-snug">
              {economie.toLocaleString("fr-FR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              €
            </p>
          </div>
        </div>

        <div className="sm:col-span-2">
          <Input
            id="instructions"
            name="instructions"
            label="Instructions (optionnel)"
            rows={3}
            placeholder="Contacter avant 18h, sonner au 2e…"
          />
        </div>
      </div>
    </section>
  );
}