import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Clock, DollarSign } from "lucide-react";

interface Research {
  status: "published" | "ongoing";
  title: string;
  description: string;
  funding: string;
  supervisor: string;
  extra?: string;
}

const researchItems: Research[] = [
  {
    status: "published",
    title: "Deciphering Groundwater Dynamics of Kathmandu Valley",
    description: "Insights from soil characteristics, hydraulic conductivity, rainfall data, and land-use land-cover analysis.",
    funding: "Nepal Academy of Science and Technology (NAST)",
    supervisor: "Asst. Prof. Bhim Kumar Dahal, PhD",
    extra: "Submitted to Groundwater for Sustainable Development",
  },
  {
    status: "ongoing",
    title: "Allowable Exposure Time for Un-Stabilized Road-Cut Slopes",
    description: "Determining safe exposure windows under variable rainfall, soil, slope, and groundwater conditions in mountainous terrain.",
    funding: "Nepal Academy of Science and Technology (NAST)",
    supervisor: "Asst. Prof. Arun Paudel",
    extra: "Field data collected from 25+ landslides",
  },
  {
    status: "ongoing",
    title: "Gyapche Landslide: Slope Stability, Runout & Susceptibility Mapping",
    description: "Comprehensive analysis using r.avaflow for runout simulation and GIS-based susceptibility assessment.",
    funding: "Nepal Flying Labs",
    supervisor: "Asst. Prof. Dr. Basanta Raj Adhikari",
    extra: "Expected completion: March 2026",
  },
];

const statusConfig = {
  published: { label: "Journal Submitted & Funded", icon: BookOpen, color: "bg-primary/20 text-primary border-primary/30" },
  ongoing: { label: "Ongoing Research", icon: Clock, color: "bg-secondary text-muted-foreground border-border" },
};

const ResearchSection = () => {
  return (
    <section id="research" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Academic</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            <span className="text-gradient">Research</span> Portfolio
          </h2>
        </motion.div>

        <div className="space-y-6">
          {researchItems.map((item, i) => {
            const config = statusConfig[item.status];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FlaskConical className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-heading font-semibold border ${config.color}`}>
                        {config.label}
                      </span>
                      {item.title.includes("Gyapche") && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-heading font-bold border border-yellow-400/40 bg-yellow-400/15 text-yellow-400 animate-pulse">
                          🎓 Final Year Project
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-primary/60" /> {item.funding}
                      </span>
                      <span>Supervisor: <span className="text-foreground">{item.supervisor}</span></span>
                    </div>
                    {item.extra && (
                      <p className="text-primary/70 text-xs mt-2 font-medium">{item.extra}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
