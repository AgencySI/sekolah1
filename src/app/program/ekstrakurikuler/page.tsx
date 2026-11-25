import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import {
  InfoCard,
  PhotoCard,
  Timeline,
} from "@/components/Sections";

export const metadata: Metadata = {
  title: "Ekstrakurikuler — Naraya School",
  description:
    "Minat anak tidak berhenti di jam pelajaran. Ekstrakurikuler memberi ruang untuk berekspresi, bergerak, dan menemukan bakat di luar ruang kelas.",
};

export default function Ekstrakurikuler() {
  return (
    <>
      <PageHero
        image="/images/program-seni.jpg"
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Program" },
          { label: "Ekstrakurikuler" },
        ]}
        title="Ekstrakurikuler"
        lead="Minat anak tidak berhenti di jam pelajaran. Ekstrakurikuler memberi ruang untuk berekspresi, bergerak, dan menemukan bakat di luar ruang kelas."
      />

      <div className="page-wrap">
        <div className="page-grid c2">
          <PhotoCard
            image="/images/program-sains.jpg"
            alt="Klub Sains"
            tag="Sains"
            title="Klub Sains & Inovasi"
          >
            Eksperimen dan proyek untuk anak yang penasaran dan suka menguji
            ide.
          </PhotoCard>
          <PhotoCard
            image="/images/program-digital.jpg"
            alt="Klub Digital"
            tag="Teknologi"
            title="Klub Digital & Teknologi"
          >
            Berkarya dengan teknologi secara bijak dan kreatif.
          </PhotoCard>
          <PhotoCard
            image="/images/program-seni.jpg"
            alt="Seni dan Kreativitas"
            tag="Seni"
            title="Seni & Kreativitas"
          >
            Ruang berekspresi dan berimajinasi lewat karya.
          </PhotoCard>
          <PhotoCard
            image="/images/kampus.jpg"
            alt="Kepemimpinan dan olahraga"
            tag="Kepemimpinan"
            title="Kepemimpinan & Olahraga"
          >
            Belajar memimpin, bekerja sama, dan menjaga kebugaran bersama tim.
          </PhotoCard>
        </div>

        <div className="split-2 mt-14">
          <div>
            <h2>Cara Siswa Memilih Kegiatannya</h2>
            <p className="p1 mt-5 text-muted2">
              Ekstrakurikuler bukan kewajiban untuk mengisi waktu, melainkan
              ruang untuk menemukan minat. Siswa boleh mencoba, berganti, dan
              akhirnya menekuni yang paling membuatnya bertumbuh.
            </p>
            <p className="p2 mt-4 text-muted2">
              Setiap kegiatan didampingi guru pembina, ditutup dengan penampilan
              atau karya di akhir periode, dan menjadi salah satu jalan menuju
              prestasi di bidangnya.
            </p>
          </div>
          <Timeline
            items={[
              {
                mark: "01",
                title: "Mencoba",
                desc: "Awal tahun ajaran, siswa mengenal semua pilihan kegiatan dan mencoba yang menarik baginya.",
              },
              {
                mark: "02",
                title: "Menekuni",
                desc: "Siswa memilih kegiatan utama dan berlatih secara rutin bersama pembina dan timnya.",
              },
              {
                mark: "03",
                title: "Menampilkan",
                desc: "Karya dan penampilan ditunjukkan ke komunitas sekolah — panggung kecil untuk keberanian yang besar.",
              },
            ]}
          />
        </div>

        <div className="page-grid c3 mt-14">
          <InfoCard glyph="◎" title="Minat Dulu, Baru Target">
            Kegiatan dipilih dari rasa suka siswa, bukan dari ambisi orang
            dewasa di sekitarnya.
          </InfoCard>
          <InfoCard glyph="◍" title="Tim Kecil, Teman Baru">
            Ekstrakurikuler mempertemukan siswa lintas kelas — latihan bekerja
            sama di luar lingkaran biasanya.
          </InfoCard>
          <InfoCard glyph="→" title="Jalan Menuju Prestasi" tone="lime">
            Banyak capaian siswa kami berawal dari kegiatan ekstrakurikuler yang
            ditekuni bertahun-tahun.
          </InfoCard>
        </div>
        <p className="p2 mt-8 max-w-[640px] text-muted">
          Pilihan kegiatan dapat berubah mengikuti minat siswa setiap tahun
          ajaran. Hubungi tim penerimaan untuk daftar kegiatan terbaru.
        </p>
      </div>
    </>
  );
}
