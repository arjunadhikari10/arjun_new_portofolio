import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const featured = {
  title: "Decoding a Mountain in Motion: Investigating the Gyapche Landslide, Nepal",
  authors: "Aakriti Thapa, Anmol Karki, Arjun Adhikari & Ashok Khatri",
  affiliation: "Civil Engineering, IOE Pulchowk Campus",
  tags: ["Landslide Research", "Geotechnical Engineering", "GIS & Remote Sensing"],
  excerpt:
    "A comprehensive investigation of the Gyapche Landslide integrating UAV photogrammetry, field investigations, GeoStudio slope stability analysis, and GIS-based susceptibility mapping.",
  readTime: "6 min read",
  date: "May 28, 2026",
  image: "https://i.postimg.cc/G2CDJppd/house.avif",
  href: "/blog/gyapche-landslide.html",
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
          className="group relative max-w-md mx-auto"
        >
          <a
            href={featured.href}
            className="block rounded-2xl overflow-hidden border border-border bg-card/60 backdrop-blur-xl shadow-sm hover:shadow-[0_16px_48px_-16px_hsl(var(--primary)/0.3)] hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                width={640}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {featured.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="px-2 py-0.5 rounded-full text-[10px] font-heading font-semibold tracking-wide bg-background/70 backdrop-blur-md border border-border/60 text-foreground"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-primary/70" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-primary/70" />
                  {featured.readTime}
                </span>
              </div>

              <h3 className="font-heading text-base font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                {featured.title}
              </h3>

              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                {featured.excerpt}
              </p>

              <div className="text-[11px] text-muted-foreground mb-4">
                <span className="text-foreground font-medium">{featured.authors}</span>
                <span className="block mt-0.5 opacity-70">{featured.affiliation}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-primary">
                Read Article
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </a>
        </motion.article>
      </div>
    </section>
  );
};

export default BlogSection;
