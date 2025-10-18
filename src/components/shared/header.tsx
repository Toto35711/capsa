"use client";

import Link from "next/link";
import { useState } from "react";
import { Spade as Spades, Club as Clubs, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
            <Image
              src="/capsa-indonesia.png"
              width={32}
              height={32}
              alt="Capsa Standar Indonesia"
              className="rounded-lg"
            />
          </div>
          <h1 className="text-xl font-bold">
            <Link href="/">Capsa Standar Indonesia</Link>
          </h1>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-1">
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

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded hover:bg-primary-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-primary">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="block px-4 py-2 rounded hover:bg-primary-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {section.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
