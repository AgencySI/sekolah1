"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Port efek gerak dari preview ke React (tanpa mengubah isi):
 * - header jadi kaca gelap saat scroll
 * - reveal halus saat scroll (stagger per grup, maks ~0,9 dtk)
 * - count-up statistik 18+ / 32+ / 98%
 * - judul muncul kata per kata (mask reveal)
 * - progress bar scroll, parallax foto hero & banner tur
 * - tilt 3D kartu program (pointer halus saja)
 * Semua mati total bila prefers-reduced-motion. Dijalankan ulang setiap
 * kali halaman berganti; elemen yang sudah diproses ditandai supaya
 * tidak diproses dua kali.
 */
export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* --- Header glass on scroll --- */
    const header = document.querySelector("header");
    function onHeaderScroll() {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
    }
    window.addEventListener("scroll", onHeaderScroll, { passive: true });
    onHeaderScroll();

    /* --- Scroll progress bar --- */
    const bar = document.getElementById("scrollProgress");
    function progress() {
      if (!bar) return;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform =
        "scaleX(" + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ")";
    }

    /* --- Reveal on scroll, staggered per group --- */
    const groups: Record<string, number> = {};
    const targets = Array.prototype.filter.call(
      document.querySelectorAll(
        "section h2, section article, section .faq-item, #tentang .grid > div, #fasilitas > div, footer h2, footer form",
      ),
      (el: Element) =>
        !el.querySelector("a,button,input,select,textarea") &&
        !el.hasAttribute("data-reveal-done"),
    ) as Element[];
    targets.forEach((el) => {
      const parent = el.parentElement;
      const key = parent ? parent.className : "x";
      groups[key] = (groups[key] || 0) + 1;
      el.classList.add("reveal");
      (el as HTMLElement).style.setProperty(
        "--d",
        Math.min((groups[key] - 1) * 90, 360) + "ms",
      );
      el.setAttribute("data-reveal-done", "");
    });
    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      targets.forEach((el) => io.observe(el));
    }

    /* --- Count-up stats --- */
    function countUp(el: Element) {
      const raw =
        el.getAttribute("data-count") || el.textContent || "";
      const m = raw.match(/(\d+)(.*)/);
      if (!m) return;
      const end = parseInt(m[1], 10);
      const suffix = m[2] || "";
      if (reduce) {
        el.textContent = raw;
        return;
      }
      let start: number | null = null;
      function step(ts: number) {
        if (!start) start = ts;
        const t = Math.min((ts - start) / 900, 1);
        const v = Math.round(end * (1 - Math.pow(1 - t, 3)));
        el.textContent = v + suffix;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    const stats = Array.prototype.filter.call(
      document.querySelectorAll(".stat-num"),
      (el: Element) => !el.hasAttribute("data-counted"),
    ) as Element[];
    stats.forEach((el) => el.setAttribute("data-counted", ""));
    if ("IntersectionObserver" in window && !reduce) {
      const io2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              countUp(e.target);
              io2.unobserve(e.target);
            }
          });
        },
        { threshold: 0.4 },
      );
      stats.forEach((el) => io2.observe(el));
    } else {
      stats.forEach((el) => countUp(el));
    }

    /* --- Split headings into words for mask reveal --- */
    function splitWords(el: Element) {
      let idx = 0;
      function walk(node: Node) {
        Array.prototype.slice.call(node.childNodes).forEach((child: Node) => {
          if (child.nodeType === 3) {
            const frag = document.createDocumentFragment();
            child.textContent!
              .split(/(\s+)/)
              .forEach((part: string) => {
                if (!part) return;
                if (/^\s+$/.test(part)) {
                  frag.appendChild(document.createTextNode(" "));
                  return;
                }
                const wrap = document.createElement("span");
                wrap.className = "w-wrap";
                const inner = document.createElement("span");
                inner.className = "w-inner";
                inner.style.setProperty("--i", String(idx++));
                inner.textContent = part;
                wrap.appendChild(inner);
                frag.appendChild(wrap);
              });
            node.replaceChild(frag, child);
          } else if (
            child.nodeType === 1 &&
            (child as Element).tagName !== "BR"
          ) {
            walk(child);
          }
        });
      }
      walk(el);
      el.classList.add("split");
    }
    const headings = document.querySelectorAll(
      "h1:not(.split), section h2:not(.split), footer h2:not(.split)",
    );
    if (!reduce && "IntersectionObserver" in window) {
      headings.forEach(splitWords);
      const ioH = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("inview");
              ioH.unobserve(e.target);
            }
          });
        },
        { threshold: 0.25 },
      );
      headings.forEach((h) => ioH.observe(h));
    }

    /* --- Parallax (rAF-throttled, transform only) --- */
    const px: { img: HTMLElement; amp: number; scale: number; host: Element }[] = [];
    function addPx(selector: string, amp: number, scale: number) {
      document.querySelectorAll(selector).forEach((img) => {
        if ((img as HTMLElement).hasAttribute("data-px")) return;
        (img as HTMLElement).setAttribute("data-px", "");
        img.classList.add("px-img");
        px.push({
          img: img as HTMLElement,
          amp,
          scale,
          host: img.closest("section") || img.parentElement!,
        });
      });
    }
    if (!reduce) {
      addPx("section:first-of-type > img", 55, 1.16);
      addPx("#fasilitas .relative > img", 42, 1.16);
    }
    let ticking = false;
    function parallax() {
      const vh = window.innerHeight;
      px.forEach((o) => {
        const r = o.host.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const prog = (r.top + r.height / 2 - vh / 2) / vh;
        const y = Math.max(-1, Math.min(1, prog * 2)) * o.amp;
        o.img.style.transform =
          "translate3d(0," + y.toFixed(1) + "px,0) scale(" + o.scale + ")";
      });
    }
    function onScroll() {
      progress();
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          parallax();
          ticking = false;
        });
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    /* --- Program card tilt (fine pointers only) --- */
    if (!reduce && window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll("#program article").forEach((card) => {
        if ((card as HTMLElement).hasAttribute("data-tilt")) return;
        (card as HTMLElement).setAttribute("data-tilt", "");
        card.addEventListener("mousemove", (e) => {
          const ev = e as MouseEvent;
          const r = (card as HTMLElement).getBoundingClientRect();
          const x = (ev.clientX - r.left) / r.width - 0.5;
          const y = (ev.clientY - r.top) / r.height - 0.5;
          (card as HTMLElement).style.setProperty("--ry", (x * 5).toFixed(2) + "deg");
          (card as HTMLElement).style.setProperty("--rx", (-y * 5).toFixed(2) + "deg");
        });
        card.addEventListener("mouseleave", () => {
          (card as HTMLElement).style.setProperty("--rx", "0deg");
          (card as HTMLElement).style.setProperty("--ry", "0deg");
        });
      });
    }

    /* --- Safety: headings must never stay hidden if an observer misses them --- */
    const safety = window.setTimeout(() => {
      document.querySelectorAll(".split:not(.inview)").forEach((h) => {
        const r = (h as HTMLElement).getBoundingClientRect();
        if (r.top < window.innerHeight * 1.5) h.classList.add("inview");
      });
    }, 1600);

    return () => {
      window.removeEventListener("scroll", onHeaderScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(safety);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
