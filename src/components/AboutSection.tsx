import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">About</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
            A man on a journey to<br />
            <span className="text-gradient">discover himself</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            I am a civil engineering student at Pulchowk Campus, Kathmandu — originally from the beautiful city of Pokhara. 
            Alongside my studies, I have a strong passion for data science which I actively pursue. 
            I cherish nature and love exploring the outdoors through traveling and trekking adventures across Nepal.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
