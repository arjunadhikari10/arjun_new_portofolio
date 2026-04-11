import { motion } from "framer-motion";

const timeline = [
  { year: "2006–2021", title: "Dhawalagiri Boarding School", detail: "SEE with 3.85 GPA, Basic Level at 93.125%", link: "https://www.facebook.com/dhawalagirisecondaryschool/" },
  { year: "2019–2021", title: "SOSHGS, Gandaki", detail: "Class 12 with 3.78 GPA — 3.5hr daily commute", link: "https://soshgsgandaki.edu.np" },
  { year: "2021–2026", title: "Pulchowk Campus", detail: "Pursuing Civil Engineering in Lalitpur", link: "http://pcampus.edu.np" },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Journey</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Education <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12 pb-12 last:pb-0"
            >
              <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
              <span className="text-primary font-heading text-sm font-medium">{item.year}</span>
              <h3 className="font-heading text-lg font-semibold mt-1">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {item.title}
                </a>
              </h3>
              <p className="text-muted-foreground text-sm mt-1">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
