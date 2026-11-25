import type { ReactNode } from "react";
import PillLink from "./PillLink";

/** Kartu info teks: ikon/glyph dalam lingkaran lime, judul, deskripsi. */
export function InfoCard({
  glyph,
  title,
  children,
  tone = "default",
}: {
  glyph: ReactNode;
  title: string;
  children: ReactNode;
  tone?: "default" | "lime" | "dark";
}) {
  return (
    <article className={`info-card ${tone === "default" ? "" : tone}`}>
      <span className="ic">{glyph}</span>
      <h3>{title}</h3>
      <p className="p2">{children}</p>
    </article>
  );
}

/** Kartu foto dengan gradasi gelap di bawah dan teks di atasnya. */
export function PhotoCard({
  image,
  alt,
  tag,
  title,
  children,
  style,
}: {
  image: string;
  alt: string;
  tag?: string;
  title: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <article className="photo-card" style={style}>
      <img src={image} alt={alt} />
      <div className="fade"></div>
      <div className="cap">
        {tag && <span className="tag">{tag}</span>}
        <h3 className={tag ? "mt-3" : ""}>{title}</h3>
        {children && <p className="p2">{children}</p>}
      </div>
    </article>
  );
}

/** Daftar bernomor/tahun dengan garis pemisah antar baris. */
export function Timeline({
  items,
}: {
  items: { mark: string; title: string; desc: string }[];
}) {
  return (
    <ul className="timeline">
      {items.map((t) => (
        <li key={t.title}>
          <span className="yr">{t.mark}</span>
          <div>
            <h3>{t.title}</h3>
            <p className="p2 mt-1 text-muted">{t.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Daftar centang lime. Item boleh teks biasa atau node (mis. <strong>). */
export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="check-list">
      {items.map((item, i) => (
        <li key={i}>
          <span className="check">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Panel CTA gelap di ujung halaman sub. */
export function SubCta({
  title,
  children,
  cta,
}: {
  title: string;
  children: ReactNode;
  cta: { href: string; label: string };
}) {
  return (
    <div className="sub-cta">
      <div>
        <h3>{title}</h3>
        <p className="p2">{children}</p>
      </div>
      <PillLink href={cta.href}>{cta.label}</PillLink>
    </div>
  );
}
