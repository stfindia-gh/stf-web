import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navGroups, primaryNav } from "../data/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-neutral-200/90 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/80 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 px-6 sm:h-[4.25rem] sm:px-10 lg:px-14">
        <motion.a
          href="#hero"
          className="flex shrink-0 items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img src="/logo.png" alt="Shubhankr Texfab India" className="h-11 w-auto sm:h-[3.25rem]" />
        </motion.a>

        <nav className="hidden items-center gap-12 md:flex" aria-label="Primary">
          {primaryNav.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative text-base font-medium text-neutral-600"
              whileHover={{ y: -1 }}
            >
              <span className="relative z-10">{link.label}</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-brand"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-md shadow-brand/25 transition-colors hover:bg-brand-dark md:inline-flex"
          >
            Get in touch
          </motion.a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-100 md:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h10" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-neutral-100 bg-white md:hidden"
          >
            <div className="mx-auto max-h-[min(78vh,calc(100dvh-5rem))] max-w-[90rem] overflow-y-auto overscroll-contain px-6 pb-10 pt-3 sm:px-10">
              {navGroups.map((group, gi) => (
                <div key={group.label} className={gi > 0 ? "mt-8 border-t border-neutral-100 pt-8" : ""}>
                  <p className="px-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    {group.label}
                  </p>
                  <nav className="mt-3 flex flex-col gap-1" aria-label={group.label}>
                    {group.links.map((link, i) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: gi * 0.04 + i * 0.03 }}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-3 py-3 text-base font-medium text-neutral-800 hover:bg-neutral-50"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </nav>
                </div>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                onClick={() => setOpen(false)}
                className="mt-10 flex w-full items-center justify-center rounded-full bg-brand py-4 text-base font-semibold text-white hover:bg-brand-dark"
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
