import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroCardProps {
  name: string;
  title: string;
  bio: string;
  glowClass: string;
  textGlowClass: string;
  colorClass: string;
  icon: ReactNode;
  delay: number;
}

const HeroCard = ({ name, title, bio, glowClass, textGlowClass, colorClass, icon, delay }: HeroCardProps) => {
  return (
    <motion.div
      className={`relative group rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8 overflow-hidden transition-all duration-500 hover:scale-105 ${glowClass}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        {icon}
      </div>

      <div className="relative z-10">
        <motion.div
          className={`text-4xl md:text-5xl mb-3 ${colorClass}`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: delay * 2 }}
        >
          {icon}
        </motion.div>

        <h3 className={`font-display text-3xl md:text-4xl tracking-wider mb-1 ${textGlowClass}`}>
          {name}
        </h3>
        <p className={`font-display text-lg tracking-widest ${colorClass} opacity-80 mb-4`}>
          {title}
        </p>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          {bio}
        </p>
      </div>

      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-xl ${colorClass} border-current opacity-40`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-xl ${colorClass} border-current opacity-40`} />
    </motion.div>
  );
};

export default HeroCard;
