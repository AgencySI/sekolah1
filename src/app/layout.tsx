import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Naraya School — Belajar untuk Mengenal Diri, Berani Mewujudkan Ide",
  description:
    "Naraya School, berdiri sejak 2008. Komunitas hangat tempat anak tumbuh percaya diri, berkarakter, dan siap melangkah ke jenjang berikutnya.",
};

/** Atur tema awal sebelum halaman dicat, mengikuti pengaturan perangkat. */
const themeInitScript = `try{document.documentElement.setAttribute('data-theme',window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <div id="scrollProgress" aria-hidden="true"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
