import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroMarquee } from "../components/HeroMarquee";
import { springSoft } from "../components/motion/presets";

const stats = [
  { label: "Warp knitting", value: "Advanced" },
  { label: "Supply", value: "Pan-India" },
  { label: "Approach", value: "Custom specs" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const yMesh = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#eff0f2] pt-14 sm:pt-16"
    >
      {/* Same language as inner pages: light surface + mesh + soft brand blobs */}
      <motion.div style={{ y: yBg }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-mesh-pattern bg-[length:28px_28px] opacity-[0.55]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_0%_0%,rgba(0,123,154,0.09),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(0,123,154,0.07),transparent_50%)]" />
        <div className="absolute -right-24 top-1/4 h-[min(480px,75vw)] w-[min(480px,75vw)] rounded-full bg-brand/10 blur-[90px]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col px-5 sm:px-8 lg:px-10">
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 py-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-10 xl:gap-12">
          {/* Left: stat cards — matches Manufacturing / Product cards */}
          <motion.div
            style={{ y: yMesh }}
            className="flex flex-col justify-center lg:col-span-5"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.08 }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-brand md:text-sm"
            >
              Shubhankr Texfab India
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springSoft, delay: 0.12 }}
              className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[0.95] tracking-[-0.04em] text-neutral-900/10"
            >
              3D mesh
            </motion.p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springSoft, delay: 0.22 + i * 0.08 }}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                  className="rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-[0_10px_32px_-24px_rgba(0,0,0,0.1)] md:p-5"
                >
                  <p className="font-display text-base font-bold text-neutral-900 md:text-lg">{s.value}</p>
                  <p className="mt-1 text-xs text-neutral-600 md:text-sm">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: headline + CTAs — white panel like contact / forms */}
          <div className="relative flex flex-col justify-center lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-white/90 p-6 shadow-[0_20px_50px_-36px_rgba(0,123,154,0.16)] backdrop-blur-sm md:rounded-[1.75rem] md:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/[0.07] blur-3xl" />
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <h1 className="relative font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-neutral-900">
                  High-quality air mesh fabrics for{" "}
                  <span className="relative inline-block text-brand-dark">
                    performance
                    <motion.span
                      aria-hidden
                      className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-brand/45"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.85, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>{" "}
                  &amp; comfort
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="relative mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:mt-8 md:text-[1.0625rem]"
              >
                Durable, breathable textiles engineered for brands that need repeatable quality at scale — not
                one-off samples.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
                className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-10"
              >
                <motion.a
                  href="#products"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_32px_-10px_rgba(0,123,154,0.45)] transition-colors hover:bg-brand-dark md:px-9 md:py-3.5 md:text-[0.9375rem]"
                >
                  Explore products
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full border-2 border-neutral-200 bg-white px-7 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:border-brand hover:text-brand md:px-9 md:py-3.5 md:text-[0.9375rem]"
                >
                  Contact us
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="relative mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-200 pt-7 md:mt-10 md:gap-x-10"
              >
                {["Breathable", "Consistent lots", "Scalable output"].map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.85 + i * 0.07 }}
                    className="flex items-center gap-2 text-xs font-medium text-neutral-500 md:text-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_rgba(0,123,154,0.45)]" />
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <HeroMarquee />
    </section>
  );
}
