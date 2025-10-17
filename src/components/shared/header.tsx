"use client";

import Link from "next/link";
import { Spade as Spades, Club as Clubs } from "lucide-react";

export default function Header() {
  const sections = [
    { href: "/", label: "Beranda" },
    { href: "/aturan", label: "Proposal Aturan" },
    { href: "/kontribusi", label: "Kontribusi" },
    { href: "/tentang", label: "Tentang" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and title */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <Spades className="w-6 h-6" />
            <Clubs className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold">
            <Link href="/">Capsa Standar Indonesia</Link>
          </h1>
        </div>

        {/* Navigation links */}
        <div className="flex gap-1 flex-wrap justify-end">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="px-4 py-2 rounded hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              {section.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
