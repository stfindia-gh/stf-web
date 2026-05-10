import { motion } from "framer-motion";
import { PageSection } from "../components/layout/PageSection";
import { SectionHeading } from "../components/layout/SectionHeading";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { Reveal } from "../components/ui/Reveal";

const assetUrl = (relativePath: string) =>
  new URL(relativePath, import.meta.url).href;

const productImages = {
  doubleColorMesh: assetUrl("../../assets/1-double-col-mesh-fab.webp"),
  goliAirMesh: assetUrl("../../assets/2-goli.webp"),
  crownMesh: assetUrl("../../assets/3-crown.webp"),
  bdMesh: assetUrl("../../assets/4-bd.webp"),
  zebraMesh: assetUrl("../../assets/5-zebra.webp"),
  diamondMesh: assetUrl("../../assets/6-diamond.webp"),
  barfiMesh: assetUrl("../../assets/7-barfi.webp"),
  lineMesh: assetUrl("../../assets/8-line.webp"),
  kesarMesh: assetUrl("../../assets/9-kesar.jpeg"),
  poloMesh: assetUrl("../../assets/10-polo.jpeg"),
} as const;

const featured = [
  {
    name: "Double Color Mesh",
    benefits: ["Stretch", "Design", "Soft", "Breath"],
    tone: "from-brand/25 to-teal-100/70",
    image: productImages.doubleColorMesh,
  },
  {
    name: "Goli Air Mesh",
    benefits: ["Multiuse", "Popular", "Stretch", "Durable"],
    tone: "from-neutral-200/90 to-brand/15",
    image: productImages.goliAirMesh,
    imageClassName: "scale-[1.5] md:scale-[1.5]",
  },
  {
    name: "Crown Mesh",
    benefits: ["Visible", "Stylish", "Durable", "Textured"],
    tone: "from-sky-100/80 to-brand/12",
    image: productImages.crownMesh,
    imageClassName: "scale-[1.18] md:scale-[1.22]",
  },
  {
    name: "BD Mesh",
    benefits: ["Spongy", "Stretch", "Bouncy", "Light"],
    tone: "from-amber-100/80 to-brand/12",
    image: productImages.bdMesh,
  },
  {
    name: "Zebra Mesh",
    benefits: ["Plush", "Style", "Soft", "Premium"],
    tone: "from-amber-100/80 to-brand/12",
    image: productImages.zebraMesh,
  },
  {
    name: "Diamond Mesh",
    benefits: ["Spongy", "Breathable", "Soft", "DriFit"],
    tone: "from-amber-100/80 to-brand/12",
    image: productImages.diamondMesh,
  },
  {
    name: "Barfi Mesh",
    benefits: ["Durable", "Steady", "Multiuse", "Light"],
    tone: "from-amber-100/80 to-brand/12",
    image: productImages.barfiMesh,
  },
  {
    name: "Line Mesh",
    benefits: ["Breath", "Flex", "Light", "Comfort"],
    tone: "from-amber-100/80 to-brand/12",
    image: productImages.lineMesh,
  },
  {
    name: "Kesar Mesh",
    benefits: ["Premium", "Soft", "Breathable", "Elegant"],
    tone: "from-amber-100/80 to-brand/12",
    image: productImages.kesarMesh,
  },
  {
    name: "Polo Mesh",
    benefits: ["Sporty", "Breath", "Light", "QuickDry"],
    tone: "from-amber-100/80 to-brand/12",
    image: productImages.poloMesh,
  },
];

export function FeaturedProducts() {
  return (
    <PageSection id="featured" variant="default">
      <Reveal variant="down">
        <SectionHeading eyebrow="Highlight" title="Featured products" />
      </Reveal>

      <Stagger
        className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8"
        stagger={0.12}
      >
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
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`absolute inset-0 h-full w-full origin-center object-cover opacity-[0.92] ${"imageClassName" in item ? (item.imageClassName as string) : ""}`}
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-neutral-900 md:text-xl">
                  {item.name}
                </h3>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:flex-wrap md:gap-1.5">
                  {item.benefits.map((b) => (
                    <li
                      key={b}
                      className="col-span-1 min-w-0 whitespace-nowrap rounded-full bg-brand/12 py-1 text-center text-[0.625rem] font-bold uppercase leading-none tracking-wide text-brand-dark md:w-auto md:min-w-px md:py-1 md:text-xs md:leading-normal"
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
