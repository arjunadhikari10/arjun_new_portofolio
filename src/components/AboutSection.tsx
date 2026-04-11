import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-5 gap-12 items-center"
        >
          {/* Personal Image */}
          <div className="md:col-span-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-2 border-border glow">
                <img
                  src="https://i.postimg.cc/mgfKCcWT/IMG-6864.avif"
                  alt="Arjun Adhikari"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-3 -right-3 w-64 h-80 rounded-2xl border border-primary/20 -z-10" />
            </motion.div>
          </div>

          {/* Text content */}
          <div className="md:col-span-3">
            <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">About</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
              A man on a journey to<br />
              <span className="text-gradient">discover himself</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              I am a civil engineering student at Pulchowk Campus, Kathmandu — originally from the beautiful city of Pokhara.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Alongside my studies, I have a strong passion for data science and research, actively pursuing projects in groundwater analysis, landslide investigation, and seismic performance assessment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I cherish nature and love exploring the outdoors through traveling and trekking adventures across Nepal. When I'm not studying or researching, you'll find me on a trail somewhere in the Himalayas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
