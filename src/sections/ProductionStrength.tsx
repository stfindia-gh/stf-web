import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { Reveal } from "../components/ui/Reveal";

const points = [
  { title: "High-capacity machines", text: "Built for throughput without sacrificing control." },
  { title: "Scalable production", text: "Ramp-friendly planning as your programs grow." },
  { title: "Reliable delivery schedules", text: "Commitments backed by disciplined operations." },
  { title: "Consistent output", text: "Repeatable quality you can specify and audit." },
];

export function ProductionStrength() {
  return (
    <PageSection id="strength" variant="default" minHeight="tall">
      <Reveal variant="fade">
        <SectionHeading title="Production strength" />
      </Reveal>

      <Stagger className="grid gap-7 md:grid-cols-2 md:gap-10" stagger={0.12}>
        {points.map((p) => (
          <StaggerItem key={p.title} mode="rise">
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-neutral-200/80 bg-gradient-to-br from-neutral-50 to-white p-8 shadow-[0_16px_50px_-36px_rgba(0,123,154,0.2)] transition-shadow hover:shadow-[0_24px_60px_-36px_rgba(0,123,154,0.25)] md:p-10">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/5 transition-transform group-hover:scale-150" />
              <h3 className="relative font-display text-2xl font-bold tracking-[-0.02em] text-neutral-900 md:text-3xl">
                {p.title}
              </h3>
              <p className="relative mt-4 text-lg leading-relaxed text-neutral-600">{p.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
