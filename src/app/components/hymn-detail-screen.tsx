import { ArrowLeft, Heart, Share2, Play, Pause } from "lucide-react";
import { Hymn } from "@/data/hymns";
import { AudioPlayer } from "./audio-player";
import type { FontFamily } from "../lib/fonts";
import { getFontClass } from "../lib/fonts";
import { useState, useRef, useEffect } from "react";

interface HymnDetailScreenProps {
  hymn: Hymn;
  isFavorite: boolean;
  onBack: () => void;
  onToggleFavorite: () => void;
  fontSize: number;
  fontFamily: FontFamily;
  colorMode: "light" | "dark" | "sepia";
}

export function HymnDetailScreen({
  hymn,
  isFavorite,
  onBack,
  onToggleFavorite,
  fontSize,
  fontFamily,
  colorMode,
}: HymnDetailScreenProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleShare = () => {
    const hymnText = `${hymn.title} - Himno #${hymn.id}${hymn.reference ? ` (${hymn.reference})` : ''}\n\n${hymn.verses.join('\n\n')}`;
    
    if (navigator.share) {
      navigator.share({
        title: hymn.title,
        text: hymnText,
      }).catch(() => {});
    } else {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText(hymnText).then(() => {
        alert('Letra copiada al portapapeles');
      }).catch(() => {});
    }
  };

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const getBgColor = () => {
    switch (colorMode) {
      case "dark":
        return "bg-[#1a1a1a]";
      case "sepia":
        return "bg-[#f4ecd8]";
      default:
        return "bg-white";
    }
  };

  const getTextColor = () => {
    switch (colorMode) {
      case "dark":
        return "text-white";
      case "sepia":
        return "text-[#5c4a3a]";
      default:
        return "text-[#333333]";
    }
  };

  const getHeaderBgColor = () => {
    return colorMode === "dark" ? "bg-[#000000]" : "bg-[#000000]";
  };

  const font = getFontClass(fontFamily);

  return (
    <div className={`flex-1 flex flex-col min-h-0 ${getBgColor()}`}>
      {/* Header */}
      <div className={`${getHeaderBgColor()} text-white px-4 py-4 flex items-center gap-2 sm:gap-3 flex-shrink-0`}>
        <button
          onClick={onBack}
          className="p-2 hover:bg-[#C9A958]/20 rounded transition-colors flex-shrink-0"
          aria-label="Volver"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span className="flex-1 font-['Roboto'] text-base sm:text-lg min-w-0 truncate">
          Himno #{hymn.id}
        </span>
        {hymn.audioUrl && (
          <button
            onClick={togglePlay}
            className="p-2 hover:bg-[#C9A958]/20 rounded-full transition-colors flex-shrink-0"
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current" />
            )}
          </button>
        )}
        <button
          onClick={onToggleFavorite}
          className="p-2 hover:bg-[#C9A958]/20 rounded transition-colors flex-shrink-0"
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          <Heart
            className={`w-6 h-6 ${isFavorite ? "fill-[#C9A958] text-[#C9A958]" : ""}`}
          />
        </button>
        <button
          onClick={handleShare}
          className="p-2 hover:bg-[#C9A958]/20 rounded transition-colors flex-shrink-0"
          aria-label="Compartir letra"
        >
          <Share2 className="w-6 h-6" />
        </button>
      </div>

      {/* Barra de progreso de audio */}
      {hymn.audioUrl && (
        <>
          <AudioPlayer audioUrl={hymn.audioUrl} colorMode={colorMode} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          <audio ref={audioRef} src={hymn.audioUrl} />
        </>
      )}

      {/* Content: scrollable area so long hymns + large font don't cut off */}
      <div
        className="scrollbar-app flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain pb-32"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="px-6 py-8 max-w-3xl mx-auto">
          {/* Title */}
          <h1
            className={`text-center ${font} ${getTextColor()} mb-2`}
            style={{ fontSize: `${fontSize + 6}px` }}
          >
            {hymn.title}
          </h1>

          {/* Reference */}
          {hymn.reference && (
            <p
              className={`text-center italic ${getTextColor()} opacity-70 mb-8`}
              style={{ fontSize: `${fontSize - 2}px` }}
            >
              {hymn.reference}
            </p>
          )}

          {/* Verses */}
          <div className="space-y-8">
            {hymn.verses.map((verse: string, index: number) => {
              // Detectar si es un coro (marcado con *Coro*)
              const isChorus = verse.trim().startsWith('*Coro*');
              const verseText = isChorus ? verse.replace('*Coro*', 'Coro') : verse;
              
              return (
                <div key={index} className="text-center">
                  <p
                    className={`${font} ${getTextColor()} whitespace-pre-line leading-relaxed ${
                      isChorus ? 'italic font-medium' : ''
                    }`}
                    style={{ fontSize: `${fontSize}px`, lineHeight: "1.8" }}
                  >
                    {verseText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}