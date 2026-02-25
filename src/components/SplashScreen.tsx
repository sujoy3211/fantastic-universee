import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onEnter: () => void;
  visible: boolean;
}

const SplashScreen = ({ onEnter, visible }: SplashScreenProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Starfield dots */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-foreground"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <motion.h1
            className="font-display text-5xl md:text-8xl tracking-wider text-foreground text-glow-blue mb-4 text-center"
            initial={{ scale: 0.3, opacity: 0, rotateX: 45 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            style={{ perspective: 1000 }}
          >
            THE FANTASTIC FOUR
          </motion.h1>

          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground mb-12 tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Four Powers. One Heartbeat.
          </motion.p>

          <motion.button
            onClick={onEnter}
            className="relative font-display text-xl md:text-2xl tracking-widest px-10 py-4 rounded-lg border-2 border-primary text-primary bg-transparent btn-vibrate transition-all duration-300 hover:bg-primary hover:text-primary-foreground box-glow-blue"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ENTER THE UNIVERSE
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
