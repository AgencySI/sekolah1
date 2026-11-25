import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Hero gelap untuk semua halaman sub: foto latar, breadcrumb,
 * judul besar, dan paragraf pembuka. CTA opsional lewat children.
 */
export default function PageHero({
  image,
  crumbs,
  title,
  lead,
  children,
}: {
  image: string;
  /** urutan breadcrumb; item terakhir tanpa href = halaman aktif */
  crumbs: { label: string; href?: string }[];
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <img className="bg" src={image} alt="" />
      <div className="shade"></div>
      <div className="page-hero-inner">
        <span className="crumb">
          {crumbs.map((c, i) => (
            <span key={c.label} className="contents">
              {i > 0 && (
                <span aria-hidden="true" className="contents">
                  /
                </span>
              )}
              {c.href ? (
                <Link href={c.href}>{c.label}</Link>
              ) : (
                <b>{c.label}</b>
              )}
            </span>
          ))}
        </span>
        <h1>{title}</h1>
        <p className="lead p1">{lead}</p>
        {children}
      </div>
    </section>
  );
}
