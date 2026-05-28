import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import blogImage from "@/assets/gyapche-landslide.jpg";

const featured = {
  title: "Decoding a Mountain in Motion: Investigating the Gyapche Landslide, Nepal",
  authors: "Aakriti Thapa, Anmol Karki, Arjun Adhikari & Ashok Khatri",
  affiliation: "Civil Engineering, IOE Pulchowk Campus",
  tags: ["Landslide Research", "Geotechnical Engineering", "GIS & Remote Sensing"],
  excerpt:
    "A comprehensive investigation of the Gyapche Landslide integrating UAV photogrammetry, field investigations, GeoStudio slope stability analysis, GIS-based susceptibility mapping, and r.avaflow runout simulation to understand slope failure mechanisms and downstream hazards.",
  readTime: "6 min read",
  date: "2026",
  image: blogImage,
  href: "#",
};

const BlogSection = () => {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">
            Writing
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Blogs</span> &amp; Insights
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Field notes and essays on research, civil engineering, geospatial
            technology, and the things I learn along the way.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative max-w-3xl mx-auto"
        >
          <a
            href={featured.href}
            className="block rounded-3xl overflow-hidden border border-border bg-card/60 backdrop-blur-xl shadow-sm hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.35)] hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                width={1280}
                height={768}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {featured.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="px-2.5 py-1 rounded-full text-[10px] font-heading font-semibold tracking-wide bg-background/70 backdrop-blur-md border border-border/60 text-foreground"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary/70" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary/70" />
                  {featured.readTime}
                </span>
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
                {featured.title}
              </h3>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                {featured.excerpt}
              </p>

              <div className="text-xs text-muted-foreground mb-6">
                <span className="text-foreground font-medium">{featured.authors}</span>
                <span className="block mt-0.5 opacity-70">{featured.affiliation}</span>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary">
                Read Article
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </a>
        </motion.article>
      </div>
    </section>
  );
};

export default BlogSection;
