"use client";

import Link from "next/link";
import { Spade as Spades, Club as Clubs, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const links = [
    { href: "/", label: "Beranda" },
    { href: "/aturan", label: "Proposal Aturan" },
    { href: "/kontribusi", label: "Kontribusi" },
    { href: "/tentang", label: "Tentang" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <Image
                  src="/capsa-indonesia.png"
                  width={32}
                  height={32}
                  alt="Capsa Standar Indonesia"
                  className="rounded-lg"
                />
              </div>
              <span className="font-bold">Capsa Standar Indonesia</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Proposal Standarisasi Capsa Indonesia
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Tautan</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-foreground transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:info@capsastandard.id"
                className="hover:text-primary-foreground transition"
              >
                tototrapsilo@wonderbyte.co
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>© 2025 Capsa Standar Indonesia. All rights reserved.</p>
          <p className="mt-2">♦♣ Capsa ♠♥</p>
        </div>
      </div>
    </footer>
  );
}
