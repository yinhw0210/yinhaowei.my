import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProjectsPreview />
      <SkillsSection />
      <ContactCTA />
    </Layout>
  );
}
