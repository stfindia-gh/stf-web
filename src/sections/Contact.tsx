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
      <Reveal variant="scale" className="mb-14 md:mb-20">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-neutral-950 via-[#0a2830] to-brand-dark p-8 shadow-2xl shadow-neutral-900/20 md:grid md:grid-cols-[minmax(0,280px)_1fr] md:items-center md:gap-12 md:p-12 lg:gap-16 lg:rounded-[2.5rem] lg:p-14">
          <div className="flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="rounded-2xl bg-white p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] ring-1 ring-white/30 md:p-9 lg:p-10"
            >
              <img
                src="/logo.png"
                alt="Shubhankr Texfab India"
                className="mx-auto h-28 w-auto object-contain md:h-32 lg:h-36"
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
              className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-4xl lg:text-5xl"
            >
              Let’s build your next textile program
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
              className="mt-5 text-lg leading-relaxed text-white/65 md:text-xl"
            >
              Share specs, volumes, and timelines — we’ll respond with a clear path forward. Update placeholders
              below with your official details.
            </motion.p>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <Reveal variant="left">
          <form
            onSubmit={onSubmit}
            className="space-y-6 rounded-[1.75rem] border border-neutral-200/80 bg-white p-8 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.12)] md:space-y-7 md:p-10 lg:p-12"
          >
            <div>
              <label htmlFor="name" className="block text-base font-medium text-neutral-800">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-3 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-base outline-none transition focus:border-brand/50 focus:bg-white focus:ring-4 focus:ring-brand/15"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-medium text-neutral-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-3 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-base outline-none transition focus:border-brand/50 focus:bg-white focus:ring-4 focus:ring-brand/15"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-base font-medium text-neutral-800">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-3 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-base outline-none transition focus:border-brand/50 focus:bg-white focus:ring-4 focus:ring-brand/15"
                placeholder="+91 …"
              />
            </div>
            <div>
              <label htmlFor="requirement" className="block text-base font-medium text-neutral-800">
                Requirement
              </label>
              <textarea
                id="requirement"
                name="requirement"
                rows={5}
                required
                className="mt-3 w-full resize-y rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-base outline-none transition focus:border-brand/50 focus:bg-white focus:ring-4 focus:ring-brand/15"
                placeholder="GSM, application, colors, volumes, timeline…"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-full bg-brand py-4 text-lg font-semibold text-white transition-colors hover:bg-brand-dark md:py-5"
            >
              Submit inquiry
            </motion.button>
          </form>
        </Reveal>

        <div className="space-y-8">
          <Reveal variant="right" delay={0.08}>
            <div className="rounded-[1.75rem] border border-neutral-200/80 bg-white p-8 md:p-10">
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-neutral-900">
                Company details
              </h3>
              <address className="mt-6 not-italic text-base leading-relaxed text-neutral-600 md:text-lg">
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
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-brand hover:text-brand md:text-base"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.indiamart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-brand hover:text-brand md:text-base"
                >
                  IndiaMART
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.12}>
            <div className="overflow-hidden rounded-[1.75rem] border border-neutral-200/80 bg-neutral-200 shadow-lg">
              <iframe
                title="Company location map"
                className="h-72 w-full grayscale-[10%] md:h-80 lg:h-96"
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
