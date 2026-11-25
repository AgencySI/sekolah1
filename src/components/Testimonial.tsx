import { IconCheck, IconQuote } from "@tabler/icons-react";
import PillLink from "./PillLink";

/**
 * Kartu testimoni utama Alena Pradipta (Alumni 2024, Mahasiswi Teknik
 * Arsitektur) — kutipan persis dari desain. Dipakai di Beranda, halaman
 * Bimbingan Karier, dan halaman Testimoni.
 */
export function TestimonialCard({
  cta,
  quote = true,
}: {
  cta?: { href: string; label: string };
  quote?: boolean;
}) {
  return (
    <article className="testi-main rounded-[28px] bg-white shadow-sm">
      <div className="testi-photo">
        <img src="/images/alumni.jpg" alt="Alena Pradipta, alumni Naraya School" />
        <span className="testi-chip">Alumni 2024</span>
      </div>
      <div className="testi-body">
        {quote && (
          <span className="testi-quote" aria-hidden="true">
            <IconQuote size={20} fill="currentColor" />
          </span>
        )}
        <blockquote className="testi-text">
          &ldquo;Di Naraya saya bukan hanya belajar mengejar nilai, tetapi
          belajar mengenal diri, bekerja sama, dan berani mewujudkan
          ide.&rdquo;
        </blockquote>
        <div className="testi-author">
          <div>
            <p className="testi-name">Alena Pradipta</p>
            <p className="p2 mt-1 text-muted">Mahasiswi Teknik Arsitektur</p>
          </div>
          {cta && (
            <PillLink href={cta.href} size="sm">
              {cta.label}
            </PillLink>
          )}
        </div>
      </div>
    </article>
  );
}

/** Galeri 3 foto + panel gelap "Mengapa keluarga memilih Naraya". */
export function TestimonialSide({
  items = [
    "Setiap anak dikenal dan didampingi sesuai potensinya. Belajar dimulai dari mengenal siswa.",
    "Komunitas hangat antara sekolah, siswa, dan keluarga. Anak merasa aman, dikenal, dan didukung.",
    "Belajar dari pengalaman nyata, dengan keberanian untuk mencoba, lalu mencoba lagi.",
  ],
}: {
  items?: string[];
}) {
  return (
    <aside className="testi-side">
      <div className="testi-photos">
        <img
          src="/images/siswa-1.jpg"
          alt="Siswa Naraya School sedang belajar"
        />
        <img
          src="/images/siswa-2.jpg"
          alt="Siswa Naraya School di lingkungan kampus"
        />
        <img
          src="/images/alumni-2.jpg"
          alt="Alumni Naraya School"
          className="wide"
        />
      </div>
      <div className="testi-why bg-panel">
        <h3 className="font-bold text-white">Mengapa keluarga memilih Naraya</h3>
        <ul>
          {items.map((text) => (
            <li key={text}>
              <span className="check" aria-hidden="true">
                <IconCheck size={12} stroke={3.5} />
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
