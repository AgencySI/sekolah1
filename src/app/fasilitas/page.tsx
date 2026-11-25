import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PillLink from "@/components/PillLink";
import {
  CheckList,
  InfoCard,
  PhotoCard,
  SubCta,
} from "@/components/Sections";

export const metadata: Metadata = {
  title: "Fasilitas — Naraya School",
  description:
    "Lingkungan belajar yang mendukung anak bertanya, berkarya, bergerak, dan berekspresi. Lihat dari dekat lewat tur kampus, atau datang langsung di Open House 2026.",
};

export default function Fasilitas() {
  return (
    <>
      <PageHero
        image="/images/kampus.jpg"
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Fasilitas" },
        ]}
        title="Fasilitas"
        lead="Lingkungan belajar yang mendukung anak bertanya, berkarya, bergerak, dan berekspresi. Lihat dari dekat lewat tur kampus, atau datang langsung di Open House 2026."
      >
        <div className="hero-ctas mt-7 flex flex-wrap gap-3">
          <PillLink href="/#fasilitas" icon="play">
            Tonton Tur Kampus 01:42
          </PillLink>
        </div>
      </PageHero>

      <div className="page-wrap">
        <div className="page-grid c3">
          <InfoCard glyph="01" title="Ruang Kelas">
            Ruang belajar untuk diskusi, kerja kelompok, dan presentasi —
            tempat belajar dimulai dari mengenal setiap siswa.
          </InfoCard>
          <InfoCard glyph="02" title="Perpustakaan">
            Sudut baca dan referensi untuk menumbuhkan rasa penasaran dan
            kebiasaan belajar mandiri.
          </InfoCard>
          <InfoCard glyph="03" title="Area Sains">
            Ruang mencoba dan menguji ide untuk program Sains &amp; Inovasi.
          </InfoCard>
          <InfoCard glyph="04" title="Ruang Digital">
            Area berkarya dengan teknologi untuk program Digital &amp;
            Teknologi.
          </InfoCard>
          <InfoCard glyph="05" title="Studio Seni">
            Ruang berekspresi dan berimajinasi untuk program Seni &amp;
            Kreativitas.
          </InfoCard>
          <InfoCard glyph="06" title="Area Olahraga & Outdoor" tone="lime">
            Ruang bergerak, bermain, dan belajar bekerja sama di luar kelas.
          </InfoCard>
        </div>

        <div className="page-grid c2 mt-5">
          <PhotoCard
            image="/images/siswa-2.jpg"
            alt="Siswa di lingkungan kampus Naraya"
            title="Lingkungan Kampus"
          >
            Komunitas hangat tempat anak merasa aman, dikenal, dan didukung.
          </PhotoCard>
          <PhotoCard
            image="/images/siswa-1.jpg"
            alt="Siswa Naraya sedang belajar"
            title="Suasana Belajar"
          >
            Belajar dari pengalaman nyata, bersama teman dan guru.
          </PhotoCard>
        </div>

        <div className="split-2 mt-14">
          <div>
            <h2>Dirancang Mengikuti Cara Anak Belajar</h2>
            <p className="p1 mt-5 text-muted2">
              Fasilitas bagi kami bukan soal megah, melainkan soal cocok:
              setiap ruang menjawab satu cara belajar. Kelas untuk berdiskusi,
              perpustakaan untuk tenggelam dalam rasa penasaran, area sains
              untuk mengotori tangan dengan percobaan, dan ruang terbuka untuk
              bergerak dan bekerja sama.
            </p>
            <p className="p2 mt-4 text-muted2">
              Seluruh lingkungan kampus dirawat sebagai bagian dari komunitas
              yang hangat — tempat anak merasa aman, dikenal, dan didukung sejak
              ia melangkah masuk gerbang.
            </p>
          </div>
          <CheckList
            items={[
              <>
                <strong>Untuk bertanya:</strong>&nbsp;ruang kelas dan
                perpustakaan yang menumbuhkan rasa penasaran.
              </>,
              <>
                <strong>Untuk berkarya:</strong>&nbsp;area sains, ruang digital,
                dan studio seni untuk menguji dan mewujudkan ide.
              </>,
              <>
                <strong>Untuk bergerak:</strong>&nbsp;area olahraga dan outdoor
                untuk kebugaran, permainan, dan kerja tim.
              </>,
              <>
                <strong>Untuk bertumbuh:</strong>&nbsp;lingkungan kampus yang
                hangat sebagai rumah kedua bagi setiap anak.
              </>,
            ]}
          />
        </div>

        <div className="page-grid c3 mt-14">
          <PhotoCard
            image="/images/program-sains.jpg"
            alt="Area sains Naraya School"
            title="Area Sains"
          >
            Tempat ide diuji, bukan hanya dibayangkan.
          </PhotoCard>
          <PhotoCard
            image="/images/program-digital.jpg"
            alt="Ruang digital Naraya School"
            title="Ruang Digital"
          >
            Teknologi dipakai untuk berkarya, dengan pendampingan guru.
          </PhotoCard>
          <PhotoCard
            image="/images/program-seni.jpg"
            alt="Studio seni Naraya School"
            title="Studio Seni"
          >
            Ruang berekspresi tempat karya siswa dipajang dan dirayakan.
          </PhotoCard>
        </div>

        <SubCta
          title="Lebih Baik Lihat Langsung"
          cta={{ href: "/cerita/acara", label: "Lihat Acara" }}
        >
          Jadwalkan kunjungan atau datang ke Open House 2026 untuk merasakan
          suasana Naraya sendiri.
        </SubCta>
      </div>
    </>
  );
}
