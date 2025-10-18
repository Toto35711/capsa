"use client";

import {
  Spade as Spades,
  Heart as Hearts,
  Diamond as Diamonds,
  Club as Clubs,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-muted to-background overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10">
        <Spades className="w-24 h-24" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Hearts className="w-32 h-32" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-5">
        <Diamonds className="w-40 h-40" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center gap-2 mb-6">
          <Spades className="w-8 h-8 text-primary" />
          <Hearts className="w-8 h-8 text-primary" />
          <Diamonds className="w-8 h-8 text-primary" />
          <Clubs className="w-8 h-8 text-primary" />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
          Capsa Standar Indonesia
        </h2>

        <p className="text-xl text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
          Mencoba menyatukan beragam aturan-aturan Capsa yang ada di Indonesia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/aturan">
            <button className="px-8 py-3 cursor-pointer border-2 border-primary bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition-colors">
              Baca Proposal Aturan
            </button>
          </Link>

          <Link href="/latar-belakang">
            <button className="px-8 py-3 cursor-pointer border-2 border-primary text-primary rounded font-semibold hover:bg-primary/5 transition-colors">
              Latar Belakang
            </button>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Proposal standarisasi sejak 2025
        </p>
      </div>
    </section>
  );
}
