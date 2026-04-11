import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://i.postimg.cc/fWvV6dBZ/IMG-7308.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-heading tracking-[0.3em] uppercase text-sm mb-6"
        >
          Namaste 🙏
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">Arjun</span>{" "}
          <span className="text-gradient">Adhikari</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl font-body mb-12 h-8"
        >
          <TypeAnimation
            sequence={[
              "Civil Engineering Researcher",
              2000,
              "Geohazard & Groundwater Analyst",
              2000,
              "Data Science Enthusiast",
              2000,
              "Trekking Guide & Explorer",
              2000,
            ]}
            repeat={Infinity}
            speed={50}
            className="text-primary/80"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-heading font-medium text-sm tracking-wide bg-primary text-primary-foreground hover:scale-105 transition-transform"
          >
            View Projects
          </a>
          <a
            href="#research"
            className="px-8 py-3 rounded-full font-heading font-medium text-sm tracking-wide border border-border text-foreground hover:border-primary/50 hover:scale-105 transition-all"
          >
            Explore Research
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
