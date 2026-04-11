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
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
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
    <CVSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
