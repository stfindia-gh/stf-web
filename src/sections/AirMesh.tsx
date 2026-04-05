import { motion } from "framer-motion";
import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Reveal } from "../components/ui/Reveal";

const features = [
  "Lightweight",
  "High breathability",
  "Cushioning effect",
  "Durable & flexible",
  "Excellent ventilation",
];

export function AirMesh() {
  return (
    <PageSection id="air-mesh" variant="default" minHeight="tall">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal variant="left">
            <SectionHeading className="!mb-10" title="What is air mesh fabric?" />
          </Reveal>
          <Reveal variant="fade" delay={0.08} className="space-y-6 text-lg leading-relaxed text-neutral-600 md:text-xl">
            <p>
              Air mesh is a <strong className="font-semibold text-neutral-900">3D structured breathable textile</strong>{" "}
              created by spacing two surface layers with a connecting yarn system. The open structure allows air to
              move freely while providing cushioning and support where it matters.
            </p>
            <p>
              It is widely used anywhere comfort, airflow, and durability are priorities — from footwear uppers to
              seating, bags, and performance applications.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-3 text-base font-medium text-neutral-800 md:text-lg"
              >
                <motion.span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand"
                  whileHover={{ scale: 1.1, rotate: 12 }}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.span>
                {f}
              </motion.li>
            ))}
          </ul>
        </div>

        <Reveal variant="scale" delay={0.1}>
          <div className="relative mx-auto max-w-lg lg:mx-0 lg:max-w-none">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-brand/20 blur-3xl md:h-48 md:w-48"
            />
            <div className="relative aspect-square rounded-[2rem] border border-neutral-200/80 bg-gradient-to-br from-white via-neutral-50 to-brand/[0.08] p-8 shadow-[0_24px_60px_-30px_rgba(0,123,154,0.25)] md:rounded-[2.5rem] md:p-10">
              <svg viewBox="0 0 320 320" className="h-full w-full text-brand" aria-hidden>
                <defs>
                  <pattern id="am-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="currentColor"
                      strokeOpacity="0.1"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="320" height="320" fill="url(#am-grid)" />
                <motion.g
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
                >
                  <ellipse cx="160" cy="100" rx="120" ry="28" fill="currentColor" fillOpacity="0.08" />
                  <ellipse cx="160" cy="160" rx="120" ry="28" fill="currentColor" fillOpacity="0.12" />
                  <ellipse cx="160" cy="220" rx="120" ry="28" fill="currentColor" fillOpacity="0.18" />
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                    <line
                      key={i}
                      x1={60 + (i % 4) * 60}
                      y1={88 + Math.floor(i / 4) * 36}
                      x2={60 + (i % 4) * 60}
                      y2={232 - Math.floor(i / 4) * 28}
                      stroke="currentColor"
                      strokeOpacity="0.32"
                      strokeWidth="2"
                    />
                  ))}
                </motion.g>
                <text x="160" y="300" textAnchor="middle" fill="#737373" style={{ fontSize: "12px" }}>
                  3D spacer structure (diagram)
                </text>
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </PageSection>
  );
}
