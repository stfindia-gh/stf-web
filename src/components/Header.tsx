import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { navGroups, primaryNav } from "../data/nav";

const SCROLL_DELTA = 10;
const TOP_REVEAL_PX = 48;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const onScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 20);

    if (open) {
      setHidden(false);
      lastScrollY.current = y;
      return;
    }

    const delta = y - lastScrollY.current;

    if (y < TOP_REVEAL_PX) {
      setHidden(false);
      lastScrollY.current = y;
      return;
    }

    lastScrollY.current = y;
    if (delta > SCROLL_DELTA) {
      setHidden(true);
    } else if (delta < -SCROLL_DELTA) {
      setHidden(false);
    }
  }, [open]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      {/* Top bar — hides on scroll down, shows on scroll up */}
      <motion.div
        className={`pointer-events-auto border-b transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-neutral-200/90 bg-white/95 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-white/80 backdrop-blur-xl"
        }`}
        initial={false}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-5 sm:h-16 sm:px-8 lg:px-10">
          <motion.a
            href="#hero"
            className="flex shrink-0 items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src="/logo.png" alt="Shubhankr Texfab India" className="h-9 w-auto sm:h-10" />
          </motion.a>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {primaryNav.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-neutral-600 md:text-[0.9375rem]"
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
              className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/25 transition-colors hover:bg-brand-dark md:inline-flex"
            >
              Get in touch
            </motion.a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-100 md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
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
      </motion.div>

      {/* Full-screen-height mobile menu (below top bar = remaining viewport) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed inset-x-0 top-14 z-40 flex h-[calc(100dvh-3.5rem)] flex-col bg-white sm:top-16 sm:h-[calc(100dvh-4rem)] md:hidden"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
          >
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-5 pb-6 pt-3 sm:px-8">
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
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: gi * 0.04 + i * 0.03 }}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-3 py-3 text-[0.9375rem] font-medium text-neutral-800 hover:bg-neutral-50"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </nav>
                </div>
              ))}
              <div className="mt-auto flex shrink-0 pt-8">
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-brand py-3.5 text-sm font-semibold text-white hover:bg-brand-dark"
                >
                  Get in touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
