"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { productTabs } from "@/lib/data";

const tabContent = {
  dashboard: (
    <div className="rounded-2xl bg-white shadow-2xl shadow-dark/10 border border-dark/5 overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-dark/5 bg-dark/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex-1 text-center text-[10px] text-dark/30 font-medium">Dashboard Preview</div>
      </div>
      <div className="p-5 sm:p-8">
        {/* Dashboard mockup */}
        <div className="space-y-6">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Courses", value: "12", change: "+3", color: "from-orange-400 to-amber-500" },
              { label: "Hours Learned", value: "247", change: "+18", color: "from-teal-400 to-emerald-500" },
              { label: "Skills Mastered", value: "8", change: "+2", color: "from-violet-400 to-purple-500" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-dark/[0.02] border border-dark/5 p-4">
                <p className="text-[11px] font-medium text-dark/40 uppercase tracking-wider">{stat.label}</p>
                <div className="flex items-baseline gap-1.5 mt-1.5">
                  <p className="text-2xl sm:text-3xl font-bold text-dark">{stat.value}</p>
                  <span className={`text-xs font-semibold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Learning activity chart */}
          <div className="rounded-xl bg-dark/[0.02] border border-dark/5 p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold text-dark">Weekly Activity</p>
              <span className="text-[10px] text-dark/30 font-medium">Last 7 days</span>
            </div>
            <div className="flex items-end gap-2 h-24">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-lg bg-gradient-to-t from-orange/40 to-orange/20 relative group"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark text-white text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {h} min
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <p key={day} className="flex-1 text-center text-[10px] text-dark/30 font-medium">{day}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  learning: (
    <div className="rounded-2xl bg-white shadow-2xl shadow-dark/10 border border-dark/5 overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-dark/5 bg-dark/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex-1 text-center text-[10px] text-dark/30 font-medium">Learning Path Preview</div>
      </div>
      <div className="p-5 sm:p-8">
        <div className="space-y-4">
          {/* Path timeline */}
          {[
            { title: "Introduction to Data Structures", status: "Completed", progress: 100, color: "bg-teal" },
            { title: "Arrays & Linked Lists", status: "Completed", progress: 100, color: "bg-teal" },
            { title: "Stacks & Queues", status: "In Progress", progress: 65, color: "bg-orange" },
            { title: "Trees & Graphs", status: "Up Next", progress: 0, color: "bg-dark/20" },
            { title: "Sorting & Searching", status: "Locked", progress: 0, color: "bg-dark/10" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="flex items-center gap-4 p-3 rounded-xl bg-dark/[0.02] border border-dark/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full ${item.progress === 100 ? "bg-teal/20" : item.progress > 0 ? "bg-orange/20" : "bg-dark/5"} flex items-center justify-center`}>
                {item.progress === 100 ? (
                  <svg className="w-4 h-4 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><path d="M20 6L9 17l-5-5" /></svg>
                ) : item.progress > 0 ? (
                  <span className="text-xs font-bold text-orange">{item.progress}%</span>
                ) : (
                  <svg className="w-4 h-4 text-dark/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2v20M2 12h20" /></svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-dark truncate">{item.title}</p>
                <p className="text-[11px] text-dark/40">{item.status}</p>
              </div>
              <div className="w-20">
                <div className="h-1.5 bg-dark/5 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${item.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  ),
  analytics: (
    <div className="rounded-2xl bg-white shadow-2xl shadow-dark/10 border border-dark/5 overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-dark/5 bg-dark/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex-1 text-center text-[10px] text-dark/30 font-medium">Analytics Preview</div>
      </div>
      <div className="p-5 sm:p-8">
        <div className="grid grid-cols-2 gap-4">
          {/* Retention rate */}
          <div className="col-span-2 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-5">
            <p className="text-xs font-bold text-dark/50 uppercase tracking-wider mb-2">Knowledge Retention</p>
            <div className="flex items-end gap-6">
              <p className="text-4xl font-bold text-dark">92<span className="text-lg text-orange font-semibold">%</span></p>
              <div className="flex-1 h-16 flex items-end gap-1">
                {[80, 85, 78, 88, 82, 90, 92].map((v, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-orange to-amber-400"
                    initial={{ height: 0 }}
                    animate={{ height: `${v * 0.6}%` }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Strength meter */}
          <div className="rounded-xl bg-dark/[0.02] border border-dark/5 p-4">
            <p className="text-[10px] font-bold text-dark/40 uppercase tracking-wider mb-3">Skill Strength</p>
            <div className="space-y-2.5">
              {[
                { label: "Problem Solving", value: 85 },
                { label: "Memory Recall", value: 72 },
                { label: "Speed", value: 60 },
              ].map((skill) => (
                <div key={skill.label} className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-dark/50">{skill.label}</span>
                    <span className="text-dark/30 font-medium">{skill.value}%</span>
                  </div>
                  <div className="h-1.5 bg-dark/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-teal to-emerald-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning velocity */}
          <div className="rounded-xl bg-dark/[0.02] border border-dark/5 p-4">
            <p className="text-[10px] font-bold text-dark/40 uppercase tracking-wider mb-3">Velocity</p>
            <p className="text-2xl font-bold text-dark">3.2<span className="text-xs font-medium text-teal ml-1">x</span></p>
            <p className="text-[10px] text-dark/30 mt-1">vs. traditional learning</p>
            <div className="mt-3 h-1.5 bg-dark/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-teal to-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="product-showcase" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark/5 text-xs font-semibold tracking-wider text-dark/50 border border-dark/5 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            Product Showcase
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Beautifully crafted for focus
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-2xl bg-dark/[0.03] border border-dark/5 p-1.5">
            {productTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-white shadow-lg shadow-orange-500/20"
                    : "text-dark/50 hover:text-dark/80"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange to-orange-600"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {tabContent[activeTab as keyof typeof tabContent]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
