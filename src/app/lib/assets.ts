import { Capacitor } from '@capacitor/core';

/**
 * Obtiene la ruta base correcta dependiendo del entorno:
 * - Capacitor (Android/iOS): rutas relativas desde la raíz "/"
 * - Web en GitHub Pages: "/Himnario_Suplementario/"
 * - Web en desarrollo: "/"
 */
export function getBasePath(): string {
  // Si es app nativa de Capacitor, usar ruta raíz
  if (Capacitor.isNativePlatform()) {
    return '/';
  }
  
  // Si es web, usar la variable de entorno de Vite
  return import.meta.env.BASE_URL || '/';
}

/**
 * Obtiene la URL completa de un asset (audio, imagen, etc.)
 */
export function getAssetUrl(path: string): string {
  const basePath = getBasePath();
  // Eliminar "/" inicial del path si existe para evitar doble "/"
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${basePath}${cleanPath}`;
}
