import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import {
  CheckList,
  InfoCard,
  SubCta,
} from "@/components/Sections";
import { TestimonialCard, TestimonialSide } from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Testimoni — Naraya School",
  description:
    "Kata mereka yang pernah belajar di sini — tentang mengenal diri, bekerja sama, dan berani mewujudkan ide.",
};

export default function Testimoni() {
  return (
    <>
      <PageHero
        image="/images/alumni-2.jpg"
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Cerita" },
          { label: "Testimoni" },
        ]}
        title="Testimoni"
        lead="Kata mereka yang pernah belajar di sini — tentang mengenal diri, bekerja sama, dan berani mewujudkan ide."
      />

      <div className="page-wrap">
        <div className="testi-layout">
          <TestimonialCard
            cta={{ href: "/program/bimbingan-karir", label: "Bimbingan Karier" }}
          />
          <TestimonialSide
            items={[
              "Setiap anak dikenal dan didampingi sesuai potensinya.",
              "Komunitas hangat antara sekolah, siswa, dan keluarga.",
              "Belajar dari pengalaman nyata, dengan keberanian mencoba lagi.",
            ]}
          />
        </div>

        <h2 className="mt-14">Yang Paling Sering Disebut Keluarga</h2>
        <p className="p1 mt-5 max-w-[640px] text-muted2">
          Dari banyak cerita yang kami dengar, tiga hal ini yang paling sering
          muncul — dan ketiganya adalah hal yang memang sengaja kami jaga sejak
          2008.
        </p>
        <div className="page-grid c3 mt-8">
          <InfoCard glyph="◎" title="Anak Dikenal Namanya">
            Guru tahu minat, kekuatan, dan hari-hari sulit setiap anak. Anak
            berangkat sekolah dengan perasaan dikenal, bukan sekadar terdaftar.
          </InfoCard>
          <InfoCard glyph="B" title="Berani Berubah">
            Anak yang dulu malu bertanya menjadi berani menyampaikan ide —
            perubahan yang paling sering diceritakan orang tua kepada kami.
          </InfoCard>
          <InfoCard glyph="→" title="Siap Melangkah" tone="lime">
            Lulusan melangkah ke jenjang berikutnya dengan arah yang jelas: 98%
            lulusan kami diterima di pilihan studinya.
          </InfoCard>
        </div>

        <div className="split-2 mt-14">
          <div>
            <h2>Cerita Terbaik Adalah yang Anda Alami Sendiri</h2>
            <p className="p1 mt-5 text-muted2">
              Testimoni membantu membayangkan, tetapi tidak menggantikan
              pengalaman datang langsung. Ikuti Open House 2026, berkeliling
              kampus, dan berbincang dengan guru kami — lalu nilai sendiri
              apakah Naraya cocok untuk anak Anda.
            </p>
          </div>
          <CheckList
            items={[
              "Berkeliling kampus dan melihat suasana belajar yang sesungguhnya.",
              "Bertemu guru dan bertanya langsung tentang pendampingan siswa.",
              "Mendengar cerita komunitas sekolah dari sumbernya, bukan dari brosur.",
            ]}
          />
        </div>

        <SubCta
          title="Buat Cerita Anda Sendiri di Naraya"
          cta={{ href: "/cerita/acara", label: "Lihat Acara" }}
        >
          Pendaftaran Tahun Ajaran 2026/2027 sudah dibuka. Mulai dari satu
          kunjungan.
        </SubCta>
      </div>
    </>
  );
}
