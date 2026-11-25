import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CheckList, PhotoCard } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Blog — Naraya School",
  description:
    "Tulisan seputar cara kami belajar: mengenal anak, menghubungkan pelajaran dengan kehidupan nyata, dan membangun komunitas yang hangat.",
};

const POSTS = [
  {
    image: "/images/siswa-1.jpg",
    alt: "Anak belajar mengenal dirinya",
    tag: "Belajar",
    title: "Belajar Dimulai dari Mengenal Diri",
    text: "Mengapa mengenal setiap siswa adalah langkah pertama sebelum mengejar nilai.",
  },
  {
    image: "/images/program-sains.jpg",
    alt: "Belajar dari pengalaman nyata",
    tag: "Kontekstual",
    title: "Belajar dari Pengalaman Nyata",
    text: "Anak memahami lebih dalam ketika pelajaran terhubung dengan kehidupan sehari-hari.",
  },
  {
    image: "/images/siswa-2.jpg",
    alt: "Komunitas sekolah yang hangat",
    tag: "Komunitas",
    title: "Sekolah sebagai Rumah Kedua",
    text: "Komunitas hangat antara guru, teman, dan keluarga membuat anak berani mencoba.",
  },
  {
    image: "/images/program-seni.jpg",
    alt: "Keberanian mewujudkan ide",
    tag: "Kreativitas",
    title: "Berani Mewujudkan Ide",
    text: "Ide yang baik lahir dari keberanian mencoba hal baru — dan mencoba lagi.",
  },
  {
    image: "/images/kampus.jpg",
    alt: "Karakter dalam keseharian",
    tag: "Karakter",
    title: "Karakter Tumbuh dari Keseharian",
    text: "Jujur, bertanggung jawab, dan berani dibentuk lewat pengalaman, bukan hafalan.",
  },
  {
    image: "/images/alumni-2.jpg",
    alt: "Menyiapkan langkah setelah lulus",
    tag: "Karier",
    title: "Menyiapkan Langkah Berikutnya",
    text: "Pendampingan minat dan studi lanjut agar siswa melangkah dengan percaya diri.",
  },
];

export default function Blog() {
  return (
    <>
      <PageHero
        image="/images/siswa-1.jpg"
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Cerita" },
          { label: "Blog" },
        ]}
        title="Blog"
        lead="Tulisan seputar cara kami belajar: mengenal anak, menghubungkan pelajaran dengan kehidupan nyata, dan membangun komunitas yang hangat."
      />

      <div className="page-wrap">
        <div className="split-2">
          <PhotoCard
            image="/images/hero-bg.png"
            alt="Kampus Naraya School"
            tag="Tulisan Pilihan"
            title="Belajar untuk Mengenal Diri, Berani Mewujudkan Ide"
            style={{ minHeight: 380 }}
          >
            Filosofi yang menjadi judul besar Naraya sejak 2008 — dan cara kami
            menjalankannya setiap hari.
          </PhotoCard>
          <div>
            <h2>Mengapa Kami Menulis</h2>
            <p className="p1 mt-5 text-muted2">
              Blog ini adalah cara kami membuka pintu kelas: membagikan cara
              kami memandang anak, belajar, dan komunitas, agar keluarga bisa
              mengenal Naraya bahkan sebelum berkunjung.
            </p>
            <p className="p2 mt-4 text-muted2">
              Tulisannya seputar hal-hal yang kami praktikkan sendiri —
              mengenal siswa sebelum mengejar nilai, menghubungkan pelajaran
              dengan kehidupan nyata, menumbuhkan karakter lewat keseharian,
              dan mendampingi anak menyiapkan langkah setelah lulus. Tidak ada
              teori yang tidak kami jalani.
            </p>
            <CheckList
              items={[
                <>
                  <strong>Belajar:</strong>&nbsp;cara anak memahami, bukan
                  sekadar menghafal.
                </>,
                <>
                  <strong>Karakter &amp; Komunitas:</strong>&nbsp;keseharian
                  yang membentuk anak dari dalam.
                </>,
                <>
                  <strong>Karier:</strong>&nbsp;menyiapkan langkah berikutnya
                  dengan arah yang jelas.
                </>,
              ]}
            />
          </div>
        </div>

        <h2 className="mt-14">Tulisan Terbaru</h2>
        <div className="page-grid c3 mt-8">
          {POSTS.map((p) => (
            <PhotoCard
              key={p.title}
              image={p.image}
              alt={p.alt}
              tag={p.tag}
              title={p.title}
            >
              {p.text}
            </PhotoCard>
          ))}
        </div>
      </div>
    </>
  );
}
