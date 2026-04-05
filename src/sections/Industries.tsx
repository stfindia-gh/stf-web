import { motion } from "framer-motion";
import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { Reveal } from "../components/ui/Reveal";

const industries = [
  { name: "Footwear", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  {
    name: "Furniture & Seating",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  { name: "Automotive", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
  { name: "Bags & Luggage", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
  { name: "Sportswear & Outdoor", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
];

export function Industries() {
  return (
    <PageSection id="industries" variant="muted">
      <Reveal variant="left">
        <SectionHeading title="Industries we serve" />
      </Reveal>

      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6" stagger={0.1}>
        {industries.map((ind) => (
          <StaggerItem key={ind.name} mode="slide">
            <motion.div
              whileHover={{ y: -5, borderColor: "rgba(0, 123, 154, 0.35)" }}
              className="flex flex-col items-center rounded-[1.25rem] border-2 border-neutral-200/80 bg-white p-7 text-center shadow-[0_12px_40px_-32px_rgba(0,0,0,0.12)] md:p-8"
            >
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.5 }}
                className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/[0.1] text-brand md:h-16 md:w-16"
              >
                <svg className="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ind.icon} />
                </svg>
              </motion.div>
              <p className="mt-5 text-base font-bold text-neutral-900 md:text-lg">{ind.name}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
