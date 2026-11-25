import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import PillLink from "@/components/PillLink";
import {
  CheckList,
  InfoCard,
  PhotoCard,
  SubCta,
  Timeline,
} from "@/components/Sections";

export const metadata: Metadata = {
  title: "Profil Sekolah — Naraya School",
  description:
    "Naraya School berdiri pada 2008. Selama 18+ tahun, kami menjaga satu hal sederhana: sekolah yang mengenal setiap anak.",
};

export default function ProfilSekolah() {
  return (
    <>
      <PageHero
        image="/images/kampus.jpg"
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Tentang" },
          { label: "Profil Sekolah" },
        ]}
        title="Profil Sekolah"
        lead="Naraya School berdiri pada 2008. Selama 18+ tahun, kami menjaga satu hal sederhana: sekolah yang mengenal setiap anak — siapa dirinya, apa yang membuatnya penasaran, dan ke mana ia ingin melangkah."
      >
        <div className="hero-ctas mt-7 flex flex-wrap gap-3">
          <PillLink href="/tentang/visi-misi">Lihat Visi &amp; Misi</PillLink>
          <PillLink href="/fasilitas" variant="white">
            Lihat Fasilitas
          </PillLink>
        </div>
      </PageHero>

      <div className="page-wrap">
        <Stats
          style={{ marginTop: 0 }}
          items={[
            { value: "18+", label: "Tahun pengalaman" },
            { value: "32+", label: "Prestasi nasional" },
            { value: "98%", label: "Lulusan diterima" },
          ]}
        />

        <div className="split-2 mt-14">
          <div>
            <h2>Cerita Kami Sejak 2008</h2>
            <p className="p1 mt-5 text-muted2">
              Belajar yang baik dimulai dari mengenal setiap siswa. Di Naraya,
              anak tidak disamakan — ia didampingi sesuai potensinya, dengan
              komunitas hangat antara sekolah, siswa, dan keluarga.
            </p>
            <p className="p2 mt-4 text-muted2">
              Di sini, belajar tidak berhenti di ruang kelas. Anak belajar dari
              pengalaman nyata, dari kerja sama dengan teman dan guru, dan dari
              keberanian mencoba, lalu mencoba lagi.
            </p>
          </div>
          <Timeline
            items={[
              {
                mark: "2008",
                title: "Naraya Berdiri",
                desc: "Awal perjalanan kami sebagai komunitas belajar yang menempatkan siswa di pusatnya.",
              },
              {
                mark: "18+",
                title: "Tahun Mendampingi",
                desc: "Pengalaman mendampingi anak tumbuh percaya diri, berkarakter, dan siap melangkah ke jenjang berikutnya.",
              },
              {
                mark: "Kini",
                title: "Komunitas yang Terus Tumbuh",
                desc: "32+ prestasi nasional dan 98% lulusan diterima menjadi bukti sederhana yang kami ukur setiap tahun.",
              },
            ]}
          />
        </div>

        <div className="page-grid c4 mt-14">
          <InfoCard glyph="◎" title="Fokus pada Siswa">
            Setiap anak berbeda. Belajar dimulai dari mengenal setiap siswa,
            bukan menyamakan mereka.
          </InfoCard>
          <InfoCard glyph="◍" title="Komunitas Hangat" tone="lime">
            Sekolah adalah rumah kedua. Anak belajar paling baik ketika merasa
            aman, dikenal, dan didukung.
          </InfoCard>
          <InfoCard glyph="⬡" title="Belajar Kontekstual">
            Belajar terhubung dengan kehidupan nyata: memahami, mencoba, dan
            menerapkan.
          </InfoCard>
          <InfoCard glyph="♛" title="Karakter Unggul">
            Nilai penting, karakter lebih penting: jujur, bertanggung jawab,
            dan berani.
          </InfoCard>
        </div>

        <div className="split-2 mt-14">
          <div>
            <h2>Cara Belajar di Naraya</h2>
            <p className="p1 mt-5 text-muted2">
              Belajar di Naraya bergerak dalam satu alur yang sama di semua
              kelas: anak diajak penasaran dulu, baru memahami; mencoba dulu,
              baru dinilai. Guru berperan sebagai pendamping yang mengenal
              setiap anak, bukan sekadar penyampai materi.
            </p>
            <p className="p2 mt-4 text-muted2">
              Setiap proyek dan tugas dirancang terhubung dengan kehidupan
              nyata, dikerjakan sendiri maupun bersama tim, dan ditutup dengan
              refleksi: apa yang berhasil, apa yang belum, dan apa yang akan
              dicoba berikutnya. Dari kebiasaan refleksi inilah anak belajar
              mengenal dirinya.
            </p>
          </div>
          <Timeline
            items={[
              {
                mark: "01",
                title: "Bertanya",
                desc: "Pelajaran dimulai dari rasa penasaran: pertanyaan siswa menjadi pintu masuk materi.",
              },
              {
                mark: "02",
                title: "Mencoba",
                desc: "Anak menguji idenya lewat praktik, eksperimen, dan proyek nyata — gagal adalah bagian dari proses.",
              },
              {
                mark: "03",
                title: "Bekerja Sama",
                desc: "Diskusi dan kerja tim melatih anak mendengarkan, berbagi peran, dan menyelesaikan masalah bersama.",
              },
              {
                mark: "04",
                title: "Merefleksi",
                desc: "Setiap proses ditutup dengan melihat kembali perjalanan belajar, agar anak tahu langkah berikutnya.",
              },
            ]}
          />
        </div>

        <div className="page-grid c3 mt-14">
          <PhotoCard
            image="/images/siswa-1.jpg"
            alt="Siswa Naraya sedang belajar di kelas"
            title="Di Ruang Kelas"
          >
            Diskusi, presentasi, dan proyek kelompok menjadi keseharian
            belajar.
          </PhotoCard>
          <PhotoCard
            image="/images/siswa-2.jpg"
            alt="Siswa Naraya di lingkungan kampus"
            title="Di Lingkungan Kampus"
          >
            Belajar juga terjadi di luar kelas — dari pengalaman dan interaksi
            sehari-hari.
          </PhotoCard>
          <PhotoCard
            image="/images/alumni-2.jpg"
            alt="Alumni Naraya School"
            title="Sampai Lulus"
          >
            Pendampingan berlanjut hingga siswa siap melangkah ke jenjang
            berikutnya.
          </PhotoCard>
        </div>

        <div className="split-2 mt-14">
          <div>
            <h2>Sekolah dan Keluarga, Satu Tim</h2>
            <p className="p1 mt-5 text-muted2">
              Kami percaya anak tumbuh paling baik ketika sekolah dan keluarga
              berjalan searah. Karena itu komunikasi dengan orang tua bukan
              formalitas, melainkan bagian dari cara kami mendampingi setiap
              anak.
            </p>
          </div>
          <CheckList
            items={[
              "Perkembangan anak dibicarakan bersama keluarga, bukan hanya lewat angka di rapor.",
              "Keluarga dilibatkan dalam momen komunitas dan kegiatan siswa sepanjang tahun ajaran.",
              "Setiap anak dikenal namanya, minatnya, dan cara belajarnya oleh guru pendampingnya.",
            ]}
          />
        </div>

        <SubCta
          title="Ingin Mengenal Naraya Lebih Dekat?"
          cta={{ href: "/cerita/acara", label: "Lihat Acara" }}
        >
          Datang ke Open House 2026 atau tonton video tur kampus kami selama
          01:42 menit.
        </SubCta>
      </div>
    </>
  );
}
