import { motion } from "framer-motion";
import { Mail, LinkedinIcon, GithubIcon, FacebookIcon, InstagramIcon } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/arjunadhikari10/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/arjunadhikari10", label: "GitHub" },
  { icon: Facebook, href: "https://www.facebook.com/geneius.b.arjun/", label: "Facebook" },
  { icon: Instagram, href: "https://github.com/arjunadhikari10", label: "Instagram" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Contact</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-muted-foreground">Got something on your mind? I'd love to hear from you.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/xgegdvzv"
          method="POST"
          className="space-y-4 mb-16"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <textarea
            name="msg"
            placeholder="Your message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-heading font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </motion.form>

        {/* Socials */}
        <div className="flex justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={s.label}
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
