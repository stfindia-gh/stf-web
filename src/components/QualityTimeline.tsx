import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

type Step = { title: string; desc: string };

type QualityTimelineProps = {
  steps: Step[];
};

const LINE_Y = 28;

/** Column center X in viewBox 0–1000 for equal-width tracks. */
function nodeCentersX(count: number) {
  return Array.from({ length: count }, (_, i) => ((i + 0.5) / count) * 1000);
}

/**
 * Desktop: baseline + scroll-driven line between node centers; grid aligned to same centers.
 * Mobile: centered column with spine in the middle.
 */
export function QualityTimeline({ steps }: QualityTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 78%", "end 38%"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 32, mass: 0.55 });

  const n = steps.length;
  const cx = nodeCentersX(n);
  const pathD = n > 1 ? `M ${cx[0]} ${LINE_Y} L ${cx[n - 1]} ${LINE_Y}` : "";

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-6xl">
      {/* Desktop: horizontal pipeline — line passes through column centers */}
      <div className="relative hidden w-full pt-2 md:block">
        <svg
          className="pointer-events-none absolute inset-x-0 top-[1.75rem] z-0 h-14 w-full"
          viewBox="0 0 1000 56"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="qa-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(0, 123, 154)" stopOpacity="0.2" />
              <stop offset="45%" stopColor="rgb(0, 123, 154)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(0, 95, 119)" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {n > 1 ? (
            <>
              <path
                d={pathD}
                fill="none"
                stroke="rgb(229 231 235)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#qa-line-grad)"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength: lineProgress }}
              />
            </>
          ) : null}
        </svg>

        <div
          className="relative z-[1] grid w-full justify-items-center gap-4 lg:gap-6"
          style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
        >
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="flex w-full max-w-[13.5rem] flex-col items-center text-center lg:max-w-[15rem]"
            >
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                  delay: 0.15 + i * 0.12,
                }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                className="relative flex h-[3.35rem] w-[3.35rem] shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_10px_36px_-14px_rgba(0,123,154,0.45)] ring-2 ring-brand/30 md:h-[4rem] md:w-[4rem]"
              >
                <motion.span
                  className="absolute inset-0 rounded-2xl bg-brand/15"
                  animate={{ opacity: [0.35, 0.65, 0.35] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
                />
                <span className="relative font-display text-lg font-bold text-brand-dark md:text-xl">
                  {i + 1}
                </span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.45 }}
                className="mt-8 w-full font-display text-lg font-bold tracking-[-0.02em] text-neutral-900 lg:text-xl"
              >
                {s.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.32 + i * 0.1, duration: 0.45 }}
                className="mt-3 w-full text-base leading-relaxed text-neutral-600"
              >
                {s.desc}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: centered vertical timeline */}
      <div className="relative mx-auto w-full max-w-md md:hidden">
        <div className="absolute bottom-3 left-1/2 top-3 w-1 -translate-x-1/2 overflow-hidden rounded-full bg-neutral-200">
          <motion.div
            className="h-full w-full origin-top bg-gradient-to-b from-brand via-brand to-brand-dark"
            style={{ scaleY: lineProgress }}
          />
        </div>
        <ul className="relative flex flex-col items-center space-y-10 px-2">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 24,
                delay: i * 0.07,
              }}
              className="relative flex w-full max-w-sm flex-col items-center text-center"
            >
              <motion.span
                className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-brand-dark shadow-md ring-2 ring-brand/25"
                whileInView={{ rotate: [0, -6, 6, 0], scale: [1, 1.08, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.55 }}
              >
                {i + 1}
              </motion.span>
              <div className="mt-4 w-full rounded-2xl border border-neutral-200/90 bg-white p-5 text-center shadow-sm">
                <h3 className="font-display text-lg font-bold text-neutral-900">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-600">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
