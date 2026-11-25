import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import {
  CheckList,
  InfoCard,
  SubCta,
} from "@/components/Sections";

export const metadata: Metadata = {
  title: "Visi & Misi — Naraya School",
  description:
    "Arah yang kami jaga sejak 2008: anak yang mengenal dirinya, berani mewujudkan ide, dan tumbuh dengan karakter yang kuat.",
};

export default function VisiMisi() {
  return (
    <>
      <PageHero
        image="/images/hero-bg.png"
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Tentang" },
          { label: "Visi & Misi" },
        ]}
        title="Visi & Misi"
        lead="Arah yang kami jaga sejak 2008: anak yang mengenal dirinya, berani mewujudkan ide, dan tumbuh dengan karakter yang kuat."
      />

      <div className="page-wrap">
        <div className="page-grid c2">
          <article className="info-card dark">
            <span className="tag">Visi</span>
            <h3
              style={{
                fontSize: "clamp(1.5rem,2vw,2rem)",
                lineHeight: 1.25,
              }}
            >
              Menjadi sekolah yang mengenal setiap anak, dan mendampinginya
              tumbuh percaya diri, berkarakter, dan siap melangkah ke jenjang
              berikutnya.
            </h3>
            <p className="p2">
              Visi ini hidup dalam keseharian kami: dari cara guru menyapa
              siswa, sampai cara kami merancang pengalaman belajar.
            </p>
          </article>
          <article className="info-card lime">
            <span className="ic">→</span>
            <h3>Misi Kami</h3>
            <CheckList
              items={[
                "Mengenal setiap siswa — potensinya, minatnya, dan cara belajarnya.",
                "Menghubungkan belajar dengan kehidupan nyata, bukan sekadar menghafal.",
                "Membangun komunitas hangat antara sekolah, siswa, dan keluarga.",
                "Menanamkan karakter: jujur, bertanggung jawab, dan berani mencoba.",
              ]}
            />
          </article>
        </div>

        <h2 className="mt-14">Nilai yang Kami Hidupkan</h2>
        <div className="page-grid c3 mt-8">
          <InfoCard glyph="01" title="Mengenal Diri">
            Anak dibantu memahami kekuatan dan minatnya sendiri, sebagai bekal
            memilih langkah berikutnya.
          </InfoCard>
          <InfoCard glyph="02" title="Bekerja Sama">
            Belajar adalah kerja bersama — dengan teman, guru, dan keluarga
            sebagai satu komunitas.
          </InfoCard>
          <InfoCard glyph="03" title="Berani Mewujudkan Ide">
            Ide yang baik lahir dari keberanian mencoba. Gagal bukan akhir,
            melainkan bagian dari belajar.
          </InfoCard>
        </div>

        <h2 className="mt-14">Visi &amp; Misi dalam Keseharian</h2>
        <p className="p1 mt-5 max-w-[640px] text-muted2">
          Visi dan misi bukan pajangan di dinding. Keduanya kami terjemahkan
          menjadi keputusan-keputusan kecil yang diambil setiap hari di kelas,
          di lapangan, dan di ruang guru.
        </p>
        <div className="page-grid c3 mt-8">
          <InfoCard glyph="◎" title="Di Ruang Kelas">
            Guru memulai dari mengenal setiap siswa: materi disesuaikan dengan
            potensi dan cara belajar anak, bukan diseragamkan untuk semua.
          </InfoCard>
          <InfoCard glyph="⬡" title="Dalam Proyek & Kegiatan">
            Setiap proyek menghubungkan pelajaran dengan kehidupan nyata, dan
            memberi ruang bagi anak untuk mewujudkan idenya sendiri.
          </InfoCard>
          <InfoCard glyph="◍" title="Dalam Komunitas">
            Sekolah, siswa, dan keluarga saling mengenal dan mendukung — anak
            merasa aman untuk bertanya, mencoba, dan bertumbuh.
          </InfoCard>
        </div>

        <div className="split-2 mt-14">
          <div>
            <h2>Komitmen yang Kami Pegang</h2>
            <p className="p1 mt-5 text-muted2">
              Selama 18+ tahun, tiga komitmen ini tidak berubah, apa pun tren
              pendidikan yang datang dan pergi.
            </p>
          </div>
          <CheckList
            items={[
              <>
                <strong>Anak sebelum angka.</strong>&nbsp;Nilai penting,
                tetapi mengenal anak dan menumbuhkan karakternya selalu
                didahulukan.
              </>,
              <>
                <strong>Proses sebelum hasil instan.</strong>&nbsp;Keberanian
                mencoba dan mencoba lagi lebih kami hargai daripada jawaban
                yang sekadar benar.
              </>,
              <>
                <strong>Keluarga sebagai mitra.</strong>&nbsp;Orang tua adalah
                bagian dari komunitas belajar, bukan penonton dari luar.
              </>,
            ]}
          />
        </div>

        <SubCta
          title="Visi Ini Terlihat di Program Kami"
          cta={{
            href: "/program/pendidikan-karakter",
            label: "Pendidikan Karakter",
          }}
        >
          Lihat bagaimana visi dan misi diterjemahkan menjadi prestasi,
          bimbingan karier, pendidikan karakter, dan ekstrakurikuler.
        </SubCta>
      </div>
    </>
  );
}
