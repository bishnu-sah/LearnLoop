import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroDashboard from "@/components/HeroDashboard";
import LearnLoopLogo from "@/components/LearnLoopLogo";

const navLinks = [
  "How It Works",
  "For Learners",
  "For Institutions",
  "Pricing",
  "Stories",
];

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.72,
    delay,
    ease: "easeOut" as const,
  },
});

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="w-[132px] rounded-2xl border border-dark/6 bg-white/92 px-5 py-4 shadow-[0_20px_40px_-30px_rgba(26,26,46,0.28)]"
    >
      <p className="text-[31px] font-semibold tracking-[-0.05em] text-dark">{value}</p>
      <p className="mt-1 text-sm leading-5 text-dark/52">{label}</p>
    </motion.div>
  );
}

export default function PremiumHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-cream text-dark">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.7),transparent_25%),radial-gradient(circle_at_78%_22%,rgba(14,165,164,0.08),transparent_17%),radial-gradient(circle_at_85%_12%,rgba(242,107,58,0.06),transparent_16%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-white/35 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[85vh] w-full max-w-[1280px] flex-col px-5 sm:px-8 lg:px-10 xl:px-12">
        <header className="flex h-20 items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <LearnLoopLogo />
          </motion.a>

          <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link}
                href="#"
                className="text-sm font-medium text-dark/58 transition-colors duration-200 hover:text-dark"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          <motion.div
            className="hidden items-center gap-6 xl:flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }}
          >
            <a href="#" className="text-sm font-medium text-dark/58 transition-colors duration-200 hover:text-dark">
              Log In
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_-18px_rgba(242,107,58,0.68)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ea6131]"
            >
              Try Free
            </a>
          </motion.div>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-dark/8 bg-white/70 text-dark shadow-[0_10px_24px_-20px_rgba(26,26,46,0.32)] backdrop-blur xl:hidden"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden xl:hidden"
            >
              <div className="mb-4 rounded-[28px] border border-white/70 bg-white/78 p-5 shadow-[0_20px_50px_-36px_rgba(26,26,46,0.34)] backdrop-blur-xl">
                <nav aria-label="Mobile primary" className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-sm font-medium text-dark/64 transition-colors duration-200 hover:text-dark"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                  <div className="mt-2 flex items-center gap-4">
                    <a href="#" className="text-sm font-medium text-dark/58 transition-colors duration-200 hover:text-dark">
                      Log In
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_-18px_rgba(242,107,58,0.68)]"
                    >
                      Try Free
                    </a>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-1 items-center py-8 sm:py-10 lg:py-12">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,48%)_minmax(0,52%)] lg:gap-10 xl:gap-14">
            <div className="max-w-[560px]">
              <motion.div
                className="inline-flex rounded-full border border-dark/6 bg-[#F1E9DE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-dark/55"
                {...reveal(0.04)}
              >
                Adaptive Learning • EdTech • Web + Tablet
              </motion.div>

              <motion.h1
                className="mt-7 max-w-[10ch] font-display text-[52px] font-bold leading-[0.95] tracking-[-0.055em] text-dark sm:text-[64px] md:text-[72px] lg:text-[76px] xl:text-[80px]"
                {...reveal(0.12)}
              >
                Learning that <span className="text-orange">fits</span> how you think.
              </motion.h1>

              <motion.p
                className="mt-6 max-w-[500px] text-base leading-8 text-dark/58 sm:text-lg"
                {...reveal(0.2)}
              >
                LearnLoop builds a personalized path through any course — adapting to your gaps,
                celebrating your wins, and always showing you exactly where you&apos;re headed.
                Average learners see 3× faster skill acquisition.
              </motion.p>

              <motion.div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4" {...reveal(0.28)}>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-orange px-7 py-4 text-sm font-semibold text-white shadow-[0_22px_42px_-22px_rgba(242,107,58,0.78)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ea6131]"
                >
                  Start Learning Free
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-dark transition-colors duration-200 hover:text-orange"
                >
                  See how it adapts
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </motion.div>

              <motion.div className="mt-10 flex flex-wrap gap-4" {...reveal(0.36)}>
                <StatCard value="87%" label="Completion Rate" />
                <StatCard value="3× Faster" label="Skill Acquisition" />
              </motion.div>
            </div>

            <motion.div className="lg:justify-self-end" {...reveal(0.2)}>
              <HeroDashboard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
