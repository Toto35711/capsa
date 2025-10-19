"use client";

import { InlineMath, BlockMath } from "react-katex";

export default function FundamentalsOfProbability() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">
        4. Dasar Teori Peluang
      </h2>
      {/* Basic Probability Theory */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-primary">
          4.1. Dasar Teori Peluang
        </h3>
        <p className="text-foreground/80 mb-6">
          Ide utama dari urutan kombinasi di sini adalah semakin langka suatu
          kombinasi, semakin tinggi urutannya. Oleh karena itu, sebelum membahas
          rasionalisasi aturan lebih lanjut, kita perlu meninjau terlebih dahulu
          dasar-dasar teori peluang yang menjadi dasar analisis.
        </p>
        <p className="text-foreground/80 mb-4">
          Untuk menganalisis tingkat kelangkaan kombinasi kartu secara
          matematis, kita menggunakan konsep dasar dalam teori peluang. Peluang
          suatu <strong>kejadian</strong> <InlineMath math="A" />, disimbolkan
          dengan <InlineMath math="P(A)" />, didefinisikan sebagai perbandingan
          antara banyaknya cara terjadinya kejadian tersebut dengan banyaknya
          seluruh hasil yang mungkin terjadi dalam <strong>ruang sampel</strong>
          .
        </p>
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
    </section>
  );
}
