import type { ReactNode } from "react";

type PageSectionProps = {
  id?: string;
  variant?: "default" | "muted" | "dark";
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** Taller sections that breathe on large screens */
  minHeight?: "none" | "tall" | "almost-screen";
};

export function PageSection({
  id,
  variant = "default",
  children,
  className = "",
  innerClassName = "",
  minHeight = "none",
}: PageSectionProps) {
  const surface =
    variant === "muted"
      ? "bg-[#eff0f2]"
      : variant === "dark"
        ? "bg-neutral-950 text-white"
        : "bg-white";

  const height =
    minHeight === "tall"
      ? "min-h-[65vh] md:min-h-[70vh] flex flex-col justify-center"
      : minHeight === "almost-screen"
        ? "min-h-[82vh] md:min-h-[85vh] flex flex-col justify-center"
        : "";

  return (
    <section id={id} className={`${surface} py-20 md:py-28 lg:py-32 ${height} ${className}`}>
      <div
        className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
