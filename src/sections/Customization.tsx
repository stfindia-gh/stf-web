import { motion } from "framer-motion";
import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { Reveal } from "../components/ui/Reveal";

const caps = [
  { label: "GSM options", sub: "Weight bands tuned to application" },
  { label: "Thickness variations", sub: "Spacer heights for cushion & airflow" },
  { label: "Color options", sub: "Program-driven dye lots & consistency" },
  { label: "Pattern / structure", sub: "Engineered surfaces & openness" },
  { label: "Custom development", sub: "Joint trials from concept to scale-up" },
];

export function Customization() {
  return (
    <PageSection id="customization" variant="muted">
      <Reveal variant="scale">
        <SectionHeading
          title="Customization capabilities"
          description="We work closely with clients to develop tailored textile solutions — from specification alignment to repeatable bulk supply."
        />
      </Reveal>

      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6" stagger={0.11}>
        {caps.map((c, i) => (
          <StaggerItem key={c.label} mode="pop">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex h-full flex-col rounded-[1.25rem] border border-neutral-200/80 bg-white p-6 text-center shadow-[0_8px_30px_-20px_rgba(0,0,0,0.1)] md:p-7"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-sm font-bold text-white shadow-md md:h-14 md:w-14 md:text-base"
              >
                {i + 1}
              </motion.div>
              <h3 className="mt-5 font-display text-base font-bold tracking-[-0.02em] text-neutral-900 md:text-lg">
                {c.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">{c.sub}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
