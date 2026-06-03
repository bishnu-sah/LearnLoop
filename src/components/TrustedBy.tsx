"use client";

import { motion } from "framer-motion";
import { companyLogos } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p
          className="text-center text-sm font-medium uppercase tracking-[0.2em] text-dark/30"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by learners at leading companies
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex gap-16 items-center animate-marquee">
            {companyLogos.map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-10 grayscale opacity-30 hover:grayscale-0 hover:opacity-60 transition-all duration-500"
              >
                <img
                  src={company.src}
                  alt={company.name}
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
