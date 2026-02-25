import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

interface MusicPlayerProps {
  shouldPlay: boolean;
}

const MusicPlayer = ({ shouldPlay }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        "https://pagalfree.com/musics/128-Tera%20Yaar%20Hoon%20Main%20-%20Sonu%20Ke%20Titu%20Ki%20Sweety%20128%20Kbps.mp3"
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }
  }, []);

  useEffect(() => {
    if (shouldPlay && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [shouldPlay, isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!shouldPlay) return null;

  return (
    <motion.button
      onClick={toggleMute}
      className="fixed top-6 right-6 z-40 p-3 rounded-full glassmorphism text-primary btn-vibrate transition-colors hover:text-accent"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      aria-label={isMuted ? "Unmute music" : "Mute music"}
    >
      {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
    </motion.button>
  );
};

export default MusicPlayer;
