import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import TravellingSection from "@/components/TravellingSection";
import AboutSection from "@/components/AboutSection";
import CVSection from "@/components/CVSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => (
  <ThemeProvider>
    <div className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResearchSection />
      <SkillsSection />
      <AchievementsSection />
      <ExperienceSection />
      <CertificatesSection />
      <TravellingSection />
        <BlogSection />
        <CVSection />
      <ContactSection />
      <Footer />
    </div>
  </ThemeProvider>
);

export default Index;
