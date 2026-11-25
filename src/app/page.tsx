import type { Metadata } from "next";
import Link from "next/link";
import {
  IconAward,
  IconPlayerPlay,
  IconTarget,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";
import PillLink from "@/components/PillLink";
import Stats from "@/components/Stats";
import FaqAccordion from "@/components/FaqAccordion";
import { TestimonialCard, TestimonialSide } from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Naraya School — Belajar untuk Mengenal Diri, Berani Mewujudkan Ide",
  description:
    "Di Naraya School, anak bukan hanya belajar mengejar nilai. Sejak 2008, kami mendampingi setiap siswa mengenal dirinya, bekerja sama, dan berani mewujudkan idenya.",
};

const VALUES = [
  {
    icon: <IconTarget size={22} aria-hidden="true" />,
    title: "Fokus pada Siswa",
    text: "Setiap anak berbeda. Karena itu, belajar di Naraya dimulai dari mengenal setiap siswa, bukan dari menyamakan mereka.",
    tone: "bg-white",
    muted: "text-muted",
  },
  {
    icon: <IconUsers size={22} aria-hidden="true" />,
    title: "Komunitas Hangat",
    text: "Sekolah adalah rumah kedua. Anak belajar paling baik ketika ia merasa aman, dikenal, dan didukung oleh guru, teman, dan keluarga.",
    tone: "bg-lime",
    muted: "text-ink/70",
  },
  {
    icon: <IconWorld size={22} aria-hidden="true" />,
    title: "Belajar Kontekstual",
    text: "Belajar menjadi bermakna ketika terhubung dengan kehidupan nyata. Anak tidak hanya menghafal, tetapi memahami, mencoba, dan menerapkan.",
    tone: "bg-white",
    muted: "text-muted",
  },
  {
    icon: <IconAward size={22} aria-hidden="true" />,
    title: "Karakter Unggul",
    text: "Nilai penting, karakter lebih penting. Kami mendampingi anak tumbuh jujur, bertanggung jawab, dan berani, dalam belajar dan dalam bekerja sama.",
    tone: "bg-white",
    muted: "text-muted",
  },
];

const PROGRAMS = [
  {
    image: "/images/program-sains.jpg",
    alt: "Sains dan Inovasi",
    title: "Sains & Inovasi",
    text: "Bertanya, mencoba, dan menemukan. Anak belajar berpikir seperti ilmuwan: penasaran, teliti, dan berani menguji idenya.",
    offset: "",
  },
  {
    image: "/images/program-digital.jpg",
    alt: "Digital dan Teknologi",
    title: "Digital & Teknologi",
    text: "Belajar memahami dan menggunakan teknologi dengan bijak, untuk berkarya, bukan sekadar mengikuti.",
    offset: "lg:mt-16",
  },
  {
    image: "/images/kampus.jpg",
    alt: "Kepemimpinan",
    title: "Kepemimpinan",
    text: "Belajar memimpin dimulai dari memimpin diri sendiri: bertanggung jawab, mendengarkan, dan berani mengambil langkah.",
    offset: "",
  },
  {
    image: "/images/program-seni.jpg",
    alt: "Seni dan Kreativitas",
    title: "Seni & Kreativitas",
    text: "Ruang untuk berekspresi dan berimajinasi. Ide yang baik lahir dari keberanian mencoba hal baru.",
    offset: "lg:mt-16",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <img
          src="/images/hero-bg.png"
          alt="Kampus Naraya School"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0"></div>

        <div className="hero-inner relative mx-auto max-w-[1448px] px-5 pb-16 pt-32 sm:pt-40 lg:px-9 lg:pb-20 lg:pt-44">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <span className="inline-block rounded-full bg-lime px-4 py-1.5 text-xs font-bold text-ink">
                Penerimaan 2026/2027 Sudah Dibuka
              </span>
              <h1 className="mt-6 text-[52px] font-extrabold leading-[0.9] tracking-[-0.05em] text-white sm:text-7xl lg:text-[98px] lg:leading-[86px]">
                Belajar untuk Mengenal Diri,
                <br />
                <span className="text-lime">Berani Mewujudkan Ide.</span>
              </h1>
              <p className="p1 mt-6 max-w-[576px] text-white/75">
                Di Naraya School, anak bukan hanya belajar mengejar nilai.
                Sejak 2008, dengan 18+ tahun pengalaman, kami mendampingi
                setiap siswa mengenal dirinya, bekerja sama, dan berani
                mewujudkan idenya.
              </p>
              <div className="hero-ctas mt-7 flex flex-wrap items-center gap-3">
                <PillLink href="/#faq">Daftar Sekarang</PillLink>
                <PillLink href="/fasilitas" variant="white">
                  Ikuti Open House 2026
                </PillLink>
              </div>
            </div>

            {/* Kartu Open House */}
            <article className="w-full shrink-0 rounded-[20px] bg-white p-3 shadow-xl sm:w-[320px]">
              <img
                src="/images/kampus.jpg"
                alt="Kampus Naraya School"
                className="h-[120px] w-full rounded-xl object-cover"
              />
              <div className="px-2 pb-2 pt-3">
                <h4 className="font-bold">Open House 2026</h4>
                <p className="p2 mt-1 text-muted">
                  Penerimaan Tahun Ajaran 2026/2027 sudah dibuka. Kenali
                  Naraya lebih dekat di Open House 2026.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ TENTANG ============ */}
      <section
        id="tentang"
        className="mx-auto max-w-[1448px] px-5 py-20 lg:px-9 lg:py-28"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="about-left">
            <h2 className="max-w-[576px] text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Sekolah yang Mengenal
              <br />
              Setiap Anak.
            </h2>
            {/* Statistik — langsung di bawah judul */}
            <Stats
              items={[
                { value: "18+", label: "Tahun pengalaman" },
                { value: "32+", label: "Prestasi nasional" },
                { value: "98%", label: "Lulusan diterima" },
              ]}
            />
          </div>
          <div>
            <p className="p1 max-w-[576px] text-muted2">
              Naraya School berdiri pada 2008. Selama 18+ tahun, kami percaya
              bahwa belajar yang baik dimulai dari mengenal setiap siswa: siapa
              dirinya, apa yang membuatnya penasaran, dan ke mana ia ingin
              melangkah.
            </p>
            <p className="p2 mt-4 max-w-[576px] text-muted2">
              Di sini, belajar tidak berhenti di ruang kelas. Anak belajar dari
              pengalaman nyata, dari kerja sama dengan teman dan guru, dan dari
              keberanian mencoba, lalu mencoba lagi.
            </p>
            <p className="p2 mt-4 max-w-[576px] text-muted2">
              Itulah yang kami jaga selama 18+ tahun: sebuah komunitas hangat
              tempat anak tumbuh percaya diri, berkarakter, dan siap melangkah
              ke jenjang berikutnya. Buktinya kami ukur dengan sederhana: 32+
              prestasi nasional, dan 98% lulusan diterima.
            </p>
            <PillLink
              href="/tentang/profil-sekolah"
              size="sm"
              className="mt-6"
            >
              Kenali Naraya Lebih Dekat
            </PillLink>
          </div>
        </div>

        {/* Empat nilai */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <article key={v.title} className={`rounded-[20px] ${v.tone} p-6`}>
              {v.icon}
              <h3 className="mt-5 text-base font-bold">{v.title}</h3>
              <p className={`p2 mt-2 ${v.muted}`}>{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ============ PROGRAM UNGGULAN ============ */}
      <section id="program" className="mx-auto max-w-[1448px] px-5 pb-20 lg:px-9">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[384px]">
            <p className="p1 text-muted2">
              Empat program unggulan kami mendampingi anak bertanya, berkarya,
              memimpin, dan berekspresi, dengan satu tujuan: anak yang percaya
              diri dan berkarakter.
            </p>
            <PillLink
              href="/program/ekstrakurikuler"
              size="sm"
              className="mt-6"
            >
              Lihat Program Unggulan Kami
            </PillLink>
          </div>
          <h2 className="max-w-[576px] text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-right">
            Empat Program Unggulan, Satu Tujuan: Anak yang Percaya Diri dan
            Berkarakter
          </h2>
        </div>

        <div className="mt-12 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p) => (
            <article
              key={p.title}
              className={`relative h-[400px] overflow-hidden rounded-[28px] ${p.offset}`}
            >
              <img
                src={p.image}
                alt={p.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="card-fade absolute inset-0"></div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="p2 mt-1 text-white/80">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ CAMPUS TOUR ============ */}
      <section id="fasilitas" className="mx-auto max-w-[1448px] px-5 pb-20 lg:px-9">
        <div className="relative h-[540px] overflow-hidden rounded-[28px]">
          <img
            src="/images/program-seni.jpg"
            alt="Ruang belajar Naraya School"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="tour-overlay absolute inset-0"></div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-7 sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-12">
            <div className="max-w-[640px]">
              <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl">
                Lihat Naraya dari Dekat,
                <br />
                dalam 01:42 Menit
              </h2>
              <p className="p2 mt-4 max-w-[448px] text-white/80">
                Penasaran seperti apa hari-hari di Naraya School? Tonton video
                tur kampus kami dan rasakan suasana belajarnya, sebelum Anda
                datang langsung.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-5 pr-2.5 text-sm font-bold text-ink"
              >
                Tonton Video Tur Kampus
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-panel">
                  <IconPlayerPlay size={14} className="text-white" aria-hidden="true" />
                </span>
              </a>
              <span className="rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                01:42
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONI ============ */}
      <section id="testimoni" className="mx-auto max-w-[1448px] px-5 pb-20 lg:px-9">
        <div className="testi-head">
          <div className="max-w-[576px]">
            <span className="inline-block rounded-full bg-lime px-4 py-1.5 text-xs font-bold text-ink">
              Testimoni
            </span>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Kata Mereka yang Pernah
              <br />
              Belajar di Sini
            </h2>
          </div>
          <p className="p1 max-w-[430px] text-muted2">
            Satu cerita dari alumni kami: tentang belajar mengenal diri,
            bekerja sama, dan berani mewujudkan ide selama belajar di Naraya.
          </p>
        </div>

        <div className="testi-layout mt-12">
          <TestimonialCard cta={{ href: "/#faq", label: "Jadwalkan Kunjungan" }} />
          <TestimonialSide />
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="mx-auto max-w-[1448px] px-5 pb-20 lg:px-9">
        <div className="grid gap-10 lg:grid-cols-[512px_1fr] lg:gap-16">
          <div>
            <h2 className="max-w-[366px] text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="p1 mt-5 max-w-[384px] text-muted2">
              Jawaban singkat seputar pendaftaran 2026/2027, Open House 2026,
              dan tur kampus.
            </p>
            <p className="p2 mt-4 max-w-[384px] text-muted2">
              Tidak menemukan jawaban? Hubungi tim penerimaan kami, kami siap
              membantu.
            </p>
            <PillLink href="/#faq" size="sm" className="mt-6">
              Hubungi Admisi
            </PillLink>
          </div>

          <FaqAccordion
            items={[
              {
                q: "Kapan pendaftaran siswa baru dibuka?",
                a: "Pendaftaran 2026/2027 sudah dibuka. Hubungi tim penerimaan untuk langkah berikutnya, atau datang ke Open House 2026.",
              },
              {
                q: "Apakah tersedia program beasiswa?",
                a: "Hubungi tim penerimaan untuk info beasiswa terbaru.",
              },
              {
                q: "Bagaimana metode pembelajarannya?",
                a: "Belajar terhubung dengan kehidupan nyata: anak memahami, mencoba, dan menerapkan, didampingi sesuai potensinya.",
              },
              {
                q: "Apa saja fasilitas yang tersedia?",
                a: (
                  <>
                    Ruang kelas, perpustakaan, area sains, ruang digital,
                    studio seni, dan area olahraga &amp; outdoor. Lihat
                    semuanya di halaman{" "}
                    <Link
                      href="/fasilitas"
                      style={{ fontWeight: 700, textDecoration: "underline" }}
                    >
                      Fasilitas
                    </Link>
                    , tonton video tur kampus (01:42), atau datang langsung di
                    Open House 2026.
                  </>
                ),
              },
              {
                q: "Apakah tersedia layanan antar-jemput?",
                a: "Hubungi tim penerimaan untuk info antar-jemput terbaru.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
