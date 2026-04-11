import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";

const travels = [
  {
    title: "Annapurna Base Camp Trek",
    location: "Annapurna Region",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80",
  },
  {
    title: "Poonhill Trek",
    location: "Ghorepani, Myagdi",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  },
  {
    title: "Kaligandaki Corridor Field Visit",
    location: "Kaligandaki Valley",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    title: "Mardi Base Camp Trek",
    location: "Mardi Himal",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
  },
  {
    title: "Bangalore Trip",
    location: "Representing Nepal 🇳🇵",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80",
  },
];

const TravellingSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="travelling" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Adventures</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            My <span className="text-gradient">Travels</span>
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
          {travels.map((travel, i) => (
            <motion.div
              key={travel.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid mb-4 group cursor-pointer relative rounded-2xl overflow-hidden"
              onClick={() => setSelected(i)}
            >
              <img
                src={travel.image}
                alt={travel.title}
                className={`w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ${
                  i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-64" : "h-72"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex flex-col justify-end p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground">{travel.title}</h3>
                <p className="text-primary text-sm flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" /> {travel.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={travels[selected].image}
                alt={travels[selected].title}
                className="w-full max-h-[75vh] object-contain rounded-2xl"
              />
              <div className="text-center mt-4">
                <h3 className="font-heading text-xl font-semibold">{travels[selected].title}</h3>
                <p className="text-primary text-sm mt-1">{travels[selected].location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TravellingSection;
