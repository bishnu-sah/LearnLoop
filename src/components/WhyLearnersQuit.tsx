import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const problems = [
  {
    icon: "🗺️",
    accent: "#F26B3A",
    title: "No map, no direction",
    description:
      "Most courses give you a module list, not a skill map. You finish a lesson and have no idea what to do next or how far you are from mastery.",
  },
  {
    icon: "😔",
    accent: "#FDBA2D",
    title: "Motivation collapses between modules",
    description:
      "The gap between completing one lesson and starting the next is where most learner drop-off happens.",
  },
  {
    icon: "📏",
    accent: "#00C2A8",
    title: "One size fits nobody",
    description:
      "Everyone learns differently, but traditional courses force all learners through the same path and pace.",
  },
] as const;

const revealDelays = [0.1, 0.3, 0.5];

function ProblemCard({
  problem,
  index,
}: {
  problem: (typeof problems)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [isHovered, setIsHovered] = useState(false);

  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  const springX = useSpring(motionX, { stiffness: 160, damping: 20, mass: 0.25 });
  const springY = useSpring(motionY, { stiffness: 160, damping: 20, mass: 0.25 });

  const delay = revealDelays[index] ?? 0.1 + index * 0.2;

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const py = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;

    motionX.set(Math.max(-5, Math.min(5, px)));
    motionY.set(Math.max(-5, Math.min(5, py)));
  };

  const resetParallax = () => {
    motionX.set(0);
    motionY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: 60, scale: 0.95, filter: "blur(4px)" }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
              boxShadow: "0 22px 60px -38px rgba(26,26,46,0.22)",
            }
          : undefined
      }
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 28px 72px -36px rgba(26,26,46,0.30)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovered(false);
        resetParallax();
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-[28px] border border-dark/6 bg-white/94 px-6 py-6 shadow-[0_22px_60px_-38px_rgba(26,26,46,0.22)] transition-all duration-300 sm:px-7 sm:py-7"
      style={{ willChange: "transform, opacity, filter" }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{ background: `radial-gradient(circle at left center, ${problem.accent}12, transparent 38%)` }}
        animate={
          inView
            ? { opacity: [0, 0.55, 0.3] }
            : { opacity: 0 }
        }
        transition={{ duration: 1.05, delay: delay + 0.04, ease: "easeOut" }}
      />

      <motion.div
        className="pointer-events-none absolute inset-y-5 left-0 w-1 rounded-r-full"
        style={{ backgroundColor: problem.accent, transformOrigin: "top" }}
        initial={{ scaleY: 0, opacity: 0.85 }}
        animate={
          inView
            ? {
                scaleY: 1,
                opacity: 1,
                boxShadow: isHovered ? `0 0 16px ${problem.accent}66` : `0 0 0 ${problem.accent}00`,
              }
            : undefined
        }
        transition={{
          scaleY: { duration: 1, delay: delay + 0.02, ease: "easeOut" },
          opacity: { duration: 0.5, delay, ease: "easeOut" },
          boxShadow: { duration: 0.3, ease: "easeOut" },
        }}
      />

      <motion.div
        className="relative flex items-start gap-5"
        style={{ x: springX, y: springY, willChange: "transform" }}
      >
        <motion.div
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-[26px] shadow-[0_18px_30px_-24px_rgba(26,26,46,0.24)] ring-1 ring-black/5"
          style={{ backgroundColor: `${problem.accent}14` }}
          animate={
            index === 0
              ? { y: [0, -4, 0] }
              : index === 1
                ? { scale: [1, 1.06, 1], opacity: [1, 0.92, 1] }
                : { rotate: isHovered ? 5 : 0 }
          }
          transition={
            index === 0
              ? { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
              : index === 1
                ? { duration: 2.8, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }
                : { duration: 0.3, ease: "easeOut" }
          }
        >
          {problem.icon}
        </motion.div>

        <div className="max-w-[38rem]">
          <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-dark">
            {problem.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-dark/54 sm:text-[15px] sm:leading-7">
            {problem.description}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function WhyLearnersQuit() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.68),transparent_24%),radial-gradient(circle_at_82%_38%,rgba(242,107,58,0.04),transparent_18%)]" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] lg:gap-12 lg:px-10 xl:gap-18 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[460px]"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange sm:text-xs">
              Why Learners Quit
            </p>
            <div className="mt-4 h-1 w-14 rounded-full bg-orange" />
          </div>

          <h2 className="mt-8 font-display text-[48px] font-bold leading-[0.93] tracking-[-0.055em] text-dark sm:text-[60px] md:text-[68px] lg:text-[72px] xl:text-[80px]">
            Traditional
            <br />
            courses
            <br />
            weren&apos;t
            <br />
            built
            <br />
            for the way
            <br />
            you <span className="text-orange">actually</span>
            <br />
            <span className="text-orange">learn.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:gap-6">
          {problems.map((problem, index) => (
            <ProblemCard key={problem.title} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
