"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-cream" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-orange-soft/40 via-teal-soft/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark/5 text-xs font-semibold tracking-wider text-dark/50 border border-dark/5 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Get Started
        </motion.span>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-dark leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Start learning{" "}
          <span className="relative inline-block">
            <span className="text-orange">smarter</span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-3 bg-orange/15 rounded-full -z-10"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </span>{" "}
          today.
        </motion.h2>

        <motion.p
          className="mt-5 text-base sm:text-lg text-dark/50 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join millions of learners who have transformed their education with adaptive AI. Start free, no credit card required.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-dark px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-dark/25 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Get Started Free</span>
            <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-orange to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>

          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/80 backdrop-blur-sm px-8 py-4 text-base font-bold text-dark/70 transition-all duration-300 hover:border-dark/20 hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Talk to Sales
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[
            { label: "14-day free trial", sub: "No credit card" },
            { label: "Cancel anytime", sub: "No commitment" },
            { label: "24/7 support", sub: "Real humans" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-sm font-bold text-dark">{item.label}</p>
              <p className="text-xs text-dark/40">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
