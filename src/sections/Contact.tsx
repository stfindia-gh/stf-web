import { motion } from "framer-motion";
import { PageSection } from "../components/layout/PageSection";
import { Reveal } from "../components/ui/Reveal";

export function Contact() {
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
              Reach out for specifications, sampling, or production discussions — we’ll respond with a clear path
              forward.
            </motion.p>
          </div>
        </div>
      </Reveal>

      <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
        <div className="flex w-full">
          <Reveal variant="right" delay={0.08} className="w-full">
            <div className="h-full w-full rounded-2xl border border-neutral-200/80 bg-white p-6 md:p-8">
              <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-neutral-900">
                Company details
              </h3>
              <address className="mt-4 not-italic text-sm leading-relaxed text-neutral-600 md:text-base">
                <p className="font-semibold text-neutral-900">
                  Shubhankr Texfab India
                </p>
                <p className="mt-3">Plot no. 4, Phase-IV, Sector-56, Kundli, Sonipat, Haryana 131028</p>
                <p className="mt-5">
                  <a
                    href="tel:+917011516270"
                    className="text-brand hover:text-brand-dark"
                  >
                    +91 7011516270
                  </a>
                </p>
                <p className="">
                  <a
                    href="tel:+917838894343"
                    className="text-brand hover:text-brand-dark"
                  >
                    +91 7838894343
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:stfindia@yahoo.co.in"
                    className="text-brand hover:text-brand-dark"
                  >
                    stfindia@yahoo.co.in
                  </a>
                </p>
              </address>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="https://www.exportersindia.com/shubhankr-texfab-india/products.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-neutral-200 px-4 py-2 text-xs font-semibold text-neutral-700 transition hover:border-brand hover:text-brand md:text-sm"
                >
                  ExportersIndia
                </a>
                <a
                  href="https://www.indiamart.com/shubhankrtexfabindia/profile.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-neutral-200 px-4 py-2 text-xs font-semibold text-neutral-700 transition hover:border-brand hover:text-brand md:text-sm"
                >
                  IndiaMART
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="flex w-full">
          <Reveal variant="right" delay={0.12} className="w-full">
            <div className="h-full w-full overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-200 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.412135454387!2d77.12900907553086!3d28.88609867252081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dab8966bde753%3A0x7b0ef0c0232a203c!2sShubhankr%20TexFab%20India!5e0!3m2!1sen!2sin!4v1778429462417!5m2!1sen!2sin"
                title="Shubhankr TexFab India location"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </PageSection>
  );
}
