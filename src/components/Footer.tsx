import { navGroups } from "../data/nav";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#eff0f2]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="" className="mb-5 h-12 w-auto md:h-14" />
            <p className="max-w-sm text-sm leading-relaxed text-neutral-600 md:text-base">
              High-quality air mesh fabrics — engineered for breathability, durability, and performance across
              industries.
            </p>
          </div>
          {navGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-neutral-700 transition-colors hover:text-brand md:text-[0.9375rem]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-neutral-200/90 pt-8 text-center text-xs text-neutral-500 md:text-sm">
          © {new Date().getFullYear()} Shubhankr Texfab India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
