"use client";

import CapsaCard from "@/components/features/capsa-card";

export default function Terminology() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">
        0. Terminologi Pengantar
      </h2>

      <p className="mb-4 text-foreground/80">
        Sebelum memahami aturan, berikut istilah dasar dalam Capsa:
      </p>

      <ul className="list-disc list-inside text-foreground/80 space-y-3 mb-8">
        <li>
          <strong>Putaran (Round):</strong> Satu rangkaian permainan dari awal
          distribusi kartu sampai pertama kali 3 dari 4 pemain telah
          menghabiskan kartu di tangan. Satu permainan dapat terdiri dari lebih
          dari satu Putaran.
        </li>
        <li>
          <strong>Kombinasi Kartu (Hand):</strong> Serangkaian kartu yang
          digunakan bersama. Untuk kemudahan penulisan satu kartu juga disebut
          sebagai Kombinasi Kartu. Untuk selanjutnya, Kombinasi juga dapat
          merujuk pada Kombinasi Kartu.
        </li>
        <li>
          <strong>Nilai Kartu (Rank):</strong> Menunjukkan angka atau huruf pada
          kartu (misal: 3, 10, J, Q, K, A, 2). Kartu dengan nilai lebih tinggi
          mengalahkan yang lebih rendah dalam kombinasi yang setara.
        </li>
        <li>
          <strong>Simbol Kartu (Suit):</strong> Menunjukkan simbol kartu: ♠
          Sekop, ♥ Hati, ♦ Wajik, ♣ Keriting. Digunakan untuk menentukan
          kombinasi pemenang jika nilai sama.
        </li>
      </ul>

      <div className="flex flex-wrap gap-6 items-center mb-8">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-foreground/80 font-medium">
            Contoh Kartu
          </span>
          <CapsaCard rank="A" suit="♠" />
        </div>

        <div className="flex flex-col items-center">
          <span className="mb-2 text-foreground/80 font-medium">Nilai</span>
          <div className="text-lg font-bold text-primary">A</div>
        </div>

        <div className="flex flex-col items-center">
          <span className="mb-2 text-foreground/80 font-medium">Simbol</span>
          <div className="text-lg font-bold text-primary">♠</div>
        </div>
      </div>

      <p className="text-foreground/80">
        Istilah-istilah lain dijelaskan di bagian-bagian selanjutnya.
      </p>
    </section>
  );
}
