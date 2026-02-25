import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fullText =
  "We aren't just friends; we are a brotherhood forged in roasts, late nights, and zero logic. Four powers, one heartbeat.";

const BrotherhoodSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section className="relative py-24 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setStarted(true)}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground text-glow-red">
            OUR BOND
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-3 tracking-widest uppercase">
            The Brotherhood
          </p>
        </motion.div>

        <div className="glassmorphism rounded-2xl p-8 md:p-14">
          <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed text-center">
            {displayedText}
            <span
              className="inline-block w-0.5 h-6 ml-1 bg-primary align-middle"
              style={{ animation: "typewriter-blink 1s step-end infinite" }}
            />
          </p>

          <motion.div
            className="mt-10 flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3 }}
          >
            {["💙", "❤️", "💚", "💛"].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-3xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrotherhoodSection;
