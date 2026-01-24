import { useState, useRef, useEffect, RefObject } from "react";
import { App as CapacitorApp } from "@capacitor/app";

interface AudioPlayerProps {
  audioUrl: string;
  colorMode: "light" | "dark" | "sepia";
  audioRef: RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export function AudioPlayer({ audioUrl, colorMode, audioRef, isPlaying, setIsPlaying }: AudioPlayerProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Pausar audio cuando la app se va al background o se cierra la pestaña
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    const handleBeforeUnload = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };

    // Para navegadores web
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Para Capacitor (apps nativas)
    let appStateListener: any;
    if ((window as any).Capacitor) {
      CapacitorApp.addListener("appStateChange", ({ isActive }) => {
        if (!isActive && audioRef.current && isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }).then(listener => {
        appStateListener = listener;
      });
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (appStateListener) {
        appStateListener.remove();
      }
    };
  }, [isPlaying]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full h-1 relative bg-gray-200 cursor-pointer hover:h-1.5 transition-all">
      <div 
        className="h-full bg-[#C9A958] transition-all"
        style={{ width: `${progress}%` }}
      />
      <input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={handleSeek}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        style={{ zIndex: 10 }}
        aria-label="Barra de progreso del audio"
      />
    </div>
  );
}