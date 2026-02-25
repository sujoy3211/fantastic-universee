import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

interface MusicPlayerProps {
  shouldPlay: boolean;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const MusicPlayer = ({ shouldPlay }: MusicPlayerProps) => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [apiReady, setApiReady] = useState(false);

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setApiReady(true);
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => setApiReady(true);
  }, []);

  // Create player when API is ready and shouldPlay
  useEffect(() => {
    if (!apiReady || !shouldPlay || playerRef.current) return;

    playerRef.current = new window.YT.Player("yt-player", {
      videoId: "EatzcaVJRMs",
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: "EatzcaVJRMs",
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
      },
      events: {
        onReady: (event: any) => {
          event.target.setVolume(40);
          event.target.playVideo();
        },
      },
    });
  }, [apiReady, shouldPlay]);

  const toggleMute = useCallback(() => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }
    setIsMuted(!isMuted);
  }, [isMuted]);

  if (!shouldPlay) return null;

  return (
    <>
      {/* Hidden YouTube player */}
      <div className="fixed -top-[9999px] -left-[9999px] w-0 h-0 overflow-hidden">
        <div id="yt-player" ref={containerRef} />
      </div>

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
    </>
  );
};

export default MusicPlayer;
