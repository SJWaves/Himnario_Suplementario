export type FontFamily =
  | "modern"
  | "classic"
  | "opensans"
  | "merriweather"
  | "playfair"
  | "source";

export const FONT_CLASSES: Record<FontFamily, string> = {
  modern: "font-['Roboto']",
  classic: "font-['Lora']",
  opensans: "font-open-sans",
  merriweather: "font-merriweather",
  playfair: "font-playfair",
  source: "font-source-serif",
};

export const FONT_LABELS: Record<FontFamily, { name: string; sample: string }> = {
  modern: { name: "Roboto (moderna)", sample: "Aa Bb Cc" },
  classic: { name: "Lora (clásica)", sample: "Aa Bb Cc" },
  opensans: { name: "Open Sans", sample: "Aa Bb Cc" },
  merriweather: { name: "Merriweather", sample: "Aa Bb Cc" },
  playfair: { name: "Playfair Display", sample: "Aa Bb Cc" },
  source: { name: "Source Serif 4", sample: "Aa Bb Cc" },
};

export const DEFAULT_FONT: FontFamily = "classic";

export function getFontClass(f: FontFamily): string {
  return FONT_CLASSES[f] ?? FONT_CLASSES.classic;
}
