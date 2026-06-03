import PremiumHero from "@/components/PremiumHero";
import StatsSection from "@/components/StatsSection";
import WhyLearnersQuit from "@/components/WhyLearnersQuit";
import HowItWorks from "@/components/HowItWorks";
import FeatureShowcase from "@/components/FeatureShowcase";

import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsImpactSection from "@/components/TestimonialsImpactSection";
import FinalJourneySection from "@/components/FinalJourneySection";

export default function App() {
  return (
    <main>
      <PremiumHero />
      <StatsSection />
      <WhyLearnersQuit />
      <HowItWorks />
      <FeatureShowcase />
      <ExperienceSection />
      <TestimonialsImpactSection />
      <FinalJourneySection />
    </main>
  );
}
