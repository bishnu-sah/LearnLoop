import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LearnLoopLogo from "@/components/LearnLoopLogo";

const footerLinks = ["For Learners", "For Institutions", "Pricing", "API", "Blog", "Career"];

function RocketIcon() {
  return (
    <svg
      className="h-7 w-7 text-orange"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 4c3.5 0 6 2.5 6 6 0 4.2-2.8 7.7-7.2 9.1l-1.5-1.5C12.7 13.2 16.2 10.4 20.4 10c0-3.5-2.5-6-6-6Z" />
      <path d="M14 4c-4.2.4-7 3.2-7.6 7.4L4.9 9.9C6.3 5.5 9.8 2.7 14 2.7V4Z" />
      <path d="m9.5 14.5-4.7 4.7" />
      <path d="M7 17H3v4" />
      <path d="m14.5 9.5 3 3" />
      <circle cx="14.5" cy="9.5" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function FinalJourneySection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section ref={ref} className="w-full bg-[#F7F2EB] px-5 pt-[100px] pb-[60px] sm:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[650px] w-full max-w-[1440px] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
          >
            <RocketIcon />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="mt-10 text-center text-[48px] font-bold tracking-[-2px] text-[#0FA18F] sm:text-[60px] lg:text-[72px]"
        >
          START YOUR ADAPTIVE JOURNEY
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
          className="mt-8 text-center"
        >
          <p className="text-[22px] font-normal leading-[1.4] text-[#8D7E73] sm:text-[24px] lg:text-[28px]">
            Your best learning
            <br />
            <span className="text-orange">starts here</span>
          </p>
        </motion.div>

        <div className="mt-[50px] flex flex-col items-center justify-center gap-5 sm:flex-row">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.36, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="inline-flex h-14 items-center justify-center rounded-full bg-orange px-8 text-base font-semibold text-white shadow-[0_8px_20px_rgba(242,107,58,0.25)]"
          >
            Start Learning Free
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.48, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#0FA18F] px-8 text-base font-semibold text-white shadow-[0_8px_20px_rgba(15,161,143,0.25)]"
          >
            Book a Demo for Your Team
          </motion.a>
        </div>

        <div className="mt-[120px] w-full border-t border-[#1B1835]/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
              <LearnLoopLogo />
              <p className="text-[18px] text-[#1B1835]">
                © 2025 LearnLoop • Adaptive EdTech Platform • Free for individual learners
              </p>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[15px] text-[#1B1835] transition-colors duration-200 hover:text-orange"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
