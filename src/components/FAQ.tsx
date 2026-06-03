"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";

function AccordionItem({
  question,
  answer,
  index,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className={`group rounded-2xl border transition-all duration-300 cursor-pointer ${
        open
          ? "bg-white border-orange-200/50 shadow-lg shadow-orange-500/5"
          : "bg-white/40 border-dark/5 hover:border-dark/10 hover:bg-white/60"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className={`text-base sm:text-lg font-bold pr-4 transition-colors duration-300 ${
          open ? "text-dark" : "text-dark/70 group-hover:text-dark"
        }`}>
          {question}
        </span>
        <motion.div
          className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
            open ? "bg-orange text-white" : "bg-dark/5 text-dark/40"
          }`}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-dark/50 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark/5 text-xs font-semibold tracking-wider text-dark/50 border border-dark/5 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            FAQ
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Got questions? We&apos;ve got answers
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              {...faq}
              index={index}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
