"use client";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

import CapsaCardContainer from "@/components/features/capsa-card-container";

export default function CombinationRationale() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">
        4. Rasionalisasi Aturan
      </h2>
      {/* Basic Probability Theory */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-primary">
          {" "}
          4.1. Dasar Teori Peluang{" "}
        </h3>{" "}
        <p className="text-foreground/80 mb-4">
          {" "}
          Untuk menganalisis tingkat kelangkaan kombinasi kartu secara
          matematis, kita menggunakan konsep dasar dalam teori peluang. Peluang
          suatu <strong>kejadian</strong> didefinisikan sebagai perbandingan
          antara banyaknya cara terjadinya kejadian tersebut dengan banyaknya
          seluruh hasil yang mungkin terjadi dalam <strong>ruang sampel</strong>
          .{" "}
        </p>{" "}
        <div className="mb-6">
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
            <BlockMath
              math={String.raw`
      \begin{align*}
      P(\text{A}) &= \dfrac{|A|}{|S|} \\[6pt]
      \end{align*}
    `}
            />
          </pre>
        </div>{" "}
        <p className="text-foreground/80 mb-4"> Dalam hal ini: </p>{" "}
        <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
          <li>
            <InlineMath math="S" /> disebut <strong>ruang sampel</strong>, yaitu
            himpunan semua hasil yang mungkin terjadi dari suatu percobaan.
          </li>
          <li>
            <InlineMath math="A" /> disebut <strong>kejadian</strong>, yaitu
            himpunan bagian dari <InlineMath math="S" /> yang memuat hasil-hasil
            dengan sifat tertentu.
          </li>
          <li>
            <InlineMath math="|S|" /> menyatakan banyaknya elemen dalam ruang
            sampel.
          </li>
          <li>
            <InlineMath math="|A|" /> menyatakan banyaknya elemen yang termasuk
            dalam kejadian.
          </li>
        </ul>
      </div>
      {/* Probability Model subsection */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-primary">
          4.2. Model Peluang Capsa
        </h3>
        <p className="mb-4 text-foreground/80">
          Untuk memodelkan peluang kemunculan kombinasi kartu, kami menggunakan
          model berbasis tangan pemain, yaitu setiap pemain menerima{" "}
          <strong>13 kartu </strong>
          dari total 52 kartu. peluang dihitung sebagai kemungkinan kombinasi
          tertentu muncul dalam <strong>sebuah tangan 13 kartu</strong>.
        </p>
        <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
          <li>
            <strong>Single:</strong> peluang mendapatkan kartu tertentu (misal
            2♠) di tangan 13 kartu.
          </li>
          <li>
            <strong>Pair, Triple, dan kombinasi lain:</strong> peluang
            mendapatkan kombinasi spesifik dalam tangan 13 kartu.
          </li>
          <li>
            Dengan model ini, kita dapat membandingkan kombinasi yang berbeda
            berdasarkan seberapa jarang kombinasi tersebut muncul di tangan
            pemain, sehingga ranking kombinasi menjadi lebih rasional.
          </li>
        </ul>
      </div>
      {/* Bomb subsection */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-primary">
          4.3. Alasan Aturan "Bom"
        </h3>
        <CapsaCardContainer
          title="Contoh Bom"
          cards={[
            { rank: "9", suit: "♠" },
            { rank: "9", suit: "♥" },
            { rank: "9", suit: "♦" },
            { rank: "9", suit: "♣" },
          ]}
        />
        <p className="text-foreground/80 mb-4">
          Aturan bom diperkenalkan untuk memberikan pemain alat strategis
          tambahan. Dengan adanya bom, pemain dapat mengalahkan Single apapun,
          menambah kedalaman strategi dan memungkinkan comeback bahkan jika
          kartu mereka awalnya kurang menguntungkan.
        </p>
        <p className="text-foreground/80 mb-4">
          Contoh spesifiknya sebagai berikut: misalkan lawan mengeluarkan Single
          2♠ karena ingin membuang kartu kecil (misalnya 4♠). Kita tentu tidak
          bisa mengetahui maksudnya secara pasti, tetapi dalam sudut pandang
          kita, itu merupakan salah satu kemungkinan jika setelah mengeluarkan
          Single 2♠, lawan masih menyisakan kartu di tangannya. Dengan adanya
          bom, kita dapat menggagalkan kemungkinan tersebut dan membuat posisi
          lawan menjadi kurang menguntungkan.
        </p>

        <p className="text-foreground/80 mb-4">
          Untuk mendukung alasan tersebut secara matematis, kita dapat melihat
          seberapa besar peluang munculnya kombinasi kartu tertentu di tangan
          seorang pemain. Model peluang yang digunakan di sini adalah: setiap
          pemain menerima 13 kartu dari total 52 kartu, tanpa pengembalian.
        </p>

        <div className="mb-6">
          <p className="mb-2 font-medium text-foreground">
            Peluang sebuah kartu tertentu (misal 2♠) ada di tangan 13 kartu:
          </p>

          <BlockMath
            math={String.raw`
      \begin{align*}
      P(\text{2♠ di tangan}) &= \dfrac{\binom{51}{12}}{\binom{52}{13}} \\[6pt]
                         &= \dfrac{13}{52} \\[6pt]
                         &= \dfrac{1}{4} \\[6pt]
                         &= 25\%
      \end{align*}
    `}
          />

          <p className="mt-2 text-foreground/80">
            Ada 13 posisi kartu dalam tangan, sehingga peluang satu kartu
            tertentu ikut terambil adalah 13 dari 52, atau 25%.
          </p>
        </div>

        <div className="mb-6">
          <p className="mb-2 font-medium text-foreground">
            Peluang dua kartu spesifik (misal 7♠ + 7♦) keduanya ada di tangan 13
            kartu:
          </p>

          <BlockMath
            math={String.raw`
      \begin{align*}
      P(\text{7♠ \& 7♦ di tangan}) 
      &= \dfrac{\binom{50}{11}}{\binom{52}{13}} \\[6pt]
      &= \dfrac{13}{52}\cdot\dfrac{12}{51} \\[6pt]
      &= \dfrac{13}{221} \\[6pt]
      &= \dfrac{1}{17} \\[6pt]
      &\approx 0.0588 \\[6pt]
      &= 5.88\%
      \end{align*}
    `}
          />

          <p className="mt-2 text-foreground/80">
            Artinya, peluang memiliki dua kartu tertentu dalam satu tangan 13
            kartu hanya sekitar 5.88%.
          </p>
        </div>

        <p className="text-foreground/80 mb-4">
          Dengan kata lain, kombinasi Single jauh lebih sering muncul
          dibandingkan kombinasi spesifik seperti Pair. Oleh karena itu, aturan
          bom yang hanya mengalahkan Single sudah cukup untuk menambah kedalaman
          strategi tanpa membuat permainan terlalu berat ke arah keberuntungan.
        </p>
      </div>
      {/* 5-card combinations subsection */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-primary">
          4.4. Rasionalisasi Urutan Kombinasi 5-Kartu
        </h3>
        <p className="text-foreground/80 mb-4">
          Kombinasi lima kartu diurutkan berdasarkan peluang kemunculannya.
          Semakin jarang kombinasi muncul, semakin tinggi peringkatnya. Hal ini
          menjadikan permainan lebih strategis karena pemain perlu menilai
          risiko dan peluang.
        </p>

        <ul className="list-disc list-inside text-foreground/80 space-y-3 mb-6">
          <li>
            <strong>Straight:</strong> Kombinasi lima kartu berurutan, cukup
            sering muncul.
          </li>
          <li>
            <strong>Flush:</strong> Lima kartu dengan simbol sama, lebih jarang
            daripada Straight.
          </li>
          <li>
            <strong>Full House:</strong> Tiga kartu sama + satu pasangan, lebih
            jarang daripada Flush.
          </li>
          <li>
            <strong>Four of a Kind:</strong> Empat kartu sama + kicker, sangat
            jarang.
          </li>
          <li>
            <strong>Straight Flush:</strong> Lima kartu berurutan dengan simbol
            sama, kombinasi paling sulit.
          </li>
        </ul>

        {/* Visual examples */}
        <div className="space-y-6">
          <CapsaCardContainer
            title="Contoh Straight"
            cards={[
              { rank: "3", suit: "♠" },
              { rank: "4", suit: "♥" },
              { rank: "5", suit: "♦" },
              { rank: "6", suit: "♣" },
              { rank: "7", suit: "♠" },
            ]}
          />
          <CapsaCardContainer
            title="Contoh Flush"
            cards={[
              { rank: "10", suit: "♥" },
              { rank: "J", suit: "♥" },
              { rank: "Q", suit: "♥" },
              { rank: "K", suit: "♥" },
              { rank: "A", suit: "♥" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
