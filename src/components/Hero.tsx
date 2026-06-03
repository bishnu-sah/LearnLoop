"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import HeroMockup from "./HeroMockup";

function Counter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(value / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-soft/40 to-cream rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-soft/30 to-cream rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8 max-w-[900px]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/5 text-xs font-semibold tracking-[0.15em] uppercase text-dark/60 border border-dark/5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                Adaptive Learning &bull; EdTech &bull; Web + Tablet
              </span>
            </motion.div>

            {/* Heading */}
            
<motion.h1
  className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold tracking-[-0.04em] leading-[0.95] text-dark max-w-[900px]"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  Learning that{" "}
  <span className="relative inline-block">
    <span className="text-orange">fits</span>
  </span>{" "}
  how you think.
</motion.h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-dark/60 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover personalized AI-powered learning paths that adapt to your unique cognitive style.
              Track your skills, get smart recommendations, and achieve learning outcomes{" "}
              <span className="text-dark font-semibold">3x faster</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-dark px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-dark/25 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Start Learning Free</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-orange to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/80 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-dark/80 transition-all duration-300 hover:border-dark/20 hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
              >
                See how it adapts
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-dark/5 p-5 pr-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-200 hover:-translate-y-0.5">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className="text-3xl sm:text-4xl font-bold text-dark">
                    <Counter value={87} suffix="%" />
                  </p>
                  <p className="text-sm text-dark/50 mt-1 font-medium">Completion Rate</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-dark/5 p-5 pr-8 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-200 hover:-translate-y-0.5">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className="text-3xl sm:text-4xl font-bold text-dark">
                    3x <span className="text-lg font-medium">Faster</span>
                  </p>
                  <p className="text-sm text-dark/50 mt-1 font-medium">Skill Acquisition</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Product Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HeroMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
