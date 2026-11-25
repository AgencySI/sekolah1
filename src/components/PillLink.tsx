import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrowRight, IconPlayerPlay } from "@tabler/icons-react";

/**
 * Tombol pill khas Naraya (lime atau putih) dengan lingkaran panah di ujung.
 * Dipakai untuk semua CTA di hero, section, dan kartu.
 */
export default function PillLink({
  href,
  children,
  variant = "lime",
  size = "md",
  icon = "arrow",
  className = "",
  style,
}: {
  href: string;
  children: ReactNode;
  variant?: "lime" | "white";
  size?: "md" | "sm";
  icon?: "arrow" | "play";
  className?: string;
  style?: React.CSSProperties;
}) {
  const bg = variant === "lime" ? "bg-lime" : "bg-white";
  const sizing =
    size === "md"
      ? "py-2.5 pl-5 pr-2.5 text-sm"
      : "py-2 pl-4 pr-2 text-xs";
  return (
    <Link
      href={href}
      style={style}
      className={`inline-flex items-center gap-3 rounded-full ${bg} ${sizing} font-bold text-ink ${className}`}
    >
      {children}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-panel">
        {icon === "play" ? (
          <IconPlayerPlay size={14} className="text-white" aria-hidden="true" />
        ) : (
          <IconArrowRight size={14} className="text-white" aria-hidden="true" />
        )}
      </span>
    </Link>
  );
}
