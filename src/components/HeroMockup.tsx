"use client";

import { motion } from "framer-motion";

export default function HeroMockup() {
  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      {/* Glowing background */}
      <div className="absolute -inset-8 bg-gradient-to-br from-orange-200/20 via-teal-200/10 to-transparent rounded-[32px] blur-2xl" />

      {/* Main mockup card */}
      <motion.div
        className="relative rounded-[24px] bg-white shadow-2xl shadow-dark/10 border border-dark/5 overflow-hidden backdrop-blur-sm"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Browser top bar */}
        <div className="flex items-center gap-2 px-5 py-4 border-b border-dark/5 bg-dark/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-amber-400/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-dark/5 text-[11px] text-dark/40 font-medium">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              app.learnova.io/dashboard
            </div>
          </div>
          <div className="w-6" />
        </div>

        {/* Mockup Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Progress flow section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-dark">Today&apos;s Learning Flow</h3>
              <span className="text-xs text-orange font-semibold bg-orange-soft/60 px-2.5 py-1 rounded-full">In Progress</span>
            </div>
            <div className="space-y-2">
              {[
                { label: "Data Structures", progress: 85, color: "bg-orange" },
                { label: "Algorithms", progress: 60, color: "bg-teal" },
                { label: "System Design", progress: 30, color: "bg-violet-500" },
              ].map((item, i) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-dark/60 font-medium">{item.label}</span>
                    <span className="text-dark/40">{item.progress}%</span>
                  </div>
                  <div className="h-2 bg-dark/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendation Card */}
          <motion.div
            className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-4 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200/20 rounded-full blur-xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange text-[10px] font-bold text-white">AI</span>
                <span className="text-xs font-bold text-dark">Smart Recommendation</span>
              </div>
              <p className="text-xs text-dark/60 leading-relaxed">
                Based on your recent progress, we recommend focusing on <span className="text-orange font-semibold">Binary Search Trees</span> next.
              </p>
              <button className="mt-3 text-xs font-semibold text-white bg-orange px-3.5 py-1.5 rounded-lg hover:bg-orange-600 transition-colors">
                Start Module
              </button>
            </div>
          </motion.div>

          {/* Bottom row: Review + Streak */}
          <div className="flex items-center justify-between gap-4">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dark/5 bg-dark/[0.02] text-xs font-semibold text-dark/60 hover:bg-dark/5 hover:text-dark transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Review Session
            </button>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-100/60">
              <span className="text-lg">🔥</span>
              <div>
                <p className="text-xs font-bold text-dark">12-Day Streak</p>
                <p className="text-[10px] text-dark/40">Keep it going!</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      {/* Floating icon 1 - top right */}
      <motion.div
        className="absolute -top-6 -right-6 w-14 h-14 rounded-2xl bg-white shadow-lg border border-dark/5 flex items-center justify-center text-xl"
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        📚
      </motion.div>

      {/* Floating icon 2 - bottom left */}
      <motion.div
        className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-white shadow-lg border border-dark/5 flex items-center justify-center text-lg"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        🎯
      </motion.div>

      {/* Floating icon 3 - top left */}
      <motion.div
        className="absolute -top-3 left-8 w-10 h-10 rounded-xl bg-white shadow-md border border-dark/5 flex items-center justify-center text-base"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      >
        ⚡
      </motion.div>

      {/* Dashed path connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        <motion.path
          d="M 80,0 Q 120,30 160,20"
          fill="none"
          stroke="#F26B3A"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 0,180 Q 40,210 80,190"
          fill="none"
          stroke="#0EA5A4"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </div>
  );
}
