import { navGroups } from "../data/nav";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#eff0f2]">
      <div className="mx-auto max-w-[90rem] px-6 py-16 sm:px-10 md:py-24 lg:px-14">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="" className="mb-6 h-16 w-auto md:h-[4.5rem]" />
            <p className="max-w-sm text-base leading-relaxed text-neutral-600 md:text-lg">
              High-quality air mesh fabrics — engineered for breathability, durability, and performance across
              industries.
            </p>
          </div>
          {navGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                {group.label}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-base text-neutral-700 transition-colors hover:text-brand md:text-[1.0625rem]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 border-t border-neutral-200/90 pt-10 text-center text-sm text-neutral-500 md:text-base">
          © {new Date().getFullYear()} Shubhankr Texfab India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
