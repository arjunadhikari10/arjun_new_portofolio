import { motion } from "framer-motion";
import { ArrowRight, Droplets, Mountain, CloudRain, Building2 } from "lucide-react";

const projects = [
  {
    icon: Droplets,
    title: "Groundwater Projects",
    description: "Research on groundwater resources, aquifer characterization, and sustainable water management practices in Nepal.",
  },
  {
    icon: Mountain,
    title: "Gyapche Landslide Project",
    description: "Field investigation and geotechnical analysis of the Gyapche landslide — assessing causes, risks, and mitigation strategies.",
  },
  {
    icon: CloudRain,
    title: "AET Determination of Nepal Landslide",
    description: "Actual evapotranspiration analysis to understand moisture dynamics and their influence on landslide susceptibility in Nepal.",
  },
  {
    icon: Building2,
    title: "Seismic Performance of Existing Building in Nepal",
    description: "Structural vulnerability assessment and seismic performance evaluation of existing buildings using analytical methods.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Research</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:glow overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <project.icon className="w-8 h-8 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
                  View Details <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
