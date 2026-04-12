import { motion } from "framer-motion";
import { ArrowRight, Droplets, Mountain, CloudRain, Building2, Camera, Leaf, MapPin } from "lucide-react";

interface Project {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  link?: string;
}

const projects: Project[] = [
  {
    icon: Droplets,
    title: "Groundwater Discharge & Infiltration Modeling",
    subtitle: "Kathmandu Valley",
    description: "Numerical modeling of groundwater dynamics, recharge behavior, and rainfall interaction across the Kathmandu Valley using geospatial and hydrological data.",
    tags: ["QGIS", "Python", "Hydrology"],
  },
  {
    icon: Mountain,
    title: "Gyapche Landslide Analysis",
    subtitle: "Slope Stability & Runout Simulation",
    description: "Comprehensive slope stability assessment, runout simulation using r.avaflow, and susceptibility mapping. Funded by Nepal Flying Labs.",
    tags: ["r.avaflow", "GIS", "Field Data"],
  },
  {
    icon: CloudRain,
    title: "AET & Landslide Exposure Research",
    subtitle: "Rainfall-Induced Geohazards",
    description: "Determining allowable exposure time for un-stabilized road-cut slopes under variable rainfall, soil, slope, and groundwater conditions. NAST funded.",
    tags: ["Data Science", "NAST", "25+ Landslides"],
  },
  {
    icon: Building2,
    title: "Smart Traffic Management System",
    subtitle: "Computer Vision Application",
    description: "Computer vision and signal-processing-based system for real-time traffic flow estimation using image analysis and ML algorithms.",
    tags: ["Python", "OpenCV", "ML"],
  },
  {
    icon: Leaf,
    title: "EcoScan App",
    subtitle: "Concept Development",
    description: "Conceptual environmental monitoring system developed during PleasHack hackathon, focusing on sustainability and ecological data collection.",
    tags: ["Hackathon", "Concept", "Environment"],
  },
  {
    icon: Droplets,
    title: "Managed Aquifer Recharge (MAR)",
    subtitle: "Economic Feasibility Study",
    description: "Cost analysis and economic feasibility assessment of Managed Aquifer Recharge systems in Kathmandu Valley. Currently in starting phase.",
    tags: ["Groundwater", "Economics", "Team"],
  },
  {
    icon: MapPin,
    title: "10 Days Survey Camp",
    subtitle: "Maps & Reports",
    description: "Comprehensive field survey camp covering topographic mapping, traversing, leveling, and detailed report preparation with professional-grade maps.",
    tags: ["Surveying", "AutoCAD", "Field Work"],
    thumbnail: "https://i.postimg.cc/3JDJgGGb/Screenshot-2026-04-12-at-8-49-20-AM.png",
    link: "https://drive.google.com/drive/u/0/folders/1nIWM93hoA91paT84IWmWTjzgsiXusxeC",
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
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => {
            const Wrapper = project.link ? 'a' : 'div';
            const wrapperProps = project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="group relative rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:glow overflow-hidden flex flex-col h-full"
                >
                  {project.thumbnail && (
                    <div className="w-full h-40 overflow-hidden">
                      <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-7 flex-1 flex flex-col relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex-1 flex flex-col">
                      <project.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-heading text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-primary/60 text-xs font-heading mb-3">{project.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[11px] font-medium border border-border">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
                        {project.link ? "Open Folder" : "View Details"} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
