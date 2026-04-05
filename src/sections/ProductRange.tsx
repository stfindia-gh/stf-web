import { motion } from "framer-motion";
import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { Reveal } from "../components/ui/Reveal";

const products = [
  {
    title: "Footwear Air Mesh",
    desc: "Breathable uppers and lining options with consistent hand-feel for athletic and casual lines.",
    gradient: "from-sky-100/90 via-brand/15 to-teal-50",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
  },
  {
    title: "Furniture Mesh Fabric",
    desc: "Ventilated surfaces for seating and panels — comfortable, durable, and easy to integrate.",
    gradient: "from-stone-100 via-brand/12 to-neutral-100",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
  },
  {
    title: "Bag & Backpack Mesh",
    desc: "Lightweight panels and pockets that improve airflow without sacrificing structure.",
    gradient: "from-amber-50 via-brand/12 to-orange-50/80",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    ),
  },
  {
    title: "Automotive Seat Mesh",
    desc: "Performance-oriented mesh for ventilation layers in seating and interior trim concepts.",
    gradient: "from-slate-100 via-brand/10 to-zinc-50",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    ),
  },
  {
    title: "Sports & Performance Mesh",
    desc: "High-breathability constructions for demanding movement, moisture management, and wear.",
    gradient: "from-emerald-50/90 via-brand/12 to-cyan-50/80",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
];

export function ProductRange() {
  return (
    <PageSection id="products" variant="muted">
      <Reveal variant="scale">
        <SectionHeading
          title="Product range"
          description="A focused portfolio of air mesh applications — each developed with real production constraints in mind."
        />
      </Reveal>

      <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9" stagger={0.13} delayChildren={0.04}>
        {products.map((p, i) => (
          <StaggerItem key={p.title} mode={i % 2 === 0 ? "pop" : "rise"}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-neutral-200/80 bg-white shadow-[0_16px_48px_-32px_rgba(0,0,0,0.18)]"
            >
              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient} overflow-hidden transition-[transform] duration-700 ease-out group-hover:scale-[1.03]`}
              >
                <motion.div
                  className="absolute inset-0 bg-mesh-pattern bg-[length:16px_16px] opacity-30"
                  initial={{ opacity: 0.2 }}
                  whileHover={{ opacity: 0.45 }}
                />
                <div className="relative flex h-full items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/90 text-brand shadow-lg backdrop-blur-sm md:h-24 md:w-24"
                  >
                    <svg className="h-11 w-11 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {p.icon}
                    </svg>
                  </motion.div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-neutral-900 md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-600">{p.desc}</p>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 6 }}
                  className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-brand hover:text-brand-dark"
                >
                  View details
                  <span aria-hidden>→</span>
                </motion.a>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
