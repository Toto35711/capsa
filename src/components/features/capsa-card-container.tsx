"use client";

import { CapsaCardProps } from "@/types/capsa-card";
import CapsaCard from "./capsa-card";

interface CapsaCardContainerProps {
  cards: CapsaCardProps[];
  title?: string;
}

export default function CapsaCardContainer({
  cards,
  title,
}: CapsaCardContainerProps) {
  return (
    <div className="mb-6">
      {title && <h4 className="mb-2 font-semibold">{title}</h4>}
      <div className="flex gap-2">
        {cards.map((card, idx) => (
          <CapsaCard key={idx} rank={card.rank} suit={card.suit} />
        ))}
      </div>
    </div>
  );
}
