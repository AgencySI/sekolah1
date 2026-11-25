"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconArrowRight,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";

/**
 * Footer situs: CTA + form email, kolom tautan, dan 3 ikon sosial
 * (Instagram, TikTok, YouTube) berbentuk lingkaran putih 40×40.
 * Form hanya front-end: setelah dikirim menampilkan pesan terima kasih.
 */
export default function Footer() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-[1448px] px-5 pb-10 pt-16 sm:pt-20 lg:px-9">
        <h2 className="mx-auto max-w-[500px] text-center text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
          Perjalanan Anak Anda Dimulai di Sini
        </h2>
        <p className="p1 mx-auto mt-5 max-w-[576px] text-center text-white/70">
          Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027 sudah dibuka.
          Mari kenali Naraya School lebih dekat di Open House 2026, atau lewat
          video tur kampus 01:42 kami.
        </p>

        <form
          id="signupForm"
          className="mx-auto mt-8 flex max-w-[448px] flex-col items-stretch gap-2 rounded-[28px] border border-white/15 bg-white/[0.07] p-1.5 sm:flex-row sm:items-center sm:rounded-full"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setEmail("");
          }}
        >
          <input
            type="email"
            required
            placeholder="Masukkan alamat email"
            aria-label="Alamat email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
          />
          <button
            type="submit"
            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-lime py-2.5 pl-4 pr-2 text-xs font-bold text-ink"
          >
            Daftar Sekarang
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-panel">
              <IconArrowRight size={14} className="text-white" aria-hidden="true" />
            </span>
          </button>
        </form>
        <p
          id="signupMsg"
          className={`mt-4 text-center text-sm text-lime ${sent ? "" : "hidden"}`}
        >
          Terima kasih! Kami akan menghubungi Anda.
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime">
                <img
                  src="/assets/icon-logo.svg"
                  alt=""
                  className="h-[17px] w-[17px]"
                />
              </span>
              <span className="text-[15px] font-extrabold tracking-wide">
                NARAYA
              </span>
              <span className="text-[15px] font-medium">School</span>
            </Link>
            <p className="p2 mt-5 max-w-[320px] text-white/60">
              Naraya School, berdiri sejak 2008. Komunitas hangat tempat anak
              tumbuh percaya diri, berkarakter, dan siap melangkah ke jenjang
              berikutnya.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href="#"
                aria-label="Instagram Naraya School"
                className="social-btn flex h-8 w-8 items-center justify-center rounded-full bg-white"
              >
                <IconBrandInstagram size={17} className="text-ink" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="TikTok Naraya School"
                className="social-btn flex h-8 w-8 items-center justify-center rounded-full bg-white"
              >
                <IconBrandTiktok size={17} className="text-ink" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="YouTube Naraya School"
                className="social-btn flex h-8 w-8 items-center justify-center rounded-full bg-white"
              >
                <IconBrandYoutube size={17} className="text-ink" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Tautan Cepat</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang/profil-sekolah"
                  className="transition hover:text-white"
                >
                  Profil Sekolah
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang/visi-misi"
                  className="transition hover:text-white"
                >
                  Visi &amp; Misi
                </Link>
              </li>
              <li>
                <Link
                  href="/program/prestasi"
                  className="transition hover:text-white"
                >
                  Prestasi
                </Link>
              </li>
              <li>
                <Link href="/fasilitas" className="transition hover:text-white">
                  Fasilitas
                </Link>
              </li>
              <li>
                <Link href="/cerita/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/cerita/acara" className="transition hover:text-white">
                  Acara
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Informasi</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <Link href="/#faq" className="transition hover:text-white">
                  Pendaftaran
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="transition hover:text-white">
                  Beasiswa
                </Link>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Kalender Akademik
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Berita
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Dukungan</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="transition hover:text-white">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <Link href="/#faq" className="transition hover:text-white">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Karier
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 Naraya School. Seluruh hak dilindungi.</span>
          <span className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Kebijakan privasi
            </a>
            <a href="#" className="transition hover:text-white">
              Syarat penggunaan
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
