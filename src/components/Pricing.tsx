"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { pricingPlans } from "@/lib/data";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark/5 text-xs font-semibold tracking-wider text-dark/50 border border-dark/5 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            Pricing
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            className="mt-4 text-base sm:text-lg text-dark/50 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Start free, upgrade as you grow. No hidden fees, no surprises.
          </motion.p>
        </div>

        {/* Toggle */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={`text-sm font-medium transition-colors duration-300 ${!yearly ? "text-dark" : "text-dark/40"}`}>
            Monthly
          </span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative h-7 w-12 rounded-full transition-colors duration-300 ${
              yearly ? "bg-orange" : "bg-dark/20"
            }`}
          >
            <motion.div
              className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm"
              animate={{ x: yearly ? 26 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium transition-colors duration-300 ${yearly ? "text-dark" : "text-dark/40"}`}>
            Yearly
            <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full bg-orange-soft text-[10px] font-bold text-orange">
              -20%
            </span>
          </span>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-dark text-white border-dark shadow-2xl shadow-dark/20"
                  : "bg-white/60 backdrop-blur-sm text-dark border-dark/5 hover:shadow-xl hover:border-orange-200/50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange to-orange-600 text-[11px] font-bold text-white shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="p-6 sm:p-8">
                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? "text-white" : "text-dark"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-white/50" : "text-dark/40"}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl sm:text-5xl font-bold tracking-tight ${plan.popular ? "text-white" : "text-dark"}`}>
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className={`text-sm font-medium ${plan.popular ? "text-white/40" : "text-dark/30"}`}>
                    /{yearly ? "year" : "month"}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-orange" : "text-teal"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className={`text-sm ${plan.popular ? "text-white/70" : "text-dark/50"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={`block w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-dark hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5"
                      : "bg-dark text-white hover:shadow-xl hover:shadow-dark/20 hover:-translate-y-0.5"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
