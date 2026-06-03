"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { howItWorks } from "@/lib/data";

const glowColors = [
  "rgba(242,107,58,0.16)",
  "rgba(14,165,164,0.16)",
  "rgba(167,139,250,0.16)",
] as const;

function AnimatedIcon({ icon, index, isHovered }: { icon: string; index: number; isHovered: boolean }) {
  if (index === 0) {
    return (
      <motion.span
        className="inline-block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {icon}
      </motion.span>
    );
  }

  if (index === 1) {
    return (
      <motion.span
        className="inline-block"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {icon}
      </motion.span>
    );
  }

  return (
    <motion.span
      className="inline-block"
      animate={isHovered ? { rotate: 5 } : { rotate: [0, 3, 0] }}
      transition={
        isHovered
          ? { duration: 0.3, ease: "easeOut" }
          : { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {icon}
    </motion.span>
  );
}

function StepCard({
  title,
  description,
  icon,
  step,
  index,
  sectionInView,
  cardsVisible,
  active,
}: {
  title: string;
  description: string;
  icon: string;
  step: number;
  index: number;
  sectionInView: boolean;
  cardsVisible: boolean;
  active: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  const springX = useSpring(motionX, { stiffness: 170, damping: 22, mass: 0.25 });
  const springY = useSpring(motionY, { stiffness: 170, damping: 22, mass: 0.25 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
    const py = ((event.clientY - bounds.top) / bounds.height - 0.5) * 16;

    motionX.set(Math.max(-8, Math.min(8, px)));
    motionY.set(Math.max(-8, Math.min(8, py)));
  };

  const resetParallax = () => {
    motionX.set(0);
    motionY.set(0);
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={
        cardsVisible
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : undefined
      }
      transition={{ duration: 0.8, delay: 0.1 + index * 0.2, ease: "easeOut" }}
    >
      {index < howItWorks.length - 1 && (
        <div className="absolute top-12 left-[60px] hidden h-[2px] w-[calc(100%+2rem)] lg:block">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-orange/30 to-teal/30"
            initial={{ scaleX: 0 }}
            animate={sectionInView ? { scaleX: 1 } : undefined}
            transition={{ duration: 1.5, delay: 0.55 + index * 0.12, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full bg-orange"
            initial={{ scale: 0 }}
            animate={sectionInView ? { scale: 1 } : undefined}
            transition={{ duration: 0.35, delay: 1.3 + index * 0.12, ease: "easeOut" }}
          />
        </div>
      )}

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setIsHovered(false);
          resetParallax();
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          y: -10,
          scale: 1.02,
          boxShadow: "0 30px 70px -34px rgba(26,26,46,0.20)",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        animate={
          active
            ? {
                boxShadow: `0 24px 60px -36px ${glowColors[index]}`,
                borderColor: "rgba(242,107,58,0.16)",
                filter: "brightness(1.02)",
              }
            : {
                boxShadow: "0 0px 0px rgba(0,0,0,0)",
                borderColor: "rgba(26,26,46,0.05)",
                filter: "brightness(1)",
              }
        }
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-dark/5 bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 sm:p-8"
        style={{ willChange: "transform, opacity" }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0"
          style={{ background: `radial-gradient(circle at top left, ${glowColors[index]}, transparent 38%)` }}
          animate={active ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        <motion.div className="relative z-10" style={{ x: springX, y: springY, willChange: "transform" }}>
          <div className="mb-5 flex items-center gap-4">
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-100/60 bg-gradient-to-br from-orange-50 to-amber-50 text-2xl shadow-sm"
              animate={active ? { boxShadow: `0 18px 30px -20px ${glowColors[index]}` } : { boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <AnimatedIcon icon={icon} index={index} isHovered={isHovered} />
            </motion.div>
            <span className="text-xs font-bold uppercase tracking-widest text-dark/20">
              Step {step < 10 ? `0${step}` : step}
            </span>
          </div>
          <h3 className="mb-3 text-xl font-bold text-dark sm:text-2xl">{title}</h3>
          <p className="text-sm leading-relaxed text-dark/50 sm:text-base">{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(ref, { once: true, amount: 0.25 });
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const [cardsVisible, setCardsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 35%"],
  });

  useEffect(() => {
    if (!sectionInView) return;

    const timer = window.setTimeout(() => {
      setCardsVisible(true);
    }, 1450);

    return () => window.clearTimeout(timer);
  }, [sectionInView]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.34) {
      setActiveIndex(0);
    } else if (latest < 0.67) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  const headlineWords = "Three steps to smarter learning".split(" ");

  return (
    <section id="how-it-works" ref={ref} className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <motion.span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-dark/5 bg-dark/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-dark/50"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            How It Works
          </motion.span>

          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl md:text-5xl">
            {headlineWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="inline-block"
                initial={{ opacity: 0, y: 28 }}
                animate={headerInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.8, delay: 0.15 + index * 0.05, ease: "easeOut" }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="mt-4 mx-auto max-w-lg text-base text-dark/50 sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={headerInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            From assessment to mastery in record time. Our adaptive engine does the heavy lifting.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {howItWorks.map((step, index) => (
            <StepCard
              key={step.step}
              {...step}
              index={index}
              sectionInView={sectionInView}
              cardsVisible={cardsVisible}
              active={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
