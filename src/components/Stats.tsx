/**
 * Deretan statistik 18+ / 32+ / 98% dengan garis lime di atas angka.
 * Angka dihitung naik (count-up) oleh SiteEffects saat masuk layar.
 */
export default function Stats({
  items,
  className = "about-stats",
  style,
}: {
  items: { value: string; label: string }[];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={style}>
      {items.map((s) => (
        <div key={s.label}>
          <p className="stat-num" data-count={s.value}>
            {s.value}
          </p>
          <p className="p2 mt-1 text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
