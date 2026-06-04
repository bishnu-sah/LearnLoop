"use client";

import { motion } from "framer-motion";

export default function HeroMockup() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto">
      {/* Background Glow */}
      <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-orange-100/40 to-teal-100/20 blur-3xl" />

      {/* Main Browser Window */}
      <motion.div
        className="relative overflow-hidden rounded-[32px] border border-[#efe8df] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#f2ece4] px-6 py-5">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="text-sm font-medium text-[#9a8f84]">
            🔥 12 Day Streak
          </div>
        </div>

        {/* Content Area */}
        <div className="relative h-[360px] bg-[#fcfaf7]">
          {/* Dotted Path */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 600 360"
          >
            <path
              d="M150 120 C220 170,260 220,320 260"
              fill="none"
              stroke="#00A89D"
              strokeWidth="4"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          {/* Check Circle */}
          <motion.div
            className="absolute left-[130px] top-[90px]"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#00A89D] bg-white shadow-lg">
              <svg
                className="h-7 w-7 text-[#00A89D]"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M5 12L10 17L20 7" />
              </svg>
            </div>
          </motion.div>

          {/* Play Circle */}
          <motion.div
            className="absolute left-[280px] top-[180px]"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#F26B3A] bg-white shadow-lg">
              <svg
                className="h-6 w-6 text-[#F26B3A]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </div>
          </motion.div>

          {/* Lock Circle */}
          <div className="absolute left-[400px] top-[230px] opacity-30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d9d1c7]">
              🔒
            </div>
          </div>

          {/* AI Recommendation Card */}
          <motion.div
            className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-[#ece5dc] bg-white px-5 py-4 shadow-xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4EDFF] text-xl">
                ✨
              </div>

              <div>
                <h4 className="font-semibold text-[#221B35]">
                  AI Recommendation
                </h4>

                <p className="text-sm text-[#7f7468]">
                  Review "Advanced Arrays" before moving on.
                </p>
              </div>
            </div>

            <button className="rounded-full bg-[#F4EEE7] px-6 py-3 text-sm font-medium text-[#3a3128] transition hover:bg-[#ebe2d7]">
              Review
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}