import type { ReactNode } from "react";
import { motion } from "framer-motion";

function PathNode({
  className,
  tone,
  title,
  subtitle,
  icon,
}: {
  className: string;
  tone: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex items-center gap-3 rounded-2xl border border-dark/6 bg-white/92 px-3 py-2.5 shadow-[0_20px_40px_-32px_rgba(26,26,46,0.26)]">
        <span className={`flex h-9 w-9 items-center justify-center rounded-full ${tone}`}>
          {icon}
        </span>
        <div>
          <p className="text-sm font-semibold text-dark">{title}</p>
          <p className="text-xs text-dark/42">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="pointer-events-none absolute left-8 top-8 h-40 w-40 rounded-full bg-white/55 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-16 h-44 w-44 rounded-full bg-orange/8 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, x: 24, y: 18 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-[28px] border border-white/75 bg-white/70 shadow-[0_34px_90px_-40px_rgba(26,26,46,0.32),0_18px_30px_-24px_rgba(26,26,46,0.14)] backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.62))]" />

          <div className="relative border-b border-dark/7 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6E63]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBE55]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2FCB79]" />
              </div>
              <div className="flex-1 rounded-full border border-dark/7 bg-white/75 px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-dark/32">
                LearnLoop Path
              </div>
            </div>
          </div>

          <div className="relative p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-dark">Personalized learning flow</p>
                <p className="mt-1 max-w-[280px] text-sm leading-6 text-dark/48">
                  One clear path, gently adapted to your pace and what you need next.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-dark/8 bg-white/88 px-3.5 py-2 text-xs font-semibold text-dark/70 shadow-[0_16px_34px_-28px_rgba(26,26,46,0.35)]">
                <span>🔥</span>
                12 Day Streak
              </div>
            </div>

            <div className="relative mt-6 h-[260px] rounded-[24px] border border-dark/6 bg-[#FCFAF7]/88 p-4 sm:p-5">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 260" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M92 62C140 62 162 70 198 98C231 124 259 153 317 153C365 153 396 139 431 106"
                  stroke="rgba(26,26,46,0.16)"
                  strokeWidth="2.5"
                  strokeDasharray="4 10"
                  strokeLinecap="round"
                />
                <path
                  d="M431 106C404 132 380 162 344 185C306 209 246 214 177 205"
                  stroke="rgba(26,26,46,0.16)"
                  strokeWidth="2.5"
                  strokeDasharray="4 10"
                  strokeLinecap="round"
                />
              </svg>

              <PathNode
                className="left-4 top-5 sm:left-6"
                tone="bg-teal/12 text-teal"
                title="Concept locked"
                subtitle="Checkpoint complete"
                icon={
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                }
              />

              <PathNode
                className="right-3 top-[88px] sm:right-5"
                tone="bg-orange/12 text-orange"
                title="Next lesson"
                subtitle="Start adaptive review"
                icon={
                  <svg className="ml-0.5 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m8 5 11 7-11 7V5Z" />
                  </svg>
                }
              />

              <PathNode
                className="bottom-5 left-8 sm:left-10"
                tone="bg-dark/8 text-dark/55"
                title="Review checkpoint"
                subtitle="Ready when you are"
                icon={
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                }
              />
            </div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="mt-4 rounded-[22px] border border-dark/6 bg-white/88 p-4 shadow-[0_18px_34px_-28px_rgba(26,26,46,0.26)]"
            >
              <div className="inline-flex rounded-full bg-orange/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange">
                AI Recommendation
              </div>
              <p className="mt-3 text-[15px] font-semibold leading-6 text-dark">
                Review fractions now — your momentum is strong and retention is peaking.
              </p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-sm leading-6 text-dark/45">One smart nudge, exactly when it matters most.</p>
                <button className="inline-flex items-center justify-center rounded-full border border-dark/10 bg-white px-4 py-2.5 text-sm font-semibold text-dark transition-colors duration-200 hover:border-dark/20 hover:bg-dark/3">
                  Review
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
