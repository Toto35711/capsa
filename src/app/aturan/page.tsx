"use client";

import CapsaCardContainer from "@/components/features/capsa-card-container";
import CapsaCardCombination from "@/components/rule/CapsaCardCombination";
import CombinationOrdering from "@/components/rule/CominationRanking";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Rules() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Proposal Aturan
        </h1>
        <p className="text-lg text-foreground/70 mb-12">
          Standarisasi aturan Capsa Indonesia
        </p>

        <div className="space-y-6">
          <CapsaCardCombination />
          <CombinationOrdering />
        </div>
      </div>
    </section>
  );
}
