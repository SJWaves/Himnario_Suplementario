import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { App as CapacitorApp } from "@capacitor/app";

interface AudioPlayerProps {
  audioUrl: string;
  colorMode: "light" | "dark" | "sepia";
}

export function AudioPlayer({ audioUrl, colorMode }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

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
    if (window.Capacitor) {
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

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const getBgColor = () => {
    switch (colorMode) {
      case "dark":
        return "bg-[#000000] border-[#C9A958]";
      case "sepia":
        return "bg-[#e8dcc0] border-[#c4b59e]";
      default:
        return "bg-white border-gray-200";
    }
  };

  const getTextColor = () => {
    switch (colorMode) {
      case "dark":
        return "text-white";
      case "sepia":
        return "text-[#5c4a3a]";
      default:
        return "text-[#000000]";
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`fixed bottom-0 left-0 right-0 ${getBgColor()} border-t shadow-lg`}>
      <div className="px-3 sm:px-4 py-2 sm:py-3 max-w-2xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Play Button - compacto */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-[#C9A958] hover:bg-[#B8984A] rounded-full flex items-center justify-center transition-colors shadow"
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-black fill-black" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-black fill-black ml-0.5" />
            )}
          </button>
          {/* Progress + times */}
          <div className="flex-1 min-w-0">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-0.5 sm:h-1 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #C9A958 0%, #C9A958 ${progress}%, #d1d5db ${progress}%, #d1d5db 100%)`
              }}
            />
            <div className={`flex justify-between mt-0.5 text-[10px] sm:text-[12px] ${getTextColor()}`}>
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
}