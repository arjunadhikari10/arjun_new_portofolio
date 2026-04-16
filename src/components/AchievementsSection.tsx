import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star } from "lucide-react";

type MedalType = "gold" | "silver" | "bronze" | "special";

interface Achievement {
  medal: MedalType;
  title: string;
  event: string;
  year: string;
}

const medalConfig: Record<MedalType, { emoji: string; color: string; bg: string; border: string }> = {
  gold: { emoji: "🥇", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
  silver: { emoji: "🥈", color: "text-gray-300", bg: "bg-gray-300/10", border: "border-gray-300/30" },
  bronze: { emoji: "🥉", color: "text-amber-600", bg: "bg-amber-600/10", border: "border-amber-600/30" },
  special: { emoji: "🏆", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
};

const achievements: Achievement[] = [
  { medal: "gold", title: "Winner – Sankalpa-2025 Model Making", event: "Sankalpa 2025", year: "2025" },
  { medal: "gold", title: "Winner – Cross Connect Clash", event: "Nirmaan ISCE 2025, India", year: "2025" },
  { medal: "gold", title: "1st Place – Civil Engineering Hackathon", event: "National Level", year: "2024" },
  { medal: "gold", title: "1st Place – National-Level Ideathon", event: "National Level", year: "2024" },
  { medal: "gold", title: "1st Place – Mix Design Competition", event: "Orbit Expo", year: "2024" },
  { medal: "silver", title: "2nd Place – Geotechnical Model Competition", event: "Inter-Campus", year: "2024" },
  { medal: "silver", title: "2nd Place – Mix Design Competition", event: "KEC", year: "2024" },
  { medal: "silver", title: "2nd Place – Model Competition", event: "Thapathali Campus", year: "2024" },
  { medal: "bronze", title: "3rd Place – Model Competition", event: "KEC", year: "2024" },
  { medal: "special", title: "Popular Choice Award", event: "LOCUS", year: "2024" },
];

type FilterType = "all" | "gold" | "silver" | "bronze";

const AchievementsSection = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered = filter === "all"
    ? achievements
    : achievements.filter((a) => a.medal === filter || (filter !== "gold" && filter !== "silver" && filter !== "bronze" ? a.medal === "special" : false));

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "🥇 Gold", value: "gold" },
    { label: "🥈 Silver", value: "silver" },
    { label: "🥉 Bronze", value: "bronze" },
  ];

  return (
    <section id="achievements" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs mb-3">Honors</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">Achievements</span> & Awards
          </h2>

          {/* Filter */}
          <div className="flex gap-2 justify-center flex-wrap">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 rounded-full text-sm font-heading font-medium transition-all ${
                  filter === f.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:border-primary/30 border border-border"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((a, i) => {
            const config = medalConfig[a.medal];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                layout
                className={`group p-5 rounded-2xl border ${config.border} ${config.bg} hover:scale-[1.03] hover:glow transition-all duration-300 cursor-default`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{config.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-sm font-semibold leading-tight mb-1">
                      {a.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">{a.event}</p>
                    <p className={`text-xs font-heading mt-1 ${config.color}`}>{a.year}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
