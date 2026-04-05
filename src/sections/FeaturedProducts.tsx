import { motion } from "framer-motion";
import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { Reveal } from "../components/ui/Reveal";

const featured = [
  {
    name: "ProVent™ Sport Upper Mesh",
    benefits: ["Breathable", "Durable", "Lightweight"],
    tone: "from-brand/25 to-teal-100/70",
  },
  {
    name: "ComfortWeave™ Seating Mesh",
    benefits: ["Breathable", "Durable", "Lightweight"],
    tone: "from-neutral-200/90 to-brand/15",
  },
  {
    name: "AeroStride™ Footwear Lining",
    benefits: ["Breathable", "Durable", "Lightweight"],
    tone: "from-sky-100/80 to-brand/12",
  },
  {
    name: "TransitMesh™ Bag Panel",
    benefits: ["Breathable", "Durable", "Lightweight"],
    tone: "from-amber-100/80 to-brand/12",
  },
];

export function FeaturedProducts() {
  return (
    <PageSection id="featured" variant="default">
      <Reveal variant="down">
        <SectionHeading eyebrow="Highlight" title="Featured products" />
      </Reveal>

      <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8" stagger={0.12}>
        {featured.map((item, i) => (
          <StaggerItem key={item.name} mode="pop">
            <motion.article
              whileHover={{ y: -6, rotateZ: i % 2 === 0 ? 0.5 : -0.5 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="overflow-hidden rounded-[1.35rem] border border-neutral-200/80 bg-neutral-50 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.12)]"
            >
              <div className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative aspect-[4/3] bg-gradient-to-br ${item.tone}`}
                >
                  <div className="absolute inset-0 bg-mesh-pattern bg-[length:14px_14px] opacity-35" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-500 shadow-md backdrop-blur">
                      Image placeholder
                    </span>
                  </span>
                </motion.div>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-neutral-900 md:text-xl">
                  {item.name}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.benefits.map((b) => (
                    <li
                      key={b}
                      className="rounded-full bg-brand/12 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-dark"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
