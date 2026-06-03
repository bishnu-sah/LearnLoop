import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    label: "Data Structures",
    value: 92,
    color: "from-emerald-400 to-emerald-500",
  },
  {
    label: "Algorithms",
    value: 74,
    color: "from-amber-400 to-amber-500",
  },
  {
    label: "System Design",
    value: 45,
    color: "from-orange-400 to-orange-500",
  },
] as const;

export default function FeatureShowcase() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream pt-10 pb-[120px]">
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -4, boxShadow: "0 34px 80px -42px rgba(26,26,46,0.22)" }}
          className="grid min-h-[320px] items-center gap-10 rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_26px_70px_-46px_rgba(26,26,46,0.18)] transition-shadow duration-300 md:p-10 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:gap-12 lg:p-12"
        >
          <div className="max-w-[480px]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F2EB] text-[30px] shadow-[0_14px_28px_-24px_rgba(26,26,46,0.16)] ring-1 ring-black/4">
              📊
            </div>

            <h2 className="mt-6 max-w-[12ch] text-[34px] font-bold leading-[1.1] tracking-[-0.04em] text-dark sm:text-[38px] lg:text-[42px]">
              Progress Report with Knowledge Gap Highlights
            </h2>

            <p className="mt-6 max-w-[460px] text-base leading-8 text-dark/58 sm:text-lg">
              Weekly progress reports show what you&apos;ve mastered, where your gaps are, and what the adaptive engine has queued to close them.
            </p>
            <p className="mt-4 max-w-[470px] text-base leading-8 text-dark/58 sm:text-lg">
              Clear, visual, and actionable — not a spreadsheet of completion percentages.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 44 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="rounded-[24px] border border-black/5 bg-[#F5EEE6] p-5 shadow-[0_20px_50px_-36px_rgba(26,26,46,0.14)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-dark">Mastery Analytics</h3>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/80">
                On Track
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {metrics.map((metric, index) => (
                <div key={metric.label}>
                  <div className="mb-2.5 flex items-center justify-between gap-3 text-sm font-medium text-dark/70">
                    <span>{metric.label}</span>
                    <span className="font-semibold text-dark">{metric.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/80 ring-1 ring-black/4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${metric.value}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.14, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.78, ease: "easeOut" }}
              className="mt-6 rounded-[20px] border border-violet-200/60 bg-[#F1ECFF] p-4 sm:p-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-white/75 text-violet-600 shadow-[0_12px_24px_-20px_rgba(124,58,237,0.28)] ring-1 ring-violet-200/50">
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
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-500">
                    AI Insight
                  </p>
                  <p className="mt-2 text-sm leading-7 text-dark/62 sm:text-[15px]">
                    You are doing great in Data Structures, but spending 15 mins reviewing System Design principles will boost your overall score.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
