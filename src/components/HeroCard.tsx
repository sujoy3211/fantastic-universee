import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  glowClass: string;
  textGlowClass: string;
  colorClass: string;
  icon?: ReactNode;
  delay: number;
}

const HeroCard = ({ name, title, image, bio, glowClass, textGlowClass, colorClass,  delay }: HeroCardProps) => {
  return (
    <motion.div
      className={`relative group rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8 overflow-hidden transition-all duration-500 hover:scale-105 ${glowClass}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      {/* Photo Background Fix */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
        />
        {/* Subtle gradient so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

     {/* This container pushes the text to the bottom so your faces are clear */}
      <div className="relative z-10 p-6 flex flex-col min-h-[480px] justify-end">
        <motion.div
          className={`text-4xl md:text-5xl mb-3 ${colorClass}`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: delay * 2 }}
        >
          {/* We leave this empty because we removed the icons! */}
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
    </motion.div>
  );
};

export default HeroCard;