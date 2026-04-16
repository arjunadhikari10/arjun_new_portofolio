import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CVSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Arjun_Adhikari_CV.pdf";
    link.download = "Arjun_Adhikari_CV.pdf";
    link.click();
  };

  return (
    <section id="cv" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Resume</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">CV</span>
          </h2>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-heading font-medium text-sm hover:scale-105 transition-transform"
          >
            <Download className="w-4 h-4" /> Download CV
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;
