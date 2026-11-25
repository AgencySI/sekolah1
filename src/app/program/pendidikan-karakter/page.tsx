import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import {
  CheckList,
  InfoCard,
  SubCta,
} from "@/components/Sections";

export const metadata: Metadata = {
  title: "Pendidikan Karakter — Naraya School",
  description:
    "Nilai penting, karakter lebih penting. Kami mendampingi anak tumbuh jujur, bertanggung jawab, dan berani — dalam belajar dan dalam bekerja sama.",
};

export default function PendidikanKarakter() {
  return (
    <>
      <PageHero
        image="/images/siswa-1.jpg"
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Program" },
          { label: "Pendidikan Karakter" },
        ]}
        title="Pendidikan Karakter"
        lead="Nilai penting, karakter lebih penting. Kami mendampingi anak tumbuh jujur, bertanggung jawab, dan berani — dalam belajar dan dalam bekerja sama."
      />

      <div className="page-wrap">
        <div className="page-grid c3">
          <InfoCard glyph="J" title="Jujur">
            Berani berkata dan bertindak benar, termasuk saat mengakui kesalahan
            dan belajar darinya.
          </InfoCard>
          <InfoCard glyph="T" title="Bertanggung Jawab" tone="lime">
            Memimpin diri sendiri dulu: menepati komitmen, merawat lingkungan,
            dan menyelesaikan yang dimulai.
          </InfoCard>
          <InfoCard glyph="B" title="Berani">
            Berani bertanya, berani mencoba, dan berani menyampaikan ide —
            dengan tetap menghargai orang lain.
          </InfoCard>
        </div>

        <div className="split-2 mt-14">
          <div>
            <h2>Karakter Dibentuk Lewat Keseharian</h2>
            <p className="p1 mt-5 text-muted2">
              Karakter tidak diajarkan lewat hafalan. Ia tumbuh dari pengalaman
              nyata: bekerja sama dalam tim, memimpin kegiatan, dan
              menyelesaikan masalah bersama.
            </p>
          </div>
          <CheckList
            items={[
              "Kepemimpinan dimulai dari memimpin diri sendiri.",
              "Kerja sama dengan teman dan guru sebagai latihan hidup bermasyarakat.",
              "Komunitas hangat yang membuat anak merasa aman untuk tumbuh.",
            ]}
          />
        </div>

        <h2 className="mt-14">Karakter dalam Keseharian</h2>
        <p className="p1 mt-5 max-w-[640px] text-muted2">
          Tidak ada mata pelajaran bernama karakter di jadwal kami — karena
          karakter dilatih di semua mata pelajaran, dan di semua momen di
          antaranya.
        </p>
        <div className="page-grid c3 mt-8">
          <InfoCard glyph="01" title="Di Kelas">
            Kejujuran akademik dijaga bersama: mengakui sumber, mengerjakan
            dengan usaha sendiri, dan berani bilang belum paham.
          </InfoCard>
          <InfoCard glyph="02" title="Dalam Tim">
            Peran bergilir dalam proyek kelompok melatih tanggung jawab: setiap
            anak memegang amanah dan menepatinya.
          </InfoCard>
          <InfoCard glyph="03" title="Di Panggung Kecil">
            Presentasi, diskusi, dan kegiatan kepemimpinan memberi panggung aman
            untuk berlatih berani menyampaikan pendapat.
          </InfoCard>
          <InfoCard glyph="04" title="Saat Gagal">
            Kegagalan dibahas, bukan disembunyikan. Anak belajar memperbaiki,
            meminta maaf, dan mencoba lagi dengan cara yang lebih baik.
          </InfoCard>
          <InfoCard glyph="05" title="Terhadap Lingkungan">
            Merawat ruang kelas dan lingkungan sekolah adalah latihan tanggung
            jawab yang paling dekat dan paling nyata.
          </InfoCard>
          <InfoCard glyph="06" title="Dari Teladan Guru" tone="lime">
            Karakter menular dari contoh. Guru kami memegang standar yang sama
            yang kami minta dari siswa.
          </InfoCard>
        </div>

        <SubCta
          title="Karakter yang Terlihat, Bukan Sekadar Terucap"
          cta={{ href: "/cerita/acara", label: "Lihat Acara" }}
        >
          Datang dan lihat sendiri keseharian siswa Naraya di Open House 2026.
        </SubCta>
      </div>
    </>
  );
}
