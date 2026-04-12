import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arjunadhikari10/" },
  { label: "GitHub", href: "https://github.com/arjunadhikari10" },
  { label: "Facebook", href: "https://www.facebook.com/geneius.b.arjun/" },
  { label: "Instagram", href: "https://github.com/arjunadhikari10" },
];

const contactInfo = [
  { icon: Phone, label: "+977 9866021174", href: "tel:+9779866021174" },
  { icon: Mail, label: "078bce028.arjun@pcampus.edu.np", href: "mailto:078bce028.arjun@pcampus.edu.np" },
  { icon: MapPin, label: "Pokhara, Nepal", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Whether it's research collaboration, project inquiry, or just a friendly hello — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-5"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:glow transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-5 h-5" />
                </div>
                <span className="text-sm text-foreground font-medium">{info.label}</span>
              </motion.a>
            ))}

            {/* Socials */}
            <div className="pt-4">
              <p className="text-xs text-muted-foreground font-heading uppercase tracking-widest mb-3">Follow me</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors border border-border"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            action="https://formspree.io/f/xgegdvzv"
            method="POST"
            className="md:col-span-3 space-y-4 p-6 rounded-2xl border border-border bg-card"
          >
            <h3 className="font-heading text-lg font-semibold mb-2 flex items-center gap-2">
              <Send className="w-4 h-4 text-primary" /> Send a Message
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              name="msg"
              placeholder="Your message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-heading font-medium tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
