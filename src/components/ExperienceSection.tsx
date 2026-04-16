import { motion } from "framer-motion";
import { Beaker, GraduationCap, Building2, Users, Mic2 } from "lucide-react";

const education = [
  { year: "2021–2026", title: "Pulchowk Campus, IOE", detail: "B.E. in Civil Engineering — Tribhuvan University, Lalitpur" },
  { year: "2019–2021", title: "SOS Hermann Gmeiner HSS", detail: "Science Faculty — Gandaki, Pokhara • GPA: 3.78/4.0" },
  { year: "2006–2019", title: "Dhawalagiri Boarding School", detail: "Primary & Secondary Education (SEE) — Kaski, Nepal • GPA: 3.85/4.0" },
];

const labs = [
  {
    icon: Beaker,
    title: "HydroLab",
    org: "University of Cincinnati",
    year: "2025",
    description: "Selected for hydrological research and modeling — international collaboration opportunity.",
    badge: "Selected",
  },
  {
    icon: Beaker,
    title: "Kathmandu Valley GeoLab",
    org: "IOE Pulchowk Campus & Duke University",
    year: "2025",
    description: "Collaborative geoscience research on Kathmandu Valley's geological and hydrological systems.",
    badge: "Selected",
  },
  {
    icon: Beaker,
    title: "Multi Hazard Risk Assessment Lab",
    org: "IOE Pulchowk Campus",
    year: "Ongoing",
    description: "Research on multi-hazard risk assessment methodologies for Nepal's vulnerable terrain.",
    badge: "Active",
  },
];

const leadership = [
  {
    icon: Building2,
    title: "Intern – CodSoft",
    detail: "Programming, data handling & technical problem-solving.",
  },
  {
    icon: Users,
    title: "Former President – SOKES",
    detail: "Society of Kaski Engineering Students, 2081. Organized first-ever Stand-Up Comedy at Pulchowk Campus.",
  },
  {
    icon: GraduationCap,
    title: "Class Representative",
    detail: "3 Semesters — liaison between students and faculty for academic coordination.",
  },
  {
    icon: Mic2,
    title: "Coordinator – Civil Talk Series",
    detail: "Pre-event of Aadhar-2081. Organized technical talk sessions.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Career</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            <span className="text-gradient">Experience</span> & Leadership
          </h2>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="font-heading text-lg font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" /> Education
          </h3>
          <div className="relative max-w-xl">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            {education.map((item, i) => (
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
        </div>

        {/* Lab Experience */}
        <div className="mb-16">
          <h3 className="font-heading text-lg font-semibold mb-6 flex items-center gap-2">
            <Beaker className="w-5 h-5 text-primary" /> Research Labs
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {labs.map((lab, i) => (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl border border-border bg-background hover:border-primary/30 hover:glow transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <lab.icon className="w-6 h-6 text-primary" />
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-heading font-semibold">
                    {lab.badge}
                  </span>
                </div>
                <h4 className="font-heading text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                  {lab.title}
                </h4>
                <p className="text-primary/60 text-xs font-heading mb-2">{lab.org} · {lab.year}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{lab.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> Leadership & Responsibility
          </h3>
          <div className="space-y-4">
            {leadership.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/20 transition-colors"
              >
                <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-heading text-sm font-semibold">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
