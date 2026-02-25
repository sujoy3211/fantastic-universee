import { useEffect, useRef } from "react";

interface MusicPlayerProps {
  shouldPlay: boolean;
}

const MusicPlayer = ({ shouldPlay }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.play().catch(err => console.log("Playback blocked:", err));
    }
  }, [shouldPlay]);

  return (
    <audio ref={audioRef} src="/music.mp3" loop />
  );
};

export default MusicPlayer;