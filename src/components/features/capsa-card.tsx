"use client";

import { CapsaCardProps } from "@/types/capsa-card";

export default function CapsaCard({ rank, suit }: CapsaCardProps) {
  const color = suit === "♥" || suit === "♦" ? "text-red-600" : "text-black";

  return (
    <div
      className={`w-14 h-20 border rounded-lg flex flex-col items-center justify-center shadow-md bg-white ${color}`}
    >
      <span className="text-lg font-bold">{rank}</span>
      <span className="text-xl">{suit}</span>
    </div>
  );
}
