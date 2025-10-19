"use client";

import CapsaCardCombination from "@/components/rule/CapsaCardCombination";
import CombinationRationale from "@/components/rule/CombinationRationale";
import CombinationOrdering from "@/components/rule/CominationRanking";
import FundamentalsOfProbability from "@/components/rule/FundamentalsOfProbability";
import GameIntro from "@/components/rule/GameIntro";
import MainGoal from "@/components/rule/MainGoal";
import Terminology from "@/components/rule/Terminology";

export default function Rules() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Proposal Aturan
        </h1>
        <p className="text-lg text-foreground/70 mb-12">
          Standarisasi aturan Capsa Indonesia.
        </p>

        <div className="space-y-6">
          <MainGoal />
          <Terminology />
          <GameIntro />
          <CapsaCardCombination />
          <CombinationOrdering />
          <FundamentalsOfProbability />
          <CombinationRationale />
        </div>
      </div>
    </section>
  );
}
