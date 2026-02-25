import { motion } from "framer-motion";
import { useState } from "react";

const memories = [
  { id: 1, caption: "Happy Birthday Swastika । Alp । Kashmiri Naan । সেই রাত মনে আছে ? 🫢", image: "/that.jpg" },
  { id: 2, caption: "Late Night spending - গাজ্ন মেলা ", image: "/this.jpg" },
  { id: 3, caption: "After this photo , the group created : Fantastic four 😍", image: "/when.jpg" },
  { id: 4, caption: "Brothers From another mothers", image: "/jug.jpg" },
  { id: 5, caption: "No Alcohol - গাছে হাত দেবেন না 🙊", image: "/kol.jpg" },
  { id: 6, caption: "সেই ঐতিহাসিক কালীপূজার রাত 💀", image: "/cool.jpg" },
];

const MemoryVault = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground text-glow-gold">
          THE MEMORY VAULT
        </h2>
        <p className="font-body text-lg text-muted-foreground mt-3 tracking-widest uppercase">
          Moments frozen in time
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {memories.map((memory, i) => (
            <motion.div
              key={memory.id}
              className="flex-shrink-0 snap-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredId(memory.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <motion.div
                className="relative w-56 md:w-64 bg-card border border-border rounded-sm p-3 pb-14"
                style={{
                  rotate: i % 2 === 0 ? -3 : 3,
                  boxShadow: hoveredId === memory.id
                    ? "0 0 30px hsl(var(--neon-gold) / 0.4)"
                    : "0 4px 20px hsl(var(--background) / 0.5)",
                }}
                whileHover={{ rotate: 0, scale: 1.08, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
               {/* Photo Display Section */}
<div className="w-full aspect-square bg-secondary rounded-sm overflow-hidden">
  {memory.image ? (
    <img 
      src={memory.image} 
      alt={memory.caption} 
      className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
    />
  ) : (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="text-4xl mb-2">📸</div>
      <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">
        Add your photo
      </p>
    </div>
  )}
</div>

                {/* Caption */}
                <p className="absolute bottom-4 left-0 right-0 text-center font-body text-sm text-muted-foreground tracking-wide">
                  {memory.caption}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryVault;
