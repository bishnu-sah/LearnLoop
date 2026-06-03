import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AdaptivePathDemoSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="flex h-[700px] w-full items-center justify-center bg-[#F7F4EE] px-5 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[450px] w-full max-w-[700px] overflow-hidden rounded-[32px] border border-[#F0ECE5] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
      >
        <div className="flex h-[52px] items-center px-6">
          <div className="flex items-center gap-2.5">
            <span className="h-3 w-3 rounded-full bg-[#F26B3A]" />
            <span className="h-3 w-3 rounded-full bg-[#FFB52E]" />
            <span className="h-3 w-3 rounded-full bg-[#47C97E]" />
          </div>
          <div className="absolute inset-x-0 text-center text-[12px] font-medium uppercase tracking-[6px] text-[#B6B3BA]">
            <div className="pointer-events-none flex h-[52px] items-center justify-center">LEARNLOOP PATH</div>
          </div>
        </div>

        <div className="h-px w-full bg-[#F0ECE5]" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="absolute right-8 top-[76px] inline-flex items-center rounded-full border border-[#F5E5D5] bg-[#FFF7F0] px-4 py-2 text-sm font-medium text-[#8A7668]"
        >
          🔥 12 Day Streak
        </motion.div>

        <div className="relative h-[326px] px-12 pt-14">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 326" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M180 110C260 110 310 150 360 175C420 205 465 210 510 188"
              stroke="#18A999"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="2 14"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : undefined}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            />
          </svg>

          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[108px] top-[78px] flex h-12 w-12 items-center justify-center rounded-full bg-[#47C97E]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <svg className="h-4 w-4 text-[#47C97E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[142px] top-[145px] flex h-12 w-12 items-center justify-center rounded-full bg-[#F26B3A]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <svg className="ml-0.5 h-4 w-4 text-[#F26B3A]" viewBox="0 0 24 24" fill="currentColor">
                <path d="m8 5 11 7-11 7V5Z" />
              </svg>
            </span>
          </motion.div>

          <div className="absolute right-[118px] top-[242px] flex h-10 w-10 items-center justify-center rounded-full bg-[#161233]/8 opacity-45">
            <svg className="h-4 w-4 text-[#161233]/45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 1 1 8 0v3" />
            </svg>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="absolute bottom-7 left-1/2 flex h-[70px] w-[500px] -translate-x-1/2 items-center justify-between rounded-[18px] border border-[#ECE7E0] bg-white px-4 shadow-[0_8px_20px_rgba(0,0,0,0.05)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#F2ECFF] text-[#8E6AD8]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4" />
                <path d="m16.24 7.76 2.83-2.83" />
                <path d="M18 12h4" />
                <path d="m16.24 16.24 2.83 2.83" />
                <path d="M12 18v4" />
                <path d="m4.93 19.07 2.83-2.83" />
                <path d="M2 12h4" />
                <path d="m4.93 4.93 2.83 2.83" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#161233]">AI Recommendation</p>
              <p className="text-sm text-[#161233]/56">Review &quot;Advanced Arrays&quot; before moving on.</p>
            </div>
          </div>

          <button className="inline-flex items-center justify-center rounded-full bg-[#F4EEE6] px-5 py-2.5 text-sm font-semibold text-[#161233]/76">
            Review
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
