/** Minimal primary navigation (desktop) */
export const primaryNav = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#contact", label: "Contact" },
] as const;

/** Grouped links for mobile drawer + footer */
export const navGroups = [
  {
    label: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "#facility", label: "Facility" },
      { href: "#air-mesh", label: "Air mesh" },
      { href: "#strength", label: "Production strength" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { href: "#products", label: "Product range" },
      { href: "#featured", label: "Featured products" },
      { href: "#customization", label: "Customization" },
      { href: "#industries", label: "Industries" },
    ],
  },
  {
    label: "Trust & delivery",
    links: [
      { href: "#quality", label: "Quality assurance" },
      { href: "#why-us", label: "Why choose us" },
      { href: "#logistics", label: "Logistics" },
    ],
  },
] as const;
