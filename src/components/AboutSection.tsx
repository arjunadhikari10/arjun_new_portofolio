import { motion } from "framer-motion";
import { FlaskConical, MapPin, Database, Brain } from "lucide-react";

const highlights = [
  { icon: FlaskConical, label: "NAST Funded Research" },
  { icon: Database, label: "Data-Driven Engineering" },
  { icon: Brain, label: "Machine Learning + GIS" },
  { icon: MapPin, label: "Nepal Flying Labs" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-5 gap-12 items-center"
        >
          <div className="md:col-span-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-80 rounded-2xl overflow-hidden glow bg-gradient-to-br from-primary/20 to-accent/10">
                <img
                  src="https://i.postimg.cc/6pYSqjQz/Subject-2.png"
                  alt="Arjun Adhikari"
                  className="w-full h-full object-contain mix-blend-normal"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 h-80 rounded-2xl border border-primary/20 -z-10" />
            </motion.div>
          </div>

          <div className="md:col-span-3">
            <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">About</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
              Engineer. Researcher.<br />
              <span className="text-gradient">Explorer.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              I'm a final-year Civil Engineering student at <span className="text-foreground font-medium">Pulchowk Campus, IOE</span> — originally from the lake city of Pokhara. My work sits at the intersection of geotechnical engineering, data science, and geospatial analysis.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I specialize in <span className="text-foreground">groundwater modeling</span>, <span className="text-foreground">landslide analysis</span>, and <span className="text-foreground">climate-induced geohazard assessment</span>. My research has been funded by the Nepal Academy of Science and Technology (NAST) and Nepal Flying Labs, with journal submissions to Groundwater for Sustainable Development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Selected for HydroLab (University of Cincinnati) and Kathmandu Valley GeoLab (IOE–Duke University collaboration), I bring an interdisciplinary approach combining civil engineering fundamentals with machine learning and GIS-driven insights.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <h.icon className="w-4 h-4 text-primary shrink-0" />
                  <span>{h.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
