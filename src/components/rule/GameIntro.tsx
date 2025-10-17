"use client";

import { Users, Clock, Trophy, Hand } from "lucide-react";

export default function GameIntro() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">
        1. Pengantar Permainan
      </h2>
      <p className="mb-8 text-foreground/80">
        Capsa dimainkan oleh <strong>4 pemain</strong> dengan{" "}
        <strong>1 set kartu standar 52 kartu</strong> secara bergiliran. Pemain
        duduk mengelilingi meja dan giliran berpindah secara searah jarum jam.
      </p>
      <ul className="list-disc list-inside text-foreground/80 space-y-4">
        <li className="flex items-start gap-2">
          <Users className="w-5 h-5 flex-shrink-0" />
          <span>
            Pemain yang memegang <strong>3♦</strong> memulai permainan pada
            putaran pertama. Di putaran pertama ini, pemain tersebut harus
            mengeluarkan kombinasi kartu yang valid yang mengandung kartu{" "}
            <strong>3♦</strong>. Setelah putaran pertama, pemain dengan giliran
            pertama adalah pemain yang pertama kali menghabiskan semua kartunya
            di putaran sebelumnya.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <Clock className="w-5 h-5 flex-shrink-0" />
          <span>
            Setiap pemain pada gilirannya dapat memainkan kombinasi kartu yang
            valid dan dapat mengalahkan kombinasi terakhir yang ada di meja atau
            melewati giliran.
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
          Permainan berakhir ketika tiga dari empat pemain sudah menghabiskan
          semua kartu di tangan masing-masing.
        </li>
      </ul>
    </section>
  );
}
