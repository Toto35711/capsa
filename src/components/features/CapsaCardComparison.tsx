"use client";

import CapsaCardContainer from "@/components/features/capsa-card-container";
import { CapsaCardProps } from "@/types/capsa-card";

interface CardComparisonProps {
  left: { title?: string; cards: CapsaCardProps[] };
  right: { title?: string; cards: CapsaCardProps[] };
  winner: "left" | "right";
}

export default function CapsaCardComparison({
  left,
  right,
  winner,
}: CardComparisonProps) {
  const getBorderClass = (side: "left" | "right") => {
    return winner === side ? "border-green-500" : "border-gray-300";
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 my-6">
      {/* Left combination */}
      <div className={`border-2 p-4 rounded ${getBorderClass("left")} flex-1`}>
        {left.title && (
          <h4 className="text-center font-semibold mb-2">{left.title}</h4>
        )}
        <CapsaCardContainer cards={left.cards} title={left.title} />
        {winner === "left" && (
          <p className="text-center text-green-600 font-bold mt-2">Menang</p>
        )}
      </div>

      <div className="text-xl font-bold mt-2 md:mt-0 md:mx-4">&lt;</div>

      {/* Right combination */}
      <div className={`border-2 p-4 rounded ${getBorderClass("right")} flex-1`}>
        {right.title && (
          <h4 className="text-center font-semibold mb-2">{right.title}</h4>
        )}
        <CapsaCardContainer cards={right.cards} title={right.title} />
        {winner === "right" && (
          <p className="text-center text-green-600 font-bold mt-2">Menang</p>
        )}
      </div>
    </div>
  );
}
