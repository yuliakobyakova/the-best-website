import { ApproachSection } from "@/components/sections/ApproachSection";
import { BriefSection } from "@/components/sections/BriefSection";
import { DeploymentSection } from "@/components/sections/DeploymentSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ResultSection } from "@/components/sections/ResultSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ToolsSection } from "@/components/sections/ToolsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BriefSection />
      <ApproachSection />
      <ToolsSection />
      <TimelineSection />
      <DeploymentSection />
      <FeaturesSection />
      <ResultSection />
      <Footer />
    </main>
  );
}
