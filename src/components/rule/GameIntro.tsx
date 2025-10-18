"use client";

import {
  Users,
  Clock,
  Trophy,
  Hand,
  ArrowDownUp,
  Replace,
  Combine,
  SkipForward,
} from "lucide-react";

export default function GameIntro() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">
        1. Pengantar Permainan
      </h2>
      <p className="mb-8 text-foreground/80">
        Capsa dimainkan oleh <strong>4 pemain</strong> dengan{" "}
        <strong>1 set kartu standar 52 kartu</strong> secara bergiliran. Giliran
        berpindah secara searah jarum jam.
      </p>
      <ul className="list-disc list-inside text-foreground/80 space-y-4">
        <li className="flex items-start gap-2">
          <Users className="w-5 h-5 flex-shrink-0" />
          <span>
            Pemain yang memegang <strong>3♦</strong> memulai permainan pada
            putaran pertama. Di putaran pertama ini, pemain tersebut harus
            mengeluarkan kombinasi kartu yang mengandung kartu{" "}
            <strong>3♦</strong>.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <Replace className="w-5 h-5 flex-shrink-0" />
          <span>
            Setiap pemain pada gilirannya dapat melakukan dua pilihan:
            <ul className="mt-2">
              <li className="flex items-start gap-2">
                <Combine className="w-5 h-5 flex-shrink-0" />
                memainkan kombinasi kartu yang dapat mengalahkan kombinasi
                terakhir yang ada di meja, atau
              </li>
              <li className="flex items-start gap-2">
                <SkipForward className="w-5 h-5 flex-shrink-0" />
                melewati giliran.
              </li>
            </ul>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <Hand className="w-5 h-5 flex-shrink-0" />
          <span>
            Jika pemain mengeluarkan suatu kombinasi kartu dan semua pemain lain
            melewati giliran, maka pemain tersebut dapat bebas menentukan
            kombinasi apa yang akan diturunkan ke meja.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <Trophy className="w-5 h-5 flex-shrink-0" />
          Suatu putaran permainan berakhir ketika tiga dari empat pemain sudah
          menghabiskan semua kartu di tangan masing-masing.
        </li>
        <li className="flex items-start gap-2">
          <ArrowDownUp className="w-5 h-5 flex-shrink-0" />
          <span>
            Setelah putaran pertama, pemain dengan giliran pertama adalah pemain
            yang pertama kali menghabiskan semua kartunya di putaran sebelumnya.
          </span>
        </li>
      </ul>
    </section>
  );
}
