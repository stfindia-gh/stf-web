import { motion } from "framer-motion";
import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { Reveal } from "../components/ui/Reveal";

const items = [
  { title: "Pan-India supply", desc: "Nationwide reach with structured dispatch planning." },
  { title: "Safe packaging", desc: "Roll protection to reduce transit risk and handling issues." },
  { title: "Timely dispatch", desc: "Operational rhythm aligned to committed timelines." },
  { title: "Reliable transport partners", desc: "Trusted logistics relationships for consistent delivery." },
];

export function Logistics() {
  return (
    <PageSection id="logistics" variant="default">
      <Reveal variant="left">
        <SectionHeading title="Logistics & supply" />
      </Reveal>

      <Stagger className="grid gap-6 sm:grid-cols-2 lg:gap-8" stagger={0.12}>
        {items.map((item) => (
          <StaggerItem key={item.title} mode="rise">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex gap-5 rounded-[1.35rem] border border-neutral-200/80 bg-neutral-50 p-7 md:gap-6 md:p-9"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/12 text-brand md:h-14 md:w-14">
                <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-neutral-900 md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-600 md:text-lg">{item.desc}</p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
