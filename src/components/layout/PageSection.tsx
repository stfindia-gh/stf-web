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
      ? "min-h-[72vh] md:min-h-[75vh] flex flex-col justify-center"
      : minHeight === "almost-screen"
        ? "min-h-[88vh] md:min-h-[90vh] flex flex-col justify-center"
        : "";

  return (
    <section id={id} className={`${surface} py-28 md:py-40 lg:py-44 ${height} ${className}`}>
      <div
        className={`mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-14 xl:px-16 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
