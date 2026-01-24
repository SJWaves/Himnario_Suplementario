import { ArrowLeft } from "lucide-react";
import type { FontFamily } from "../lib/fonts";
import {
  FONT_LABELS,
  FONT_CLASSES,
  getFontClass,
} from "../lib/fonts";

interface SettingsScreenProps {
  onBack: () => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  fontFamily: FontFamily;
  onFontFamilyChange: (family: FontFamily) => void;
  colorMode: "light" | "dark" | "sepia";
  onColorModeChange: (mode: "light" | "dark" | "sepia") => void;
}

export function SettingsScreen({
  onBack,
  fontSize,
  onFontSizeChange,
  fontFamily,
  onFontFamilyChange,
  colorMode,
  onColorModeChange,
}: SettingsScreenProps) {
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white">
      {/* Header */}
      <div className="bg-[#000000] text-white px-4 py-4 flex items-center gap-4 flex-shrink-0">
        <button
          onClick={onBack}
          className="p-2 hover:bg-[#C9A958]/20 rounded transition-colors"
          aria-label="Volver"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="flex-1 font-['Roboto'] text-[18px]">Ajustes</h2>
      </div>

      {/* Settings Content */}
      <div className="scrollbar-app flex-1 min-h-0 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-6 py-8 space-y-8">
          {/* Font Family */}
          <div>
            <h3 className="font-['Roboto'] text-[18px] text-[#333333] mb-4">
              Tipo de Fuente
            </h3>
            <div className="space-y-3">
              {(Object.keys(FONT_LABELS) as FontFamily[]).map((key) => (
                <button
                  key={key}
                  onClick={() => onFontFamilyChange(key)}
                  className={`w-full px-4 sm:px-6 py-3 rounded-lg border-2 transition-all ${
                    fontFamily === key
                      ? "border-[#C9A958] bg-[#C9A958]/5"
                      : "border-gray-300 hover:border-[#C9A958]/50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 text-left">
                    <p className="font-['Roboto'] text-[14px] sm:text-[15px] text-[#333333] min-w-0 flex-1">
                      {FONT_LABELS[key].name}
                    </p>
                    <p
                      className={`${getFontClass(key)} text-[14px] sm:text-[16px] text-gray-500 flex-shrink-0`}
                    >
                      {FONT_LABELS[key].sample}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 className="font-['Roboto'] text-[16px] sm:text-[18px] text-[#333333]">
                Tamaño de Texto
              </h3>
              <span className="font-['Roboto'] text-[14px] sm:text-[16px] text-[#C9A958] font-medium">
                {fontSize}px
              </span>
            </div>
            <input
              type="range"
              min="14"
              max="30"
              value={fontSize}
              onChange={(e) => onFontSizeChange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #C9A958 0%, #C9A958 ${((fontSize - 14) / (30 - 14)) * 100}%, #d1d5db ${((fontSize - 14) / (30 - 14)) * 100}%, #d1d5db 100%)`
              }}
            />
            <div className="flex justify-between mt-2">
              <span className="text-[12px] text-gray-500 font-['Roboto']">
                Pequeño
              </span>
              <span className="text-[12px] text-gray-500 font-['Roboto']">
                Grande
              </span>
            </div>
          </div>

          {/* Color Mode */}
          <div>
            <h3 className="font-['Roboto'] text-[18px] text-[#333333] mb-4">
              Modo de Color
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => onColorModeChange("light")}
                className={`px-4 py-6 rounded-lg border-2 transition-all ${
                  colorMode === "light"
                    ? "border-[#C9A958] bg-[#C9A958]/5"
                    : "border-gray-300 hover:border-[#C9A958]/50"
                }`}
              >
                <div className="w-full h-12 bg-white border border-gray-300 rounded mb-3" />
                <p className="font-['Roboto'] text-[14px] text-[#333333]">
                  Luz
                </p>
              </button>

              <button
                onClick={() => onColorModeChange("dark")}
                className={`px-4 py-6 rounded-lg border-2 transition-all ${
                  colorMode === "dark"
                    ? "border-[#C9A958] bg-[#C9A958]/5"
                    : "border-gray-300 hover:border-[#C9A958]/50"
                }`}
              >
                <div className="w-full h-12 bg-[#1a1a1a] border border-gray-700 rounded mb-3" />
                <p className="font-['Roboto'] text-[14px] text-[#333333]">
                  Noche
                </p>
              </button>

              <button
                onClick={() => onColorModeChange("sepia")}
                className={`px-4 py-6 rounded-lg border-2 transition-all ${
                  colorMode === "sepia"
                    ? "border-[#C9A958] bg-[#C9A958]/5"
                    : "border-gray-300 hover:border-[#C9A958]/50"
                }`}
              >
                <div className="w-full h-12 bg-[#f4ecd8] border border-[#c4b59e] rounded mb-3" />
                <p className="font-['Roboto'] text-[14px] text-[#333333]">
                  Sepia
                </p>
              </button>
            </div>
          </div>

          {/* Preview */}
          <div>
            <h3 className="font-['Roboto'] text-[18px] text-[#333333] mb-4">
              Vista Previa
            </h3>
            <div
              className={`p-6 rounded-lg border-2 border-gray-300 ${
                colorMode === "dark"
                  ? "bg-[#1a1a1a]"
                  : colorMode === "sepia"
                  ? "bg-[#f4ecd8]"
                  : "bg-white"
              }`}
            >
              <p
                className={`text-center ${getFontClass(fontFamily)} ${
                  colorMode === "dark"
                    ? "text-white"
                    : colorMode === "sepia"
                    ? "text-[#5c4a3a]"
                    : "text-[#333333]"
                } whitespace-pre-line`}
                style={{ fontSize: `${fontSize}px`, lineHeight: "1.8" }}
              >
                Alabaré, alabaré,{"\n"}Alabaré a mi Señor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}