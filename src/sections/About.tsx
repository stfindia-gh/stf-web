import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Reveal } from "../components/ui/Reveal";

export function About() {
  return (
    <PageSection id="about" variant="default" minHeight="tall">
      <Reveal variant="right">
        <SectionHeading title="About the company" />
      </Reveal>
      <Reveal variant="fade" delay={0.12} className="max-w-3xl space-y-8 text-lg leading-relaxed text-neutral-600 md:text-xl md:leading-relaxed">
        <p>
          <strong className="font-semibold text-neutral-900">Shubhankr Texfab India</strong> is a manufacturer
          of high-quality air mesh fabrics focused on durability, breathability, and comfort. We combine modern
          warp-knitting capability with disciplined process control to deliver fabrics that perform in
          real-world applications.
        </p>
        <p>
          Our priorities are straightforward: consistent quality, competitive pricing, and a reliable supply you
          can plan around. We invest in innovation and continuous improvement so your products stay ahead —
          without compromising strength, hand-feel, or ventilation.
        </p>
      </Reveal>
    </PageSection>
  );
}
