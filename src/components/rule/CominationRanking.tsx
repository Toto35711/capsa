"use client";

import CapsaCardContainer from "@/components/features/capsa-card-container";
import CapsaCardComparison from "../features/CapsaCardComparison";

export default function CombinationOrdering() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">
        3. Urutan Kartu dan Kombinasi
      </h2>
      <p className="mb-8 text-foreground/80">
        Dalam Capsa Indonesia, urutan kartu sangat penting untuk dapat
        menentukan kombinasi yang dapat mengalahkan kombinasi sebelumnya.
      </p>

      {/* Card Rank Order */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Urutan Nilai (Rank) Kartu
        </h3>
        <p className="text-foreground/80 mb-4">
          Nilai kartu dari yang terendah hingga tertinggi adalah:
        </p>
        <p className="text-foreground/80 font-mono mb-2">
          3 &lt; 4 &lt; 5 &lt; 6 &lt; 7 &lt; 8 &lt; 9 &lt; 10 &lt; J &lt; Q &lt;
          K &lt; A &lt; 2
        </p>
        <CapsaCardContainer
          title="Contoh Urutan Nilai"
          cards={[
            { rank: "3", suit: "♣" },
            { rank: "5", suit: "♦" },
            { rank: "7", suit: "♠" },
            { rank: "10", suit: "♥" },
            { rank: "A", suit: "♠" },
            { rank: "2", suit: "♦" },
          ]}
        />
      </div>

      {/* Suit Order */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Urutan Simbol (Suit) Kartu
        </h3>
        <p className="text-foreground/80 mb-4">
          Jika dua kombinasi memiliki nilai sama, urutan simbol digunakan untuk
          menentukan pemenang:
        </p>
        <p className="text-foreground/80 font-mono mb-2">
          ♦ Wajik (diamond) &lt; ♣ Keriting (clubs) &lt; ♥ Hati (heart) &lt; ♠
          Sekop (spades)
        </p>
        <CapsaCardContainer
          title="Contoh Urutan Simbol"
          cards={[
            { rank: "7", suit: "♦" },
            { rank: "7", suit: "♣" },
            { rank: "7", suit: "♥" },
            { rank: "7", suit: "♠" },
          ]}
        />
      </div>

      {/* Rules for playing based on order */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">
          Aturan Bermain Berdasarkan Urutan
        </h3>
        <p className="text-foreground/80 mb-4">
          Untuk dapat mengalahkan kombinasi lawan yang ada di meja, pemain harus
          memainkan kombinasi yang lebih tinggi dari kombinasi tersebut.
        </p>

        <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-2">
          <li>
            <strong>Single &lt; Single:</strong> Kartu Single hanya dapat
            dilawan oleh kartu Single lain dengan nilai lebih tinggi, nilai sama
            dengan simbol lebih tinggi, atau Bom.
            <div className="my-2">
              <CapsaCardComparison
                left={{
                  title: "Single",
                  cards: [{ rank: "K", suit: "♣" }],
                }}
                right={{
                  title: "Single",
                  cards: [{ rank: "2", suit: "♦" }],
                }}
                winner="right"
              />

              <CapsaCardComparison
                left={{
                  title: "Single",
                  cards: [{ rank: "7", suit: "♣" }],
                }}
                right={{
                  title: "Single",
                  cards: [{ rank: "7", suit: "♥" }],
                }}
                winner="right"
              />

              <CapsaCardComparison
                left={{
                  title: "Single",
                  cards: [{ rank: "2", suit: "♠" }],
                }}
                right={{
                  title: "Bom",
                  cards: [
                    { rank: "5", suit: "♦" },
                    { rank: "5", suit: "♣" },
                    { rank: "5", suit: "♥" },
                    { rank: "5", suit: "♠" },
                  ],
                }}
                winner="right"
              />
            </div>
          </li>
          <li>
            <strong>Double &lt; Double:</strong> Double hanya dapat dilawan
            Double lain dengan nilai lebih tinggi atau Double lain dengan nilai
            sama tetapi simbol lebih tinggi.
            <div className="my-2">
              <CapsaCardComparison
                left={{
                  title: "Double",
                  cards: [
                    { rank: "5", suit: "♣" },
                    { rank: "5", suit: "♥" },
                  ],
                }}
                right={{
                  title: "Double",
                  cards: [
                    { rank: "9", suit: "♦" },
                    { rank: "9", suit: "♠" },
                  ],
                }}
                winner="right"
              />

              <CapsaCardComparison
                left={{
                  title: "Double",
                  cards: [
                    { rank: "5", suit: "♣" },
                    { rank: "5", suit: "♥" },
                  ],
                }}
                right={{
                  title: "Double",
                  cards: [
                    { rank: "5", suit: "♦" },
                    { rank: "5", suit: "♠" },
                  ],
                }}
                winner="right"
              />
            </div>
          </li>
          <li>
            <strong>Triple &lt; Triple:</strong> Triple hanya dapat dilawan
            Triple lain dengan nilai yang lebih tinggi menang.
            <div className="my-2">
              <CapsaCardComparison
                left={{
                  title: "Triple",
                  cards: [
                    { rank: "5", suit: "♣" },
                    { rank: "5", suit: "♥" },
                    { rank: "5", suit: "♠" },
                  ],
                }}
                right={{
                  title: "Triple",
                  cards: [
                    { rank: "9", suit: "♦" },
                    { rank: "9", suit: "♣" },
                    { rank: "9", suit: "♠" },
                  ],
                }}
                winner="right"
              />
            </div>
          </li>
          <li>
            <strong>Bom &lt; Bom:</strong> Bom hanya dapat dilawan Bom lain
            dengan nilai yang lebih tinggi menang. Bom juga dapat digunakan
            untuk mengalahkan Single dengan nilai apapun (termasuk 2).
            <div className="my-2">
              <CapsaCardComparison
                left={{
                  title: "Bom",
                  cards: [
                    { rank: "5", suit: "♦" },
                    { rank: "5", suit: "♣" },
                    { rank: "5", suit: "♥" },
                    { rank: "5", suit: "♠" },
                  ],
                }}
                right={{
                  title: "Bom",
                  cards: [
                    { rank: "9", suit: "♦" },
                    { rank: "9", suit: "♣" },
                    { rank: "9", suit: "♥" },
                    { rank: "9", suit: "♠" },
                  ],
                }}
                winner="right"
              />
              <CapsaCardComparison
                left={{
                  title: "Bom",
                  cards: [{ rank: "A", suit: "♦" }],
                }}
                right={{
                  title: "Bom",
                  cards: [
                    { rank: "9", suit: "♦" },
                    { rank: "9", suit: "♣" },
                    { rank: "9", suit: "♥" },
                    { rank: "9", suit: "♠" },
                  ],
                }}
                winner="right"
              />
            </div>
          </li>
          <li>
            <strong>Straight &lt; Straight / Flush / Full House:</strong>{" "}
            Straight dapat dikalahkan oleh Straight yang lebih tinggi atau
            kombinasi dengan peringkat lebih tinggi (Flush, Full House, Four of
            a Kind, Straight Flush). Untuk dua Straight dengan urutan nilai
            sama, nilai tertinggi dibandingkan untuk melihat kombinasi mana yang
            lebih tinggi.
            <div className="my-2">
              <CapsaCardComparison
                left={{
                  title: "Straight",
                  cards: [
                    { rank: "3", suit: "♠" },
                    { rank: "4", suit: "♦" },
                    { rank: "5", suit: "♣" },
                    { rank: "6", suit: "♣" },
                    { rank: "7", suit: "♦" },
                  ],
                }}
                right={{
                  title: "Straight",
                  cards: [
                    { rank: "3", suit: "♦" },
                    { rank: "4", suit: "♥" },
                    { rank: "5", suit: "♦" },
                    { rank: "6", suit: "♦" },
                    { rank: "7", suit: "♠" },
                  ],
                }}
                winner="right"
              />
              <CapsaCardComparison
                left={{
                  title: "Straight",
                  cards: [
                    { rank: "3", suit: "♠" },
                    { rank: "4", suit: "♥" },
                    { rank: "5", suit: "♦" },
                    { rank: "6", suit: "♣" },
                    { rank: "7", suit: "♠" },
                  ],
                }}
                right={{
                  title: "Flush",
                  cards: [
                    { rank: "4", suit: "♥" },
                    { rank: "6", suit: "♥" },
                    { rank: "7", suit: "♥" },
                    { rank: "9", suit: "♥" },
                    { rank: "A", suit: "♥" },
                  ],
                }}
                winner="right"
              />
            </div>
          </li>
          <li>
            <strong>
              Flush &lt; Flush / Full House / Four of a Kind / Straight Flush:
            </strong>{" "}
            Flush dapat dikalahkan oleh Flush lebih tinggi atau kombinasi
            peringkat lebih tinggi (Full House, Four of a Kind, Straight Flush).
            <div className="my-2">
              <CapsaCardComparison
                left={{
                  title: "Flush",
                  cards: [
                    { rank: "4", suit: "♥" },
                    { rank: "6", suit: "♥" },
                    { rank: "7", suit: "♥" },
                    { rank: "9", suit: "♥" },
                    { rank: "A", suit: "♥" },
                  ],
                }}
                right={{
                  title: "Full House",
                  cards: [
                    { rank: "J", suit: "♠" },
                    { rank: "J", suit: "♦" },
                    { rank: "J", suit: "♥" },
                    { rank: "7", suit: "♣" },
                    { rank: "7", suit: "♦" },
                  ],
                }}
                winner="right"
              />
            </div>
          </li>
          <li>
            <strong>
              Full House &lt; Full House / Four of a Kind / Straight Flush:
            </strong>{" "}
            Full House dapat dikalahkan oleh Full House lebih tinggi atau
            kombinasi peringkat lebih tinggi (Four of a Kind, Straight Flush).
            Untuk membandingkan dua Full House, yang diperhatikan adalah kartu
            dengan tiga nilai yang sama.
            <div className="my-2">
              <CapsaCardComparison
                left={{
                  title: "Full House",
                  cards: [
                    { rank: "J", suit: "♠" },
                    { rank: "J", suit: "♦" },
                    { rank: "J", suit: "♥" },
                    { rank: "7", suit: "♣" },
                    { rank: "7", suit: "♦" },
                  ],
                }}
                right={{
                  title: "Full House",
                  cards: [
                    { rank: "Q", suit: "♠" },
                    { rank: "Q", suit: "♦" },
                    { rank: "Q", suit: "♥" },
                    { rank: "3", suit: "♣" },
                    { rank: "3", suit: "♦" },
                  ],
                }}
                winner="right"
              />

              <CapsaCardComparison
                left={{
                  title: "Full House",
                  cards: [
                    { rank: "J", suit: "♠" },
                    { rank: "J", suit: "♦" },
                    { rank: "J", suit: "♥" },
                    { rank: "7", suit: "♣" },
                    { rank: "7", suit: "♦" },
                  ],
                }}
                right={{
                  title: "Four of a Kind",
                  cards: [
                    { rank: "9", suit: "♠" },
                    { rank: "9", suit: "♥" },
                    { rank: "9", suit: "♦" },
                    { rank: "9", suit: "♣" },
                    { rank: "2", suit: "♠" },
                  ],
                }}
                winner="right"
              />
            </div>
          </li>
          <li>
            <strong>
              Four of a Kind &lt; Four of a Kind / Straight Flush:
            </strong>{" "}
            Four of a Kind dikalahkan oleh Four of a Kind lebih tinggi atau
            Straight Flush.
            <div className="my-2">
              <CapsaCardComparison
                left={{
                  title: "Four of a Kind",
                  cards: [
                    { rank: "9", suit: "♠" },
                    { rank: "9", suit: "♥" },
                    { rank: "9", suit: "♦" },
                    { rank: "9", suit: "♣" },
                    { rank: "2", suit: "♠" },
                  ],
                }}
                right={{
                  title: "Straight Flush",
                  cards: [
                    { rank: "9", suit: "♠" },
                    { rank: "10", suit: "♠" },
                    { rank: "J", suit: "♠" },
                    { rank: "Q", suit: "♠" },
                    { rank: "K", suit: "♠" },
                  ],
                }}
                winner="right"
              />
            </div>
          </li>
          <li>
            <strong>Straight Flush:</strong> kombinasi tertinggi untuk kombinasi
            lima kartu, hanya dikalahkan oleh straight flush lebih tinggi.
            <div className="my-2">
              <CapsaCardComparison
                left={{
                  title: "Straight Flush",
                  cards: [
                    { rank: "9", suit: "♠" },
                    { rank: "10", suit: "♠" },
                    { rank: "J", suit: "♠" },
                    { rank: "Q", suit: "♠" },
                    { rank: "K", suit: "♠" },
                  ],
                }}
                right={{
                  title: "Straight Flush",
                  cards: [
                    { rank: "10", suit: "♦" },
                    { rank: "J", suit: "♦" },
                    { rank: "Q", suit: "♦" },
                    { rank: "K", suit: "♦" },
                    { rank: "A", suit: "♦" },
                  ],
                }}
                winner="right"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
