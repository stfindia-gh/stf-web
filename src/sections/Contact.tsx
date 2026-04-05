import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { PageSection } from "../components/layout/PageSection";
import { Reveal } from "../components/ui/Reveal";

export function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <PageSection id="contact" variant="muted">
      <Reveal variant="scale" className="mb-10 md:mb-14">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-950 via-[#0a2830] to-brand-dark p-6 shadow-2xl shadow-neutral-900/20 md:grid md:grid-cols-[minmax(0,240px)_1fr] md:items-center md:gap-10 md:p-9 lg:gap-12 lg:rounded-[1.75rem] lg:p-10">
          <div className="flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="rounded-xl bg-white p-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)] ring-1 ring-white/30 md:p-7"
            >
              <img
                src="/logo.png"
                alt="Shubhankr Texfab India"
                className="mx-auto h-24 w-auto object-contain md:h-28"
              />
            </motion.div>
          </div>
          <div className="mt-10 text-center md:mt-0 md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm font-semibold uppercase tracking-[0.35em] text-brand/90"
            >
              Contact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-white md:text-3xl lg:text-4xl"
            >
              Let’s build your next textile program
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
              className="mt-4 text-base leading-relaxed text-white/65 md:text-[1.0625rem]"
            >
              Share specs, volumes, and timelines — we’ll respond with a clear path forward. Update placeholders
              below with your official details.
            </motion.p>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
        <Reveal variant="left">
          <form
            onSubmit={onSubmit}
            className="space-y-5 rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.1)] md:space-y-5 md:p-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-800">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[0.9375rem] outline-none transition focus:border-brand/50 focus:bg-white focus:ring-2 focus:ring-brand/15"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[0.9375rem] outline-none transition focus:border-brand/50 focus:bg-white focus:ring-2 focus:ring-brand/15"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-800">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-2 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[0.9375rem] outline-none transition focus:border-brand/50 focus:bg-white focus:ring-2 focus:ring-brand/15"
                placeholder="+91 …"
              />
            </div>
            <div>
              <label htmlFor="requirement" className="block text-sm font-medium text-neutral-800">
                Requirement
              </label>
              <textarea
                id="requirement"
                name="requirement"
                rows={4}
                required
                className="mt-2 w-full resize-y rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[0.9375rem] outline-none transition focus:border-brand/50 focus:bg-white focus:ring-2 focus:ring-brand/15"
                placeholder="GSM, application, colors, volumes, timeline…"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-full bg-brand py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark md:text-[0.9375rem]"
            >
              Submit inquiry
            </motion.button>
          </form>
        </Reveal>

        <div className="space-y-6">
          <Reveal variant="right" delay={0.08}>
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 md:p-8">
              <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-neutral-900">
                Company details
              </h3>
              <address className="mt-4 not-italic text-sm leading-relaxed text-neutral-600 md:text-base">
                <p className="font-semibold text-neutral-900">Shubhankr Texfab India</p>
                <p className="mt-3">[Street address line]</p>
                <p>[City, State — PIN]</p>
                <p className="mt-5">
                  <a href="tel:+910000000000" className="text-brand hover:text-brand-dark">
                    +91 [phone placeholder]
                  </a>
                </p>
                <p>
                  <a href="mailto:info@example.com" className="text-brand hover:text-brand-dark">
                    info@example.com
                  </a>
                </p>
              </address>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-neutral-200 px-4 py-2 text-xs font-semibold text-neutral-700 transition hover:border-brand hover:text-brand md:text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.indiamart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-neutral-200 px-4 py-2 text-xs font-semibold text-neutral-700 transition hover:border-brand hover:text-brand md:text-sm"
                >
                  IndiaMART
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.12}>
            <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-200 shadow-lg">
              <iframe
                title="Company location map"
                className="h-56 w-full grayscale-[10%] md:h-64 lg:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.0%2C28.4%2C77.4%2C28.8&amp;layer=mapnik"
              />
              <p className="bg-white px-5 py-3 text-center text-sm text-neutral-500 md:text-base">
                Replace with your Google Maps embed or exact coordinates.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </PageSection>
  );
}
