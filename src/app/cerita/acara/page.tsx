import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PillLink from "@/components/PillLink";
import { InfoCard, Timeline } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Acara — Naraya School",
  description:
    "Cara terbaik mengenal Naraya adalah datang dan merasakannya sendiri. Berikut kegiatan yang bisa keluarga ikuti.",
};

function EventRow({
  tag,
  title,
  text,
  cta,
  image,
}: {
  tag: string;
  title: string;
  text: string;
  cta: { href: string; label: string };
  image?: { src: string; alt: string };
}) {
  return (
    <div className="event-row">
      <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: 120,
              height: 96,
              objectFit: "cover",
              borderRadius: 16,
              flexShrink: 0,
            }}
          />
        )}
        <div>
          <span className="tag">{tag}</span>
          <h3 className="mt-3">{title}</h3>
          <p className="p2 mt-1 text-muted" style={{ maxWidth: 560 }}>
            {text}
          </p>
        </div>
      </div>
      <PillLink href={cta.href} style={{ flexShrink: 0 }}>
        {cta.label}
      </PillLink>
    </div>
  );
}

export default function Acara() {
  return (
    <>
      <PageHero
        image="/images/kampus.jpg"
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Cerita" },
          { label: "Acara" },
        ]}
        title="Acara"
        lead="Cara terbaik mengenal Naraya adalah datang dan merasakannya sendiri. Berikut kegiatan yang bisa keluarga ikuti."
      />

      <div className="page-wrap">
        <div style={{ display: "grid", gap: "1.25rem" }}>
          <EventRow
            tag="Penerimaan 2026/2027"
            title="Open House 2026"
            text="Kenali Naraya lebih dekat: tur kampus, bertemu guru, dan tanya jawab seputar pendaftaran Tahun Ajaran 2026/2027 yang sudah dibuka."
            cta={{ href: "/#faq", label: "Hubungi Admisi" }}
            image={{ src: "/images/kampus.jpg", alt: "Open House Naraya School" }}
          />
          <EventRow
            tag="Sepanjang Tahun Ajaran"
            title="Tur Kampus"
            text="Tidak bisa menunggu Open House? Tonton dulu video tur kampus kami (01:42), lalu jadwalkan kunjungan langsung bersama tim penerimaan."
            cta={{ href: "/fasilitas", label: "Lihat Fasilitas" }}
          />
          <EventRow
            tag="Komunitas"
            title="Kegiatan Siswa & Keluarga"
            text="Dari kegiatan ekstrakurikuler sampai momen komunitas sekolah — keluarga adalah bagian dari perjalanan belajar anak di Naraya."
            cta={{ href: "/program/ekstrakurikuler", label: "Ekstrakurikuler" }}
          />
        </div>

        <div className="split-2 mt-14">
          <div>
            <h2>Seperti Apa Open House Berjalan</h2>
            <p className="p1 mt-5 text-muted2">
              Open House dirancang seperti hari biasa di Naraya — tanpa panggung
              yang dibuat-buat. Anda melihat sekolah apa adanya, dan anak Anda
              ikut merasakan jadi bagian darinya.
            </p>
          </div>
          <Timeline
            items={[
              {
                mark: "01",
                title: "Sambutan & Cerita Naraya",
                desc: "Mengenal Naraya sejak 2008: cara kami belajar, nilai yang kami jaga, dan komunitas yang kami bangun.",
              },
              {
                mark: "02",
                title: "Tur Kampus",
                desc: "Berkeliling ruang kelas, perpustakaan, area sains, ruang digital, studio seni, dan area outdoor bersama tim kami.",
              },
              {
                mark: "03",
                title: "Bertemu Guru",
                desc: "Bertanya langsung tentang pendampingan siswa, program unggulan, dan keseharian belajar anak.",
              },
              {
                mark: "04",
                title: "Konsultasi Pendaftaran",
                desc: "Langkah pendaftaran 2026/2027, info beasiswa, dan antar-jemput dijelaskan satu per satu oleh tim penerimaan.",
              },
            ]}
          />
        </div>

        <div className="page-grid c3 mt-14">
          <InfoCard glyph="01" title="Ajak Anak Ikut">
            Sekolah ini untuk anak Anda — biarkan ia ikut merasakan suasana dan
            menyampaikan kesannya sendiri.
          </InfoCard>
          <InfoCard glyph="02" title="Siapkan Pertanyaan">
            Tentang metode belajar, pendampingan, atau langkah setelah lulus —
            semua boleh ditanyakan langsung ke guru.
          </InfoCard>
          <InfoCard glyph="03" title="Konfirmasi Kehadiran" tone="lime">
            Hubungi tim penerimaan lewat bagian FAQ di beranda agar kunjungan
            Anda kami siapkan dengan baik.
          </InfoCard>
        </div>
        <p className="p2 mt-8 text-muted">
          Jadwal dan detail setiap acara dikonfirmasi oleh tim penerimaan.
          Hubungi kami lewat bagian FAQ di beranda untuk informasi terbaru.
        </p>
      </div>
    </>
  );
}
