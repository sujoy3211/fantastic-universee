import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.h1
          className="font-display text-6xl md:text-9xl tracking-wider text-foreground text-glow-blue"
          initial={{ scale: 0.3, opacity: 0, z: -500 }}
          animate={{ scale: 1, opacity: 1, z: 0 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
          style={{ perspective: 1000 }}
        >
          THE FANTASTIC FOUR
        </motion.h1>

        <motion.div
          className="mt-6 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="h-px w-16 bg-neon-blue opacity-60" />
          <p className="font-body text-lg md:text-2xl text-muted-foreground tracking-[0.3em] uppercase">
            Legends Never Die
          </p>
          <span className="h-px w-16 bg-neon-blue opacity-60" />
        </motion.div>

        <motion.div
          className="mt-10 flex gap-3 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          {[
            { label: "The Brain", color: "text-neon-blue" },
            { label: "The Strongest", color: "text-neon-red" },
            { label: "The Smartest", color: "text-neon-green" },
            { label: "The Clever", color: "text-neon-gold" },
          ].map((item, i) => (
            <span
              key={i}
              className={`font-display text-sm md:text-base tracking-widest ${item.color} opacity-70`}
            >
              {item.label}
              {i < 3 && <span className="text-muted-foreground mx-2">•</span>}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-body text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
