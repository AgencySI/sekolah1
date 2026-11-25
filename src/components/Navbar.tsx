"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconArrowRight,
  IconChevronDown,
  IconMenu2,
} from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";

type DropdownGroup = {
  label: string;
  group: string;
  base: string;
  items: { href: string; label: string; desc: string }[];
};

const GROUPS: DropdownGroup[] = [
  {
    label: "Tentang",
    group: "tentang",
    base: "/tentang",
    items: [
      {
        href: "/tentang/profil-sekolah",
        label: "Profil Sekolah",
        desc: "Sejarah, identitas, dan cara kami belajar sejak 2008.",
      },
      {
        href: "/tentang/visi-misi",
        label: "Visi & Misi",
        desc: "Arah yang kami jaga untuk setiap anak.",
      },
    ],
  },
  {
    label: "Program",
    group: "program",
    base: "/program",
    items: [
      {
        href: "/program/prestasi",
        label: "Prestasi",
        desc: "Capaian siswa di tingkat nasional.",
      },
      {
        href: "/program/bimbingan-karir",
        label: "Bimbingan Karier",
        desc: "Pendampingan minat dan langkah setelah lulus.",
      },
      {
        href: "/program/pendidikan-karakter",
        label: "Pendidikan Karakter",
        desc: "Jujur, bertanggung jawab, dan berani.",
      },
      {
        href: "/program/ekstrakurikuler",
        label: "Ekstrakurikuler",
        desc: "Ruang minat, bakat, dan ekspresi siswa.",
      },
    ],
  },
  {
    label: "Cerita",
    group: "cerita",
    base: "/cerita",
    items: [
      {
        href: "/cerita/testimoni",
        label: "Testimoni",
        desc: "Kata alumni dan keluarga tentang Naraya.",
      },
      {
        href: "/cerita/blog",
        label: "Blog",
        desc: "Tulisan seputar belajar dan komunitas sekolah.",
      },
      {
        href: "/cerita/acara",
        label: "Acara",
        desc: "Open House, tur kampus, dan kegiatan sekolah.",
      },
    ],
  },
];

const MOBILE_GROUPS = GROUPS;

/**
 * Header situs: logo, nav desktop dengan dropdown (hover/focus/click),
 * tombol Hubungi Kami, toggle tema, dan menu HP berupa accordion.
 * Menu HP tertutup otomatis setelah sebuah tautan diketuk.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  // Tutup semua dropdown saat klik di luar nav, dan saat tekan Escape.
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const t = e.target as HTMLElement | null;
      if (t && !t.closest(".nav-item")) setOpenGroup(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenGroup(null);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Menu HP selalu tertutup setiap kali halaman berganti.
  useEffect(() => {
    setMobileOpen(false);
    setMobileGroup(null);
  }, [pathname]);

  const isHome = pathname === "/";
  const groupActive = (base: string) => pathname.startsWith(base);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1448px] items-center justify-between px-5 py-5 lg:px-9">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime">
            <img src="/assets/icon-logo.svg" alt="" className="h-[17px] w-[17px]" />
          </span>
          <span className="text-[15px] font-extrabold tracking-wide text-white">
            NARAYA
          </span>
          <span className="text-[15px] font-medium text-white">School</span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full bg-white/10 p-1.5 backdrop-blur-md lg:flex"
          aria-label="Navigasi utama"
        >
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm font-semibold text-white/80 transition hover:text-white ${isHome ? "is-active bg-white !text-black" : ""}`}
          >
            Beranda
          </Link>

          {GROUPS.map((g) => (
            <div
              key={g.group}
              className={`nav-item ${openGroup === g.group ? "open" : ""}`}
            >
              <button
                type="button"
                className={`nav-trigger rounded-full px-5 py-2 text-sm text-white/80 transition hover:text-white ${groupActive(g.base) ? "is-active" : ""}`}
                aria-haspopup="true"
                aria-expanded={openGroup === g.group}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenGroup(openGroup === g.group ? null : g.group);
                }}
              >
                {g.label}
                <IconChevronDown
                  className="chev"
                  size={14}
                  stroke={2.5}
                  aria-hidden="true"
                />
              </button>
              <div className="dropdown" role="menu">
                {g.items.map((item) => (
                  <Link key={item.href} href={item.href} role="menuitem">
                    <span>
                      {item.label}
                      <small>{item.desc}</small>
                    </span>
                    <span className="arr" aria-hidden="true">
                      <IconArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            href="/fasilitas"
            className={`rounded-full px-5 py-2 text-sm text-white/80 transition hover:text-white ${pathname === "/fasilitas" ? "is-active bg-white !text-black" : ""}`}
          >
            Fasilitas
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#faq"
            className="hidden items-center gap-2 rounded-full bg-lime py-2 pl-5 pr-2 text-sm font-bold text-ink sm:flex"
          >
            Hubungi Kami
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-panel">
              <IconArrowRight size={14} className="text-white" aria-hidden="true" />
            </span>
          </Link>
          <ThemeToggle />
          <button
            id="menuBtn"
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md lg:hidden"
            aria-label="Buka menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <IconMenu2 size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="mobileMenu"
        className={`mx-5 rounded-2xl bg-panel p-3 shadow-2xl lg:hidden ${mobileOpen ? "" : "hidden"}`}
        aria-label="Menu seluler"
      >
        <Link
          href="/"
          className={`block rounded-xl px-4 py-3 text-sm font-semibold ${isHome ? "bg-white text-black" : "text-white/80"}`}
        >
          Beranda
        </Link>

        {MOBILE_GROUPS.map((g) => (
          <div
            key={g.group}
            className={`m-group ${mobileGroup === g.group ? "open" : ""}`}
          >
            <button
              type="button"
              className="m-group-btn"
              aria-expanded={mobileGroup === g.group}
              onClick={() =>
                setMobileGroup(mobileGroup === g.group ? null : g.group)
              }
            >
              {g.label}
              <IconChevronDown
                className="chev"
                size={16}
                stroke={2.5}
                aria-hidden="true"
              />
            </button>
            <div className="m-sub">
              {g.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-white/85"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <Link
          href="/fasilitas"
          className="block rounded-xl px-4 py-3 text-sm text-white/80"
        >
          Fasilitas
        </Link>
        <Link
          href="/#faq"
          className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-lime px-4 py-3 text-sm font-bold text-ink"
        >
          Hubungi Kami
          <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </header>
  );
}
