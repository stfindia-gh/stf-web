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
    <header className={`mb-10 md:mb-14 ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] md:text-xs ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-[clamp(1.625rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] ${titleColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed md:mt-5 md:text-[1.0625rem] md:leading-relaxed ${sub}`}
        >
          {description}
        </p>
      ) : null}
      <div
        className={`mt-6 h-0.5 w-12 rounded-full md:mt-8 md:w-14 ${light ? "bg-brand" : "bg-gradient-to-r from-brand to-brand/40"}`}
        aria-hidden
      />
    </header>
  );
}
