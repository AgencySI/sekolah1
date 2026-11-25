"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";

/**
 * Tombol lingkaran ganti tema terang/gelap di navbar.
 * Tema awal diatur skrip kecil di layout (ikut pengaturan perangkat),
 * tombol ini hanya membalik atribut data-theme di <html>.
 */
export default function ThemeToggle() {
  function toggleTheme() {
    const html = document.documentElement;
    const dark = html.getAttribute("data-theme") !== "dark";
    html.setAttribute("data-theme", dark ? "dark" : "light");
    const btn = document.getElementById("themeBtn");
    if (btn) {
      btn.setAttribute(
        "aria-label",
        dark ? "Ganti ke mode terang" : "Ganti ke mode gelap",
      );
    }
  }

  return (
    <button
      id="themeBtn"
      type="button"
      aria-label="Ganti ke mode gelap"
      title="Mode gelap / terang"
      onClick={toggleTheme}
    >
      <IconMoon className="icon-moon" size={18} aria-hidden="true" />
      <IconSun className="icon-sun" size={18} aria-hidden="true" />
    </button>
  );
}
