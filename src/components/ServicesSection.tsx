import { motion } from "framer-motion";
import { Building2, BarChart3, Mountain } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Civil Engineer",
    description: "Currently pursuing civil engineering at Pulchowk Campus, building a foundation in structural design and infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Data Scientist",
    description: "Exploring data to extract meaningful insights — proficient in Python, Machine Learning, and data visualization.",
  },
  {
    icon: Mountain,
    title: "Trekking Guide",
    description: "Guiding adventurous trekking experiences across Nepal with deep knowledge of routes, safety, and wilderness.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">What I Do</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            My <span className="text-gradient">Roles</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:glow"
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
