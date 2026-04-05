const items = [
  "Air mesh",
  "Warp knitting",
  "Breathable",
  "Pan-India supply",
  "Custom GSM",
  "Footwear",
  "Automotive",
  "Quality assured",
  "3D spacer",
  "Performance textiles",
];

export function HeroMarquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-t border-white/[0.08] bg-neutral-950/90 py-3.5 backdrop-blur-md md:py-4">
      <div className="hero-marquee-track items-center gap-10 md:gap-12">
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-10 font-display text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-white/40 md:gap-12 md:text-xs"
          >
            <span className="whitespace-nowrap">{label}</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand shadow-[0_0_12px_rgba(0,123,154,0.7)]" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
