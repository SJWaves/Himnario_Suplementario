/**
 * Obtiene la URL de un asset usando rutas relativas.
 * Con base: './' en vite.config.ts, los assets funcionan tanto en:
 * - Android/iOS nativo (Capacitor)
 * - GitHub Pages en subdirectorio
 * - Desarrollo local
 */
export function getAssetUrl(path: string): string {
  // Eliminar "/" inicial del path si existe
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  // Con base: './' en vite, simplemente retornar el path limpio
  return cleanPath;
}
