import { HeroSection } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { ExperienceSection } from "@/components/experience";
import { EducationSection } from "@/components/education";
import { ContactSection } from "@/components/contact";
import { FooterSection } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative z-0">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
