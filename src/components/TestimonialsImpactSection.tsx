import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "I finished a Python certification in 6 weeks that I'd been stuck on for 2 years. The skill map changed everything.",
    name: "Priya K.",
    role: "Software Engineer",
    avatar: "PK",
    avatarBg: "bg-[#FFD8C9]",
  },
  {
    quote:
      "Our L&D completion rates went from 18% after switching to LearnLoop. It's the only platform our employees actually use voluntarily.",
    name: "Marcus D.",
    role: "L&D Director",
    avatar: "MD",
    avatarBg: "bg-[#FFE8B0]",
  },
  {
    quote:
      "The instant feedback on quizzes is addictive. I've had a 40-day streak and I've never been this consistent with learning.",
    name: "Yui T.",
    role: "Product Manager",
    avatar: "YT",
    avatarBg: "bg-[#D9F3EE]",
  },
] as const;

const impactStats = [
  {
    value: 87,
    color: "#FFB52E",
    format: (n: number) => `${Math.round(n)}%`,
    lines: ["COMPLETION RATE", "(VS. 15% INDUSTRY AVERAGE)"],
  },
  {
    value: 3,
    color: "#F26B3A",
    format: (n: number) => `${Math.round(n)}×`,
    lines: ["FASTER SKILL ACQUISITION", "VS.", "LINEAR COURSES"],
  },
  {
    value: 500000,
    color: "#00C2A8",
    format: (n: number) => `${Math.round(n / 1000)}K+`,
    lines: ["ACTIVE LEARNERS", "ACROSS", "80 COUNTRIES"],
  },
  {
    value: 42,
    color: "#9B7BFF",
    format: (n: number) => `${Math.round(n)} days`,
    lines: ["AVERAGE STREAK BEFORE", "FIRST WIN MOMENT"],
  },
] as const;

function useCountUp(target: number, start: boolean, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, start, target]);

  return value;
}

function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  avatarBg,
  index,
  visible,
}: {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  avatarBg: string;
  index: number;
  visible: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, delay: 0.25 + index * 0.15, ease: "easeOut" }}
      whileHover={{
        y: -12,
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="flex h-[300px] w-[280px] flex-col justify-between overflow-hidden rounded-[32px] bg-[#F8F3EB] p-7 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <p
          className="text-center text-[16px] font-medium leading-[1.6] text-[#161233]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 8,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          “{quote}”
        </p>
      </div>

      <div className="mt-5 flex h-16 items-center gap-3">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-[#1B1835] ${avatarBg}`}>
          {avatar}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#1B1835]">{name}</p>
          <p className="mt-0.5 truncate text-sm text-[#1B1835]/55">{role}</p>
        </div>
      </div>
    </motion.article>
  );
}

function ImpactStat({
  value,
  color,
  format,
  lines,
  start,
  index,
}: {
  value: number;
  color: string;
  format: (n: number) => string;
  lines: readonly string[];
  start: boolean;
  index: number;
}) {
  const count = useCountUp(value, start, 2000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.08, ease: "easeOut" }}
      className="flex h-full flex-col items-center justify-center px-4 text-center"
    >
      <div className="text-[42px] font-bold leading-none tracking-[-0.05em]" style={{ color }}>
        {format(count)}
      </div>
      <div className="mt-4 space-y-1">
        {lines.map((line) => (
          <p key={line} className="text-[11px] font-semibold uppercase leading-5 tracking-[0.22em] text-white/88">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default function TestimonialsImpactSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <section ref={ref} className="w-full overflow-hidden bg-cream py-0">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
 <div className="w-full bg-[#F26B3A]">
  <div className="flex min-h-[620px] w-full items-center justify-between px-[80px]">

    {/* Left Content */}
    <div className="w-[30%] flex flex-col justify-center">
      <h2 className="text-[78px] font-bold leading-[0.95] text-white">
        Here's
        <br />
        <span className="text-[#FFB52E]">
          What they say
        </span>
        <br />
        about learning
        <br />
        with LearnLoop.
      </h2>

      <p className="mt-12 max-w-[420px] text-[20px] leading-[1.6] text-white">
        Join thousands of professionals who have accelerated their careers with our platform.
      </p>
    </div>

    {/* Testimonial Cards */}
    <div className="flex w-[70%] justify-center gap-10">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.name}
          {...testimonial}
          index={index}
          visible={inView}
        />
      ))}
    </div>

  </div>
</div>

        <div className="w-full bg-[#120A2F]">
          <div className="mx-auto h-[160px] w-full max-w-[1400px] px-10">
            <div className="grid h-full grid-cols-4 items-center text-center">
              {impactStats.map((stat, index) => (
                <ImpactStat key={stat.lines[0]} {...stat} start={inView} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
