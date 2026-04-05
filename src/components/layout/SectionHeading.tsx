type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  className?: string;
  light?: boolean;
};

export function SectionHeading({ title, description, eyebrow, className = "", light = false }: SectionHeadingProps) {
  const sub = light ? "text-white/55" : "text-neutral-600";
  const titleColor = light ? "text-white" : "text-neutral-900";
  const eyebrowColor = light ? "text-brand/90" : "text-brand";

  return (
    <header className={`mb-14 md:mb-20 ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.28em] md:text-sm ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.035em] ${titleColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-lg leading-relaxed md:text-xl md:leading-relaxed ${sub}`}
        >
          {description}
        </p>
      ) : null}
      <div
        className={`mt-8 h-1 w-14 rounded-full md:mt-10 md:w-16 ${light ? "bg-brand" : "bg-gradient-to-r from-brand to-brand/40"}`}
        aria-hidden
      />
    </header>
  );
}
