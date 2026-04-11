import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TravellingSection from "@/components/TravellingSection";
import AboutSection from "@/components/AboutSection";
import CVSection from "@/components/CVSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="scroll-smooth">
    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <TravellingSection />
    <AboutSection />
    <CVSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
