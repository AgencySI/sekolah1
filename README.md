# Naraya School — Next.js

Situs Naraya School (berdiri sejak 2008) dalam format Next.js 15.5.29
(App Router) + Tailwind CSS 3.4.19. Port dari preview artifact
`naraya-school` (export HTML), dengan struktur folder yang rapih.

## Menjalankan

```bash
npm install
npm run dev     # pengembangan di http://localhost:3000
npm run build   # build produksi
npm start       # jalankan hasil build
```

## Struktur

```
src/
  app/
    layout.tsx            # metadata, tema awal, Navbar + Footer + SiteEffects
    globals.css           # DM Sans lokal + seluruh CSS kustom dari preview
    page.tsx              # Beranda (hero, Tentang, Program, tur kampus, testimoni, FAQ)
    tentang/
      profil-sekolah/page.tsx
      visi-misi/page.tsx
    program/
      prestasi/page.tsx
      bimbingan-karir/page.tsx
      pendidikan-karakter/page.tsx
      ekstrakurikuler/page.tsx
    fasilitas/page.tsx
    cerita/
      testimoni/page.tsx
      blog/page.tsx
      acara/page.tsx
  components/
    Navbar.tsx            # header + dropdown Tentang/Program/Cerita + menu HP accordion
    ThemeToggle.tsx       # tombol lingkaran matahari/bulan
    Footer.tsx            # CTA + form email + 3 ikon sosial
    PageHero.tsx          # hero gelap halaman sub (breadcrumb, judul, lead)
    Stats.tsx             # statistik 18+ / 32+ / 98%
    FaqAccordion.tsx      # akordeon FAQ minimalis
    Testimonial.tsx       # kartu testimoni Alena + panel "Mengapa keluarga memilih Naraya"
    Sections.tsx          # InfoCard, PhotoCard, Timeline, CheckList, SubCta
    PillLink.tsx          # tombol pill lime/putih dengan panah
    SiteEffects.tsx       # animasi: reveal, count-up, split judul, parallax, tilt, progress bar
public/
  images/                 # foto dari desain Figma (hero, kampus, program, siswa, alumni)
  assets/icon-logo.svg    # logo buku Naraya
  fonts/                  # DM Sans variable (latin, wght 100–1000)
```

## Catatan

- **Font:** DM Sans (variable) disalin dari paket
  `@fontsource-variable/dm-sans` (devDependency) ke `public/fonts/`,
  dideklarasikan lewat `@font-face` di `globals.css`. Preview aslinya
  mendeklarasikan `"DM Sans", Manrope` tetapi hanya menyertakan file
  Manrope; di sini DM Sans benar-benar dipakai.
- **Ikon:** seluruh ikon UI memakai `@tabler/icons-react` (panah, chevron,
  bulan/matahari, menu, centang, kutip, play, nilai, dan ikon brand
  Instagram/TikTok/YouTube). Logo buku tetap file SVG asli Figma.
- **Tema terang/gelap:** skrip kecil di `layout.tsx` mengatur `data-theme`
  sebelum halaman dicat, mengikuti pengaturan perangkat. Toggle di navbar
  membalik temanya. Aturan kontras dark mode dari preview dipertahankan
  untuk semua halaman (teks redup terang, kartu putih jadi gelap).
- **Animasi:** reveal kata-per-kata judul, parallax, tilt kartu program,
  shine tombol, progress bar, dan count-up statistik — maks ~0,9 detik dan
  mati total bila `prefers-reduced-motion`.
- **Isi:** seluruh copywriting disalin dari preview; tidak ada fakta baru
  yang dikarang (tanpa nama pemenang, tanggal acara, atau testimoni
  tambahan). Bagian yang belum ada datanya di preview tetap mengarah ke tim
  penerimaan, sama seperti aslinya.
- **Form email footer** hanya front-end: setelah dikirim menampilkan pesan
  terima kasih, sama seperti preview.
