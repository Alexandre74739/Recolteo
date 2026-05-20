"use client";

import { useState } from "react";
import Reveal from "../animations/Reveal";
import LotCard, { type Lot } from "../ui/cards/LotCard";
import Btn from "../ui/primitives/Button";

const PAGE_SIZE = 10;

export default function CatalogueGrid({ lots }: { lots: Lot[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const hasMore = visible < lots.length;

  return (
    <div className="flex flex-col gap-8">
      <Reveal delay={0.2}>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {lots.slice(0, visible).map((lot) => (
            <LotCard key={lot.id_lot} lot={lot} />
          ))}
        </div>
      </Reveal>

      {hasMore && (
        <div className="flex justify-center">
          <Btn
            label={`Voir plus (${lots.length - visible} restants)`}
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            variant="sapin-outline"
            showArrow={false}
          />
        </div>
      )}
    </div>
  );
}
