"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "@/lib/data";

function FeatureCard({
  title,
  description,
  icon,
  gradient,
  gradientBg,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  gradientBg: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-dark/5 p-6 sm:p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Gradient hover background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        {/* Icon */}
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} bg-opacity-10 text-2xl shadow-sm mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <span className="drop-shadow-sm">{icon}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-dark mb-3">{title}</h3>
        <p className="text-sm sm:text-base text-dark/50 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal-soft/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark/5 text-xs font-semibold tracking-wider text-dark/50 border border-dark/5 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            Features
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to accelerate
          </motion.h2>
          <motion.p
            className="mt-4 text-base sm:text-lg text-dark/50 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Powerful tools designed to adapt to your unique learning style and accelerate mastery.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
