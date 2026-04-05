import { motion } from "framer-motion";
import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { Reveal } from "../components/ui/Reveal";

const reasons = [
  { t: "High quality fabrics", d: "Specifications you can trust — batch to batch." },
  { t: "Competitive pricing", d: "Value engineering without cutting corners." },
  { t: "Reliable supply chain", d: "Planning support and predictable releases." },
  { t: "Custom development", d: "Collaborative trials from sample to scale." },
  { t: "Long-term partnership approach", d: "We grow when your programs grow." },
];

export function WhyChooseUs() {
  return (
    <PageSection id="why-us" variant="muted">
      <Reveal variant="right">
        <SectionHeading title="Why choose us" />
      </Reveal>

      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7" stagger={0.1}>
        {reasons.map((r, i) => (
          <StaggerItem key={r.t} mode={i % 3 === 1 ? "slide" : "pop"}>
            <motion.article
              whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.95)" }}
              className="flex gap-5 rounded-[1.25rem] border border-neutral-200/80 bg-white p-6 shadow-sm md:p-8"
            >
              <motion.span
                className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-brand/25"
                whileHover={{ scale: 1.1, rotate: 12 }}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.span>
              <div>
                <p className="font-display text-lg font-bold tracking-[-0.02em] text-neutral-900">{r.t}</p>
                <p className="mt-2 text-base leading-relaxed text-neutral-600">{r.d}</p>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
