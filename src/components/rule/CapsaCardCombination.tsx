"use client";
import CapsaCardContainer from "../features/capsa-card-container";

export default function CapsaCardCombination() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">
        2 Kombinasi Kartu
      </h2>
      <p className="mb-12 text-foreground/80">
        Berikut adalah kombinasi kartu yang digunakan dalam Capsa Indonesia
        beserta contoh visualnya.
      </p>

      {/* Tunggal */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Tunggal</h3>
        <p className="text-foreground/80 mb-4">
          Satu kartu tunggal. Untuk alasan kemudahan menulis, dalam hal ini satu
          kartu pun juga disebut sebagai kombinasi.
        </p>
        <CapsaCardContainer
          title="Contoh Tunggal"
          cards={[{ rank: "7", suit: "♣" }]}
        />
      </div>

      {/* Pasangan */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Pasangan</h3>
        <p className="text-foreground/80 mb-4">
          Dua kartu dengan nilai yang sama.
        </p>
        <CapsaCardContainer
          title="Contoh Pasangan"
          cards={[
            { rank: "9", suit: "♠" },
            { rank: "9", suit: "♥" },
          ]}
        />
      </div>

      {/* Triple */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Triple</h3>
        <p className="text-foreground/80 mb-4">
          Tiga kartu dengan nilai yang sama.
        </p>
        <CapsaCardContainer
          title="Contoh Triple"
          cards={[
            { rank: "Q", suit: "♠" },
            { rank: "Q", suit: "♦" },
            { rank: "Q", suit: "♥" },
          ]}
        />
      </div>

      {/* Straight */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Straight</h3>
        <p className="text-foreground/80 mb-4">
          Lima kartu berurutan, tidak harus memiliki simbol yang sama.
        </p>
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
      </div>

      {/* Flush */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Flush</h3>
        <p className="text-foreground/80 mb-4">
          Lima kartu dengan simbol yang sama, tidak harus berurutan.
        </p>
        <CapsaCardContainer
          title="Contoh Flush"
          cards={[
            { rank: "3", suit: "♥" },
            { rank: "6", suit: "♥" },
            { rank: "7", suit: "♥" },
            { rank: "9", suit: "♥" },
            { rank: "A", suit: "♥" },
          ]}
        />
      </div>

      {/* Full House */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Full House</h3>
        <p className="text-foreground/80 mb-4">
          Tiga kartu dengan nilai sama ditambah satu pasangan.
        </p>
        <CapsaCardContainer
          title="Contoh Full House"
          cards={[
            { rank: "8", suit: "♠" },
            { rank: "8", suit: "♦" },
            { rank: "8", suit: "♥" },
            { rank: "K", suit: "♠" },
            { rank: "K", suit: "♦" },
          ]}
        />
      </div>

      {/* Four of a Kind */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Four of a Kind</h3>
        <p className="text-foreground/80 mb-4">
          Empat kartu dengan nilai sama ditambah satu kicker.
        </p>
        <CapsaCardContainer
          title="Contoh Four of a Kind"
          cards={[
            { rank: "J", suit: "♠" },
            { rank: "J", suit: "♥" },
            { rank: "J", suit: "♦" },
            { rank: "J", suit: "♣" },
            { rank: "3", suit: "♠" },
          ]}
        />
      </div>

      {/* Straight Flush */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Straight Flush</h3>
        <p className="text-foreground/80 mb-4">
          Lima kartu berurutan dengan simbol yang sama.
        </p>
        <CapsaCardContainer
          title="Contoh Straight Flush"
          cards={[
            { rank: "5", suit: "♣" },
            { rank: "6", suit: "♣" },
            { rank: "7", suit: "♣" },
            { rank: "8", suit: "♣" },
            { rank: "9", suit: "♣" },
          ]}
        />
      </div>
    </section>
  );
}
