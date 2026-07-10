import { BackgroundEffects } from "@/components/sections/BackgroundEffects";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Navbar } from "@/components/sections/Navbar";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export default function Home() {
  return (
    <main className="relative pt-16 sm:pt-20 md:pt-24">
       <div className="absolute inset-0 overflow-hidden">
    <BackgroundEffects />
  </div>
      {/* <BackgroundEffects /> */}
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsGrid />
      <ContactForm />
      <Footer />
    </main>
  );
}
