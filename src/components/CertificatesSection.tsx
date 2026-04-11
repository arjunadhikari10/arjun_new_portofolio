import { motion } from "framer-motion";
import { Award, Globe, Wrench, BookOpen } from "lucide-react";

const certificates = [
  {
    icon: Globe,
    title: "Cross Connect Clash – Winner",
    issuer: "Nirmaan ISCE 2025, India",
    description: "Represented Nepal and won gold at the international civil engineering competition in Bangalore.",
  },
  {
    icon: Award,
    title: "Shark Tank Civil – Participant",
    issuer: "Nirmaan ISCE 2025, India",
    description: "Presented innovative civil engineering ideas in a competitive pitch format.",
  },
  {
    icon: Award,
    title: "Carbon Quest – Participant",
    issuer: "Nirmaan ISCE 2025, India",
    description: "Sustainability-focused competition on carbon reduction strategies.",
  },
  {
    icon: Wrench,
    title: "Civil Engineering Hackathon – Gold",
    issuer: "National Level",
    description: "Won 1st place for innovative engineering solutions under time-constrained conditions.",
  },
  {
    icon: BookOpen,
    title: "Nepal Geotechnical Society Conference",
    issuer: "NGS",
    description: "Attended the national conference on geotechnical engineering research and practice.",
  },
  {
    icon: Award,
    title: "National-Level Ideathon – Gold",
    issuer: "National Level",
    description: "Won 1st place for presenting a compelling idea addressing national infrastructure challenges.",
  },
  {
    icon: Wrench,
    title: "Sankalpa-2025 Model Making – Winner",
    issuer: "Sankalpa 2025",
    description: "Built and presented a winning civil engineering model at the national competition.",
  },
  {
    icon: Award,
    title: "Please Hack – Participant",
    issuer: "Hackathon",
    description: "Developed the EcoScan concept for environmental monitoring and sustainability.",
  },
  {
    icon: Award,
    title: "LOCUS – Popular Choice Award",
    issuer: "LOCUS",
    description: "Received the popular choice award for an outstanding project presentation.",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Credentials</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            <span className="text-gradient">Certificates</span> & Participation
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:glow transition-all duration-300"
            >
              <cert.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h4>
              <p className="text-primary/50 text-xs font-heading mb-2">{cert.issuer}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
