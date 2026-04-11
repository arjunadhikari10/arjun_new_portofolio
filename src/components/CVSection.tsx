import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Code, Award, FlaskConical } from "lucide-react";

const education = [
  { year: "2021–2026", title: "Pulchowk Campus, IOE", detail: "B.E. in Civil Engineering, Lalitpur" },
  { year: "2019–2021", title: "SOSHGS, Gandaki", detail: "Class 12 — GPA 3.78" },
  { year: "2006–2019", title: "Dhawalagiri Boarding School", detail: "SEE — GPA 3.85" },
];

const experience = [
  { year: "2023–Present", title: "Research Assistant", detail: "Groundwater & landslide studies at IOE" },
  { year: "2022–Present", title: "Trekking Guide", detail: "Professional guide across Nepal's trails" },
];

const skills = ["Python", "QGIS", "AutoCAD", "SAP2000", "ETABS", "Machine Learning", "Data Visualization", "MS Office", "LaTeX"];

const research = [
  "Groundwater Resource Assessment",
  "Gyapche Landslide Investigation",
  "AET Determination for Landslide Analysis",
  "Seismic Performance Evaluation",
];

const achievements = [
  "IOE Entrance Top Ranker",
  "Multiple Academic Excellence Awards",
  "Represented Nepal in Bangalore (International Visit)",
];

const TimelineBlock = ({ items, icon: Icon }: { items: { year: string; title: string; detail: string }[]; icon: React.ElementType }) => (
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
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-heading font-medium text-sm hover:scale-105 transition-transform"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-lg font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" /> Education
            </h3>
            <TimelineBlock items={education} icon={GraduationCap} />
          </motion.div>

          {/* Experience */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="font-heading text-lg font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" /> Experience
            </h3>
            <TimelineBlock items={experience} icon={Briefcase} />
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" /> Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Research */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-primary" /> Research
          </h3>
          <ul className="space-y-2">
            {research.map((r) => (
              <li key={r} className="text-muted-foreground text-sm pl-4 border-l-2 border-primary/30">
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" /> Achievements
          </h3>
          <ul className="space-y-2">
            {achievements.map((a) => (
              <li key={a} className="text-muted-foreground text-sm pl-4 border-l-2 border-primary/30">
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;
