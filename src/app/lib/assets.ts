import { Capacitor } from '@capacitor/core';

/**
 * Obtiene la URL de un asset con la lógica correcta:
 * - Android (Capacitor): rutas absolutas desde la raíz del assets
 * - Web: rutas relativas que funcionan tanto en desarrollo como en GitHub Pages
 */
export function getAssetUrl(path: string): string {
  // Eliminar "/" inicial del path si existe
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;

  // En Android/Capacitor, usar rutas absolutas desde la raíz de assets
  if (Capacitor.isNativePlatform()) {
    return `/${cleanPath}`;
  }

  // En web, usar rutas relativas (funciona con base: './')
  return cleanPath;
}
