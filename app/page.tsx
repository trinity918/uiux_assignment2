"use client";

import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ContextSection from "@/components/ContextSection";
import ApproachSection from "@/components/ApproachSection";
import StructureSection from "@/components/StructureSection";
import InterfaceSection from "@/components/InterfaceSection";
import ExperienceSection from "@/components/ExperienceSection";
import OutputSection from "@/components/OutputSection";
import ImpactSection from "@/components/ImpactSection";
import LearningsSection from "@/components/LearningsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <ProblemSection />
      <ContextSection />
      <ApproachSection />
      <StructureSection />
      <InterfaceSection />
      <ExperienceSection />
      <OutputSection />
      <ImpactSection />
      <LearningsSection />
      <Footer />
    </main>
  );
}
