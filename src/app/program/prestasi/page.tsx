import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import {
  CheckList,
  InfoCard,
  PhotoCard,
  SubCta,
} from "@/components/Sections";

export const metadata: Metadata = {
  title: "Prestasi — Naraya School",
  description:
    "32+ prestasi nasional menjadi bukti sederhana dari proses belajar yang serius — anak yang penasaran, teliti, dan berani menguji idenya.",
};

export default function Prestasi() {
  return (
    <>
      <PageHero
        image="/images/program-sains.jpg"
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Program" },
          { label: "Prestasi" },
        ]}
        title="Prestasi"
        lead="32+ prestasi nasional menjadi bukti sederhana dari proses belajar yang serius — anak yang penasaran, teliti, dan berani menguji idenya."
      />

      <div className="page-wrap">
        <Stats
          style={{ marginTop: 0 }}
          items={[
            { value: "32+", label: "Prestasi nasional" },
            { value: "98%", label: "Lulusan diterima" },
            { value: "18+", label: "Tahun pengalaman" },
          ]}
        />

        <div className="page-grid c3 mt-14">
          <PhotoCard
            image="/images/program-sains.jpg"
            alt="Sains dan Inovasi"
            tag="Sains & Inovasi"
            title="Berpikir Seperti Ilmuwan"
          >
            Bertanya, mencoba, dan menemukan — fondasi capaian siswa di bidang
            sains.
          </PhotoCard>
          <PhotoCard
            image="/images/program-digital.jpg"
            alt="Digital dan Teknologi"
            tag="Digital & Teknologi"
            title="Berkarya dengan Teknologi"
          >
            Memahami dan menggunakan teknologi dengan bijak, untuk berkarya.
          </PhotoCard>
          <PhotoCard
            image="/images/program-seni.jpg"
            alt="Seni dan Kreativitas"
            tag="Seni & Kreativitas"
            title="Berani Berekspresi"
          >
            Ruang berekspresi dan berimajinasi tempat ide-ide baru lahir.
          </PhotoCard>
        </div>

        <div className="split-2 mt-14">
          <div>
            <h2>Prestasi Dimulai dari Proses</h2>
            <p className="p1 mt-5 text-muted2">
              Kami tidak mengejar piala semata. Prestasi adalah hasil samping
              dari anak yang dikenal potensinya, didampingi gurunya, dan diberi
              ruang untuk mencoba lagi.
            </p>
          </div>
          <CheckList
            items={[
              "Pendampingan sesuai potensi setiap siswa, bukan target yang disamakan.",
              "Belajar kontekstual: memahami, mencoba, dan menerapkan di kehidupan nyata.",
              "Komunitas yang mendukung — guru, teman, dan keluarga berjalan bersama.",
            ]}
          />
        </div>

        <h2 className="mt-14">Bidang-Bidang Prestasi Siswa</h2>
        <p className="p1 mt-5 max-w-[640px] text-muted2">
          Capaian siswa tersebar di bidang yang sama dengan program unggulan
          kami — bukti bahwa pendampingan minat berjalan dari kelas sampai ke
          panggung kompetisi.
        </p>
        <div className="page-grid c4 mt-8">
          <InfoCard glyph="⬡" title="Sains & Inovasi">
            Karya dan kompetisi sains yang lahir dari kebiasaan bertanya,
            mencoba, dan menguji ide.
          </InfoCard>
          <InfoCard glyph="▣" title="Digital & Teknologi">
            Karya digital dan pemanfaatan teknologi secara bijak dan kreatif.
          </InfoCard>
          <InfoCard glyph="♛" title="Kepemimpinan">
            Peran dan capaian siswa dalam organisasi, debat, dan kegiatan
            kepemimpinan.
          </InfoCard>
          <InfoCard glyph="✿" title="Seni & Kreativitas" tone="lime">
            Karya dan penampilan seni dari ruang berekspresi yang kami
            sediakan.
          </InfoCard>
        </div>
        <p className="p2 mt-8 max-w-[640px] text-muted">
          Daftar capaian terbaru per bidang dapat diminta ke tim penerimaan
          saat kunjungan atau Open House 2026 — kami senang menceritakan proses
          di balik setiap capaian.
        </p>

        <SubCta
          title="Prestasi Anak Dimulai dari Minatnya"
          cta={{ href: "/#faq", label: "Hubungi Admisi" }}
        >
          Ceritakan minat anak Anda ke tim penerimaan, dan dengarkan bagaimana
          kami mendampinginya sampai jadi capaian.
        </SubCta>
      </div>
    </>
  );
}
