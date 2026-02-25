import { useState } from "react";
import nebulaBg from "@/assets/nebula-bg.jpg";
import SplashScreen from "@/components/SplashScreen";
import MusicPlayer from "@/components/MusicPlayer";
import HeroSection from "@/components/HeroSection";
import HeroLineup from "@/components/HeroLineup";
import MemoryVault from "@/components/MemoryVault";
import BrotherhoodSection from "@/components/BrotherhoodSection";
import { motion } from "framer-motion";

const Index = () => {
  const [entered, setEntered] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const handleEnter = () => {
    setShowSplash(false);
    setTimeout(() => setEntered(true), 300);
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Parallax nebula background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${nebulaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.35,
        }}
      />

      {/* Overlay gradient */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

      <SplashScreen visible={showSplash} onEnter={handleEnter} />
      <MusicPlayer shouldPlay={entered} />

      {entered && (
        <motion.main
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
          <HeroLineup />
          <MemoryVault />
          <BrotherhoodSection />

          {/* Footer */}
          <footer className="py-12 text-center">
            <p className="font-display text-xl tracking-widest text-muted-foreground">
              THE FANTASTIC FOUR © 2026
            </p>
            <p className="font-body text-sm text-muted-foreground mt-2 opacity-60">
              Four Powers. One Heartbeat. Forever.
            </p>
          </footer>
        </motion.main>
      )}
    </div>
  );
};

export default Index;
