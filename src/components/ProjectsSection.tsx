import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Mountain, CloudRain, Building2, Camera, Leaf, MapPin, ExternalLink, Smartphone, Shield, Calculator } from "lucide-react";

interface Project {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  link?: string;
  featured?: boolean;
  embedUrl?: string;
}

const projects: Project[] = [
  {
    icon: Droplets,
    title: "Groundwater Discharge & Infiltration Modeling",
    subtitle: "Kathmandu Valley",
    description: "Numerical modeling of groundwater dynamics, recharge behavior, and rainfall interaction across the Kathmandu Valley using geospatial and hydrological data.",
    tags: ["QGIS", "Python", "Hydrology"],
    thumbnail: "https://i.postimg.cc/bvTvNhmv/Gw-model.avif",
  },
  {
    icon: Mountain,
    title: "Gyapche Landslide Analysis",
    subtitle: "Slope Stability & Runout Simulation",
    description: "Comprehensive slope stability assessment, runout simulation using r.avaflow, and susceptibility mapping. Funded by Nepal Flying Labs.",
    tags: ["r.avaflow", "GIS", "Field Data"],
    thumbnail: "https://i.postimg.cc/g0smvK9y/Gyapche.avif",
  },
  {
    icon: CloudRain,
    title: "AET & Landslide Exposure Research",
    subtitle: "Rainfall-Induced Geohazards",
    description: "Determining allowable exposure time for un-stabilized road-cut slopes under variable rainfall, soil, slope, and groundwater conditions. NAST funded.",
    tags: ["Data Science", "NAST", "25+ Landslides"],
    thumbnail: "https://i.postimg.cc/ncyKq4pC/AET.avif",
  },
  {
    icon: Building2,
    title: "Smart Traffic Management System",
    subtitle: "Computer Vision Application",
    description: "Computer vision and signal-processing-based system for real-time traffic flow estimation using image analysis and ML algorithms.",
    tags: ["Python", "OpenCV", "ML"],
    thumbnail: "https://i.postimg.cc/8crDWQmG/traffic-model.avif",
  },
  {
    icon: Leaf,
    title: "EcoScan App",
    subtitle: "Concept Development • Live Demo Available",
    description: "Conceptual environmental monitoring system developed during PleasHack hackathon, focusing on sustainability and ecological data collection.",
    tags: ["Hackathon", "Concept", "Environment"],
    link: "https://ecoscan.arjunadhikari10.com.np/",
    featured: true,
    embedUrl: "https://ecoscan.arjunadhikari10.com.np/",
  },
  {
    icon: Calculator,
    title: "GeoYantra Pro",
    subtitle: "Geotechnical & Water Resource Toolkit • Live Demo Available",
    description: "A high-precision web application designed to bridge the gap between raw laboratory data and actionable engineering design — built for geotechnical and water resource engineering students and engineers.",
    tags: ["Web App", "Geotechnical", "Engineering"],
    link: "https://geoyantra.arjunadhikari10.com.np/",
    featured: true,
    embedUrl: "https://geoyantra.arjunadhikari10.com.np/",
  },
  {
    icon: Droplets,
    title: "Managed Aquifer Recharge (MAR)",
    subtitle: "Economic Feasibility Study",
    description: "Cost analysis and economic feasibility assessment of Managed Aquifer Recharge systems in Kathmandu Valley. Currently in starting phase.",
    tags: ["Groundwater", "Economics", "Team"],
  },
  {
    icon: Shield,
    title: "Rapid Visual Seismic Screening (RVS)",
    subtitle: "Seismic Performance Evaluation",
    description: "Integrates Rapid Visual Seismic Screening with nonlinear static (pushover) analysis and probabilistic fragility assessment to evaluate seismic performance of an existing building, developed in OpenSeesPy.",
    tags: ["OpenSeesPy", "Pushover", "Fragility"],
    thumbnail: "https://i.postimg.cc/cCnbMDfm/Screenshot-2026-04-16-at-9-22-02-AM.png",
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

const EcoScanEmbed = ({ project }: { project: Project }) => {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto mt-12"
    >
      <div className="relative rounded-2xl border border-primary/40 ring-1 ring-primary/20 bg-card overflow-hidden shadow-xl shadow-primary/10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-gradient-to-r from-primary/10 via-transparent to-primary/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/20">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                {project.title}
                <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider animate-pulse">Live</span>
              </h3>
              <p className="text-primary/60 text-xs font-heading">{project.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-medium border border-border hidden sm:inline-block">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:scale-105 transition-transform"
            >
              <ExternalLink className="w-3 h-3" /> Open Full App
            </a>
          </div>
        </div>

        {/* Phone mockup with iframe */}
        <div className="grid md:grid-cols-[1fr_280px] gap-0">
          {/* Desktop iframe */}
          <div className="relative bg-muted/30 p-4">
            <div className="rounded-lg overflow-hidden border border-border/50 shadow-inner bg-background">
              <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[10px] text-muted-foreground font-mono">ecoscan.arjunadhikari10.com.np</span>
                </div>
              </div>
              <div 
                className={`relative transition-all duration-300 ${isInteracting ? 'ring-2 ring-primary/40' : ''}`}
                onMouseEnter={() => setIsInteracting(true)}
                onMouseLeave={() => setIsInteracting(false)}
              >
                <iframe
                  src={project.embedUrl}
                  className="w-full h-[420px] border-0"
                  title={project.title}
                  loading="lazy"
                  allow="accelerometer; camera; geolocation"
                />
                {!isInteracting && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-[1px] cursor-pointer transition-opacity">
                    <div className="flex flex-col items-center gap-2 text-foreground">
                      <Smartphone className="w-8 h-8 text-primary animate-bounce" />
                      <span className="text-sm font-medium">Click to interact with the app</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Side info panel */}
          <div className="p-6 border-l border-border/50 flex flex-col justify-center bg-gradient-to-b from-primary/5 to-transparent hidden md:flex">
            <Leaf className="w-10 h-10 text-primary mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Interactive live demo
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Built during PleasHack Hackathon
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                Environmental monitoring concept
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
          {projects.filter(p => !p.embedUrl).map((project, i) => {
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
                  className={`group relative rounded-2xl border bg-card transition-all duration-500 hover:glow overflow-hidden flex flex-col h-full ${project.featured ? 'border-primary/50 ring-1 ring-primary/20 shadow-lg shadow-primary/5 hover:border-primary/60' : 'border-border hover:border-primary/30'}`}
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
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <p className="text-primary/60 text-xs font-heading">{project.subtitle}</p>
                        {project.title.includes("Gyapche") && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-heading font-bold border border-yellow-400/40 bg-yellow-400/15 text-yellow-400 animate-pulse">
                            🎓 Final Year Project
                          </span>
                        )}
                      </div>
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

        {/* Featured EcoScan Embed */}
        {projects.filter(p => p.embedUrl).map((project) => (
          <EcoScanEmbed key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
