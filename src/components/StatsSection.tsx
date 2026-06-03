import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 3,
    label: "Faster Skill Acquisition",
    sublabel: "vs. linear courses",
    color: "#F26B3A",
    glow: "rgba(242,107,58,0.18)",
    format: (n: number) => `${Math.round(n)}×`,
  },
  {
    value: 87,
    label: "Completion Rate",
    sublabel: "(vs. 15% industry average)",
    color: "#FDBA2D",
    glow: "rgba(253,186,45,0.16)",
    format: (n: number) => `${Math.round(n)}%`,
  },
  {
    value: 500,
    label: "Active Learners Across",
    sublabel: "80 countries",
    color: "#00C2A8",
    glow: "rgba(0,194,168,0.16)",
    format: (n: number) => `${Math.round(n)}K+`,
  },
  {
    value: 4.9,
    label: "Learner Satisfaction Score",
    sublabel: "",
    color: "#A78BFA",
    glow: "rgba(167,139,250,0.16)",
    format: (n: number) => `${n.toFixed(1)}/5`,
  },
] as const;

function useCountUp(end: number, start: boolean, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const duration = 1600;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = end * eased;
      setValue(decimals > 0 ? Number(nextValue.toFixed(decimals)) : nextValue);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [decimals, end, start]);

  return value;
}

function StatItem({
  index,
  start,
  value,
  label,
  sublabel,
  color,
  glow,
  format,
}: {
  index: number;
  start: boolean;
  value: number;
  label: string;
  sublabel: string;
  color: string;
  glow: string;
  format: (n: number) => string;
}) {
  const count = useCountUp(value, start, value % 1 !== 0 ? 1 : 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex min-h-[240px] flex-col items-center justify-center overflow-hidden px-6 py-10 text-center md:min-h-[260px]"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: glow, opacity: 0.75 }}
      />

      <div className="relative z-10 mx-auto max-w-[16rem]">
        <motion.div
          className="text-[56px] font-semibold leading-none tracking-[-0.07em] sm:text-[64px] lg:text-[72px] xl:text-[80px]"
          style={{ color }}
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          {format(count)}
        </motion.div>

        <div className="mt-5 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/86 sm:text-[13px]">
            {label}
          </p>
          {sublabel ? (
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/44 sm:text-xs">
              {sublabel}
            </p>
          ) : null}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-8 right-0 hidden w-px bg-white/10 transition-colors duration-300 group-hover:bg-white/20 lg:block" />
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasEntered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasEntered]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#12061F] py-[100px] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(242,107,58,0.06),transparent_18%),radial-gradient(circle_at_50%_45%,rgba(253,186,45,0.05),transparent_16%),radial-gradient(circle_at_82%_30%,rgba(0,194,168,0.06),transparent_18%),radial-gradient(circle_at_78%_78%,rgba(167,139,250,0.06),transparent_18%)]" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 rounded-[28px] border border-white/6 bg-white/[0.02] backdrop-blur-[2px] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "relative",
                index % 2 === 0 ? "sm:border-r sm:border-white/8" : "",
                index < 2 ? "sm:border-b sm:border-white/8" : "",
                index < stats.length - 1 ? "lg:border-r lg:border-white/8" : "",
                "lg:border-b-0",
              ].join(" ")}
            >
              <StatItem index={index} start={hasEntered} {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
