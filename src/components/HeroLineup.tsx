import { motion } from "framer-motion";
import HeroCard from "./HeroCard";
import { Brain, Shield, BookOpen, Sparkles } from "lucide-react";

const heroes = [
  {
    name: "SUJOY",
    title: "The Brain",
    bio: "The Strategic Architect. Thinking 10 steps ahead while everyone else is still at the start.",
    glowClass: "box-glow-blue",
    textGlowClass: "text-glow-blue",
    colorClass: "text-neon-blue",
    icon: <Brain className="w-full h-full" />,
    delay: 0,
  },
  {
    name: "SANDIP",
    title: "The Strongest",
    bio: "The Unstoppable Force. The muscle and the shield of the group.",
    glowClass: "box-glow-red",
    textGlowClass: "text-glow-red",
    colorClass: "text-neon-red",
    icon: <Shield className="w-full h-full" />,
    delay: 0.15,
  },
  {
    name: "PAPU",
    title: "The Smartest",
    bio: "The Human Encyclopedia. If knowledge is power, he is a nuclear reactor.",
    glowClass: "box-glow-green",
    textGlowClass: "text-glow-green",
    colorClass: "text-neon-green",
    icon: <BookOpen className="w-full h-full" />,
    delay: 0.3,
  },
  {
    name: "ARIJIT",
    title: "Clever & Funny",
    bio: "The Chaos Master. Half-genius, half-comedian, 100% unpredictable.",
    glowClass: "box-glow-gold",
    textGlowClass: "text-glow-gold",
    colorClass: "text-neon-gold",
    icon: <Sparkles className="w-full h-full" />,
    delay: 0.45,
  },
];

const HeroLineup = () => {
  return (
    <section className="relative py-24 px-4 md:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground text-glow-blue">
          THE HERO LINEUP
        </h2>
        <p className="font-body text-lg text-muted-foreground mt-3 tracking-widest uppercase">
          Meet the legends
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {heroes.map((hero) => (
          <HeroCard key={hero.name} {...hero} />
        ))}
      </div>
    </section>
  );
};

export default HeroLineup;
