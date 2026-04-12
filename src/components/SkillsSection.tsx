import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Map, PenTool, HardHat, Sparkles } from "lucide-react";

type SkillLevel = "Expert" | "Advanced" | "Intermediate";

interface Skill {
  name: string;
  level: SkillLevel;
  percent: number;
  tooltip: string;
}

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: Skill[];
}

const levelColors: Record<SkillLevel, string> = {
  Expert: "from-primary to-primary",
  Advanced: "from-primary/80 to-accent/70",
  Intermediate: "from-primary/50 to-accent/40",
};

const levelBadgeColors: Record<SkillLevel, string> = {
  Expert: "bg-primary/20 text-primary",
  Advanced: "bg-primary/10 text-primary/80",
  Intermediate: "bg-secondary text-muted-foreground",
};

const categories: SkillCategory[] = [
  {
    icon: Code,
    title: "Programming & Data Science",
    skills: [
      { name: "NumPy & Pandas", level: "Expert", percent: 90, tooltip: "Data wrangling, analysis & geospatial scripting" },
      { name: "Machine Learning (Scikit-learn)", level: "Advanced", percent: 75, tooltip: "ML models for landslide susceptibility & prediction" },
      { name: "Matplotlib", level: "Advanced", percent: 80, tooltip: "Publication-quality plots for research papers" },
      { name: "C Programming", level: "Intermediate", percent: 55, tooltip: "Fundamentals, data structures & algorithmic thinking" },
    ],
  },
  {
    icon: Map,
    title: "GIS & Modeling",
    skills: [
      { name: "QGIS", level: "Advanced", percent: 78, tooltip: "Spatial analysis, terrain modeling, land-use mapping" },
      { name: "ArcGIS Pro", level: "Advanced", percent: 75, tooltip: "Geodatabase management & geoprocessing" },
      { name: "r.avaflow", level: "Advanced", percent: 72, tooltip: "Landslide runout simulation & debris flow modeling" },
      { name: "GRASS GIS", level: "Intermediate", percent: 60, tooltip: "Hydrological & terrain analysis" },
      { name: "Google Earth Pro", level: "Expert", percent: 88, tooltip: "Terrain visualization, KML mapping & field verification" },
      { name: "GeoStudio Seep/W, Slope/W", level: "Advanced", percent: 74, tooltip: "Seepage & slope stability analysis" },
    ],
  },
  {
    icon: PenTool,
    title: "Structural & Drafting",
    skills: [
      { name: "AutoCAD", level: "Expert", percent: 85, tooltip: "2D/3D drafting for civil engineering projects" },
      { name: "SketchUp", level: "Intermediate", percent: 65, tooltip: "3D modeling & visualization" },
      { name: "Canva Pro", level: "Advanced", percent: 78, tooltip: "Professional design, presentations & visual content" },
    ],
  },
  {
    icon: HardHat,
    title: "Civil Engineering",
    skills: [
      { name: "Property Valuation", level: "Advanced", percent: 80, tooltip: "Professional valuation report writing" },
      { name: "Rate Analysis", level: "Advanced", percent: 78, tooltip: "Cost estimation & BOQ preparation" },
      { name: "OpenSees", level: "Intermediate", percent: 55, tooltip: "Structural & seismic simulation framework" },
    ],
  },
];

const currentlyLearning = [
  "ETABS",
  "LaTeX",
  "Google Earth Engine",
  "Plaxis 2D",
];

const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-heading font-medium ${levelBadgeColors[skill.level]}`}>
          {skill.level}
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percent}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${levelColors[skill.level]}`}
        />
      </div>
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-popover border border-border text-xs text-popover-foreground max-w-[240px] text-center z-20 whitespace-nowrap"
        >
          {skill.tooltip}
        </motion.div>
      )}
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Expertise</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card"
            >
              <h3 className="font-heading text-base font-semibold mb-5 flex items-center gap-2">
                <cat.icon className="w-5 h-5 text-primary" /> {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} skill={skill} delay={ci * 0.1 + si * 0.1} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="font-heading text-base font-semibold mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Currently Learning
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {currentlyLearning.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-sm font-semibold border border-primary/30 shadow-sm shadow-primary/10 cursor-default"
              >
                🔄 {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
