"use client";

import { useState } from "react";
import type { ReactNode } from "react";

/**
 * Akordeon FAQ gaya minimalis: daftar bersih dengan garis tipis,
 * nomor 01–05, dan ikon plus di lingkaran yang jadi minus lime saat terbuka.
 * Satu jawaban terbuka dalam satu waktu; yang pertama terbuka bawaan.
 */
export default function FaqAccordion({
  items,
}: {
  items: { q: string; a: ReactNode }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button
              className="faq-btn"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="faq-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="faq-q">{item.q}</span>
              <span className="faq-icon" aria-hidden="true"></span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p className="p2">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
