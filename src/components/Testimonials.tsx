"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-soft/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark/5 text-xs font-semibold tracking-wider text-dark/50 border border-dark/5 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            Stories
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Loved by learners worldwide
          </motion.h2>
          <motion.p
            className="mt-4 text-base sm:text-lg text-dark/50 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See how Learnova is transforming the way people learn — from students to professionals.
          </motion.p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.id} {...t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  role,
  avatar,
  avatarBg,
  content,
  rating,
  index,
}: {
  name: string;
  role: string;
  avatar: string;
  avatarBg: string;
  content: string;
  rating: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group relative rounded-2xl bg-white/60 backdrop-blur-sm border border-dark/5 p-6 sm:p-8 transition-all duration-500 hover:shadow-xl hover:border-orange-200/50 hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Quote mark */}
      <div className="absolute top-6 right-6 text-4xl text-dark/5 font-serif leading-none select-none">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-sm sm:text-base text-dark/60 leading-relaxed mb-6 line-clamp-4">
        {content}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${avatarBg} text-xs font-bold text-white shadow-sm`}>
          {avatar}
        </div>
        <div>
          <p className="text-sm font-bold text-dark">{name}</p>
          <p className="text-xs text-dark/40">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
