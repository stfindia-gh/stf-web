import { motion } from "framer-motion";
import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { Reveal } from "../components/ui/Reveal";

const items = [
  {
    title: "Strategically located plant",
    desc: "Efficient access to supply routes and responsive dispatch for domestic programs.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    title: "Advanced warp knitting machines",
    desc: "High-performance equipment for stable structures, even tension, and repeatable output.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    title: "Skilled workforce",
    desc: "Experienced operators and supervisors aligned to quality-first production habits.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
  },
  {
    title: "Efficient production processes",
    desc: "Streamlined workflows from beam preparation to roll finishing and packing.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: "Strict quality control",
    desc: "Checks at key stages to protect consistency, strength, and visual uniformity.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
];

export function ManufacturingFacility() {
  return (
    <PageSection id="facility" variant="muted">
      <Reveal variant="left">
        <SectionHeading
          title="Manufacturing facility"
          description="Industrial capability built around precision knitting and disciplined execution."
        />
      </Reveal>
      <Stagger
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        stagger={0.11}
        delayChildren={0.05}
        perspective
      >
        {items.map((item) => (
          <StaggerItem key={item.title} mode="tilt">
            <motion.article
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 22 } }}
              className="flex h-full flex-col rounded-[1.35rem] border border-neutral-200/80 bg-white p-7 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.15)] md:p-8"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                whileHover={{ rotate: [0, -6, 6, 0] }}
                transition={{ duration: 0.6 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/[0.1] text-brand md:h-14 md:w-14"
              >
                <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
              </motion.div>
              <h3 className="mt-6 font-display text-lg font-bold tracking-[-0.02em] text-neutral-900 md:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">{item.desc}</p>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
