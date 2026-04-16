import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase } from "lucide-react";

const education = [
  { year: "2021–2026", title: "Pulchowk Campus, IOE", detail: "B.E. in Civil Engineering — Tribhuvan University, Lalitpur" },
  { year: "2019–2021", title: "SOS Hermann Gmeiner HSS", detail: "Science Faculty — Gandaki, Pokhara • GPA: 3.78/4.0" },
  { year: "2006–2019", title: "Dhawalagiri Boarding School", detail: "Primary & Secondary Education (SEE) — Kaski, Nepal • GPA: 3.85/4.0" },
];


const TimelineBlock = ({ items }: { items: { year: string; title: string; detail: string }[] }) => (
  <div className="relative">
    <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
    {items.map((item, i) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="relative pl-12 pb-8 last:pb-0"
      >
        <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
        <span className="text-primary font-heading text-sm font-medium">{item.year}</span>
        <h4 className="font-heading text-base font-semibold mt-1">{item.title}</h4>
        <p className="text-muted-foreground text-sm mt-0.5">{item.detail}</p>
      </motion.div>
    ))}
  </div>
);

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
          className="text-center mb-16"
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

        <div className="max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-lg font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" /> Education
            </h3>
            <TimelineBlock items={education} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
