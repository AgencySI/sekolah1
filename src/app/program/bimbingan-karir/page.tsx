import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PillLink from "@/components/PillLink";
import {
  InfoCard,
  Timeline,
} from "@/components/Sections";
import { TestimonialCard } from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Bimbingan Karier — Naraya School",
  description:
    "Kami mendampingi siswa mengenal minatnya, memahami pilihannya, dan menyiapkan langkahnya — hasilnya, 98% lulusan kami diterima.",
};

export default function BimbinganKarir() {
  return (
    <>
      <PageHero
        image="/images/alumni.jpg"
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Program" },
          { label: "Bimbingan Karier" },
        ]}
        title="Bimbingan Karier"
        lead="Melangkah ke jenjang berikutnya butuh arah. Kami mendampingi siswa mengenal minatnya, memahami pilihannya, dan menyiapkan langkahnya — hasilnya, 98% lulusan kami diterima."
      />

      <div className="page-wrap">
        <div className="page-grid c3">
          <InfoCard glyph="01" title="Mengenal Minat & Potensi">
            Pendampingan dimulai dari siapa diri siswa: apa yang ia sukai,
            kuasai, dan ingin ia tekuni.
          </InfoCard>
          <InfoCard glyph="02" title="Memahami Pilihan Studi">
            Siswa dibantu membaca pilihan jenjang dan jurusan secara jernih,
            bersama guru dan keluarga.
          </InfoCard>
          <InfoCard glyph="03" title="Menyiapkan Langkah" tone="lime">
            Dari rencana belajar sampai kesiapan mental — siswa melangkah dengan
            percaya diri.
          </InfoCard>
        </div>

        <div className="split-2 mt-14">
          <TestimonialCard quote={false} />
          <div>
            <h2>Cerita Alumni Kami</h2>
            <p className="p1 mt-5 text-muted2">
              Alena adalah salah satu alumni yang kini menempuh studi Teknik
              Arsitektur. Perjalanannya dimulai dari hal yang sama: mengenal
              diri sendiri dulu, baru memilih arah.
            </p>
            <PillLink
              href="/cerita/testimoni"
              size="sm"
              className="mt-6"
            >
              Baca Testimoni Lainnya
            </PillLink>
          </div>
        </div>

        <h2 className="mt-14">Tahapan Pendampingan</h2>
        <p className="p1 mt-5 max-w-[640px] text-muted2">
          Bimbingan karier bukan satu kali konsultasi menjelang lulus. Ia
          berjalan bertahap, mengikuti pertumbuhan siswa dari tahun ke tahun.
        </p>
        <Timeline
          items={[
            {
              mark: "01",
              title: "Mengenal",
              desc: "Siswa dibantu memetakan minat, kekuatan, dan mata pelajaran yang paling menghidupkan rasa penasarannya.",
            },
            {
              mark: "02",
              title: "Menjelajahi",
              desc: "Pilihan bidang dan jenjang studi dikenalkan secara nyata — apa yang dipelajari, dan kehidupan seperti apa yang dijalani di dalamnya.",
            },
            {
              mark: "03",
              title: "Memutuskan",
              desc: "Bersama guru pendamping dan keluarga, siswa menyusun pilihan yang realistis dan sesuai dengan dirinya.",
            },
            {
              mark: "04",
              title: "Melangkah",
              desc: "Persiapan akademik dan mental ditempa sampai hari kelulusan — hasilnya, 98% lulusan kami diterima di jenjang pilihannya.",
            },
          ]}
        />

        <div className="page-grid c3 mt-14">
          <InfoCard glyph="◎" title="Untuk Siswa">
            Sesi pendampingan berkala untuk membaca minat, menetapkan target
            belajar, dan meninjau kembali rencana setiap semester.
          </InfoCard>
          <InfoCard glyph="◍" title="Untuk Keluarga">
            Orang tua dilibatkan sejak awal keputusan studi lanjut, agar pilihan
            anak dan dukungan keluarga berjalan searah.
          </InfoCard>
          <InfoCard glyph="→" title="Dari Alumni" tone="lime">
            Cerita alumni seperti Alena menjadi cermin nyata bagi siswa: jenjang
            berikutnya itu bisa dibayangkan, bukan sekadar dibayangkan jauh.
          </InfoCard>
        </div>
      </div>
    </>
  );
}
