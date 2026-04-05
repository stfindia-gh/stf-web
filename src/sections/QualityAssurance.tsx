import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { QualityTimeline } from "../components/QualityTimeline";
import { Reveal } from "../components/ui/Reveal";

const steps = [
  { title: "Raw material inspection", desc: "Incoming checks to protect lot-to-lot stability." },
  { title: "Production monitoring", desc: "Line audits and parameter control during knitting." },
  { title: "Strength testing", desc: "Mechanical verification aligned to your specifications." },
  { title: "Final inspection", desc: "Roll-level review before release and dispatch." },
];

export function QualityAssurance() {
  return (
    <PageSection id="quality" variant="default">
      <Reveal variant="right">
        <SectionHeading
          title="Quality assurance"
          description="A step-based flow designed for consistency, traceability, and reliable outcomes — batch after batch."
        />
      </Reveal>

      <Reveal variant="fade" delay={0.06}>
        <QualityTimeline steps={steps} />
      </Reveal>
    </PageSection>
  );
}
