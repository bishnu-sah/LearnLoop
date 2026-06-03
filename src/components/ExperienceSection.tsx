import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

function DeviceShell({
  title,
  index,
  visible,
  children,
}: {
  title: string;
  index: number;
  visible: boolean;
  children: ReactNode;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 170, damping: 20, mass: 0.28 });
  const springY = useSpring(my, { stiffness: 170, damping: 20, mass: 0.28 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
    const py = ((event.clientY - bounds.top) / bounds.height - 0.5) * 16;

    mx.set(Math.max(-8, Math.min(8, px)));
    my.set(Math.max(-8, Math.min(8, py)));
  };

  const resetParallax = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, delay: 0.55 + index * 0.15, ease: "easeOut" }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "6px 8px 0px rgba(25,25,35,0.9)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetParallax}
      className="h-[720px] w-[320px] overflow-hidden rounded-[32px] border-[1.5px] border-[rgba(25,25,35,0.75)] bg-white shadow-[4px_4px_0px_rgba(25,25,35,0.9)]"
      style={{ willChange: "transform, opacity" }}
    >
      <motion.div className="h-full p-4" style={{ x: springX, y: springY, willChange: "transform" }}>
        <div className="flex h-full flex-col rounded-[24px] bg-[#F5F0EA] px-5 py-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#161233]/42">
            {title}
          </p>
          <div className="mt-4 flex-1">{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function LearningJourneyScreen() {
  return (
    <div className="flex h-full flex-col">
      <div>
        <p className="text-[22px] font-semibold tracking-[-0.03em] text-[#161233]">Learning Journey</p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#161233]/34">
          Adaptive Path
        </p>
      </div>

      <div className="relative mt-6 flex-1 pl-8">
        <div className="absolute left-[11px] top-2 h-[calc(100%-18px)] border-l border-dashed border-[#161233]/14" />
        <div className="space-y-5">
          {[
            { title: "Foundations", label: "Completed", dot: "bg-emerald-500" },
            { title: "Guided Practice", label: "In Progress", dot: "bg-orange" },
            { title: "Mastery Check", label: "Up Next", dot: "bg-[#161233]/16" },
            { title: "Review Loop", label: "Queued", dot: "bg-[#161233]/10" },
          ].map((item, index) => (
            <div key={item.title} className="relative">
              <span className={`absolute -left-8 top-3 h-[18px] w-[18px] rounded-full ${item.dot} ${index < 2 ? "shadow-[0_0_0_4px_rgba(255,255,255,0.82)]" : ""}`} />
              <div className="rounded-[20px] bg-white px-4 py-3.5 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                <p className="text-sm font-semibold text-[#161233]">{item.title}</p>
                <p className="mt-1 text-xs text-[#161233]/42">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-[22px] bg-[#161233] px-4 py-4 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/42">Streak Indicator</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-semibold">12 days learning</p>
          <span className="text-xl">🔥</span>
        </div>
      </div>
    </div>
  );
}

function InteractiveLessonScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="rounded-[22px] bg-white p-3 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
        <div className="aspect-[4/3] rounded-[18px] bg-[#E9DED3] p-4">
          <div className="flex h-full flex-col justify-between rounded-[16px] bg-[#F2E9E0] p-4">
            <span className="inline-flex w-fit rounded-full bg-white/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#161233]/38">
              Video Lesson
            </span>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#161233] text-white">
              <svg className="ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="m8 5 11 7-11 7V5Z" />
              </svg>
            </div>
            <p className="max-w-[12ch] text-base font-semibold leading-6 text-[#161233]">
              Interactive lesson with guided pacing.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-[22px] bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#161233]/36">Learning Card</p>
        <p className="mt-3 text-sm leading-7 text-[#161233]/56">
          A focused checkpoint appears between concepts so you stay engaged and ready for the next idea.
        </p>
        <button className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-orange px-4 py-3.5 text-sm font-semibold text-white">
          Continue
        </button>
      </div>
    </div>
  );
}

function AdaptiveQuizScreen() {
  return (
    <div className="flex h-full flex-col">
      <div>
        <p className="text-[22px] font-semibold tracking-[-0.03em] text-[#161233]">Adaptive Quiz</p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#161233]/34">
          Question 4 of 10
        </p>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/85">
        <div className="h-full w-[40%] rounded-full bg-teal" />
      </div>

      <div className="mt-6 rounded-[22px] bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-medium leading-6 text-[#161233]">
          Which concept helps keep operations fast when data grows unpredictably?
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {[
          { label: "Recursion", selected: false },
          { label: "Hash Table", selected: true },
          { label: "Stack", selected: false },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex items-center justify-between rounded-[18px] px-4 py-3.5 shadow-[0_10px_24px_rgba(0,0,0,0.04)] ${
              item.selected ? "bg-emerald-50" : "bg-white"
            }`}
          >
            <span className={`text-sm font-medium ${item.selected ? "text-emerald-700" : "text-[#161233]/62"}`}>
              {item.label}
            </span>
            {item.selected ? (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">✓</span>
            ) : (
              <span className="h-5 w-5 rounded-full border border-[#161233]/10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MasteryAnalyticsScreen() {
  return (
    <div className="flex h-full flex-col">
      <div>
        <p className="text-[22px] font-semibold tracking-[-0.03em] text-[#161233]">Mastery Analytics</p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#161233]/34">
          Weekly Mastery Score
        </p>
      </div>

      <div className="mt-6 rounded-[22px] bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-5 gap-2.5">
          {[
            "bg-emerald-200",
            "bg-emerald-300",
            "bg-amber-200",
            "bg-orange-200",
            "bg-violet-200",
            "bg-emerald-300",
            "bg-emerald-200",
            "bg-amber-200",
            "bg-amber-300",
            "bg-violet-200",
            "bg-emerald-200",
            "bg-orange-200",
            "bg-orange-300",
            "bg-violet-200",
            "bg-violet-300",
          ].map((tone, index) => (
            <div key={index} className={`aspect-square rounded-md ${tone}`} />
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-[22px] bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#161233]/36">Knowledge Gaps</p>
        <div className="mt-4 space-y-3">
          {[
            { label: "System Design", dot: "bg-orange" },
            { label: "Graphs", dot: "bg-amber-400" },
            { label: "Async Patterns", dot: "bg-violet-400" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`} />
              <span className="text-sm text-[#161233]/62">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#F7F2EB] py-[80px]">
      <div
        className="pointer-events-none absolute -left-8 -top-8 h-[280px] w-[280px] rounded-full blur-[120px]"
        style={{ backgroundColor: "rgba(253, 224, 71, 0.08)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 h-[300px] w-[300px] rounded-full blur-[120px]"
        style={{ backgroundColor: "rgba(242, 107, 58, 0.08)" }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex h-9 items-center rounded-full bg-[#161233] px-5 text-[12px] font-semibold uppercase tracking-[2px] text-white"
          >
            The Experience
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-[900px] font-display text-[52px] font-bold leading-[0.9] tracking-[-0.06em] text-[#161233] sm:text-[64px] lg:text-[88px]"
          >
            Four screens.
            <br />
            <span className="text-orange">Every learner</span> covered.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
            className="mx-auto mt-8 flex h-[110px] w-full max-w-[720px] items-center justify-center rounded-[24px] border-2 border-[#2A2A2A] bg-white px-8 text-center shadow-[6px_6px_0px_#2A2A2A]"
          >
            <p className="text-[20px] leading-8 text-[#6B7280]">
              Designed to work beautifully on tablet and desktop — because the best learning happens focused,
              full-screen, not in a browser tab.
            </p>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-center gap-6">
          <DeviceShell title="Learning Journey" index={0} visible={inView}>
            <LearningJourneyScreen />
          </DeviceShell>
          <DeviceShell title="Interactive Lesson" index={1} visible={inView}>
            <InteractiveLessonScreen />
          </DeviceShell>
          <DeviceShell title="Adaptive Quiz" index={2} visible={inView}>
            <AdaptiveQuizScreen />
          </DeviceShell>
          <DeviceShell title="Mastery Analytics" index={3} visible={inView}>
            <MasteryAnalyticsScreen />
          </DeviceShell>
        </div>
      </div>
    </section>
  );
}
