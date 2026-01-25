import { Capacitor } from '@capacitor/core';

/**
 * Storage adapter que usa localStorage para apps nativas (persistente)
 * y sessionStorage para web (temporal por sesión).
 * 
 * Esto evita que diferentes usuarios compartan configuración en la web,
 * mientras mantiene la personalización en la app móvil.
 */
const isNativeApp = Capacitor.isNativePlatform();
const storage = isNativeApp ? localStorage : sessionStorage;

export const appStorage = {
  getItem: (key: string): string | null => {
    return storage.getItem(key);
  },
  
  setItem: (key: string, value: string): void => {
    storage.setItem(key, value);
  },
  
  removeItem: (key: string): void => {
    storage.removeItem(key);
  },
  
  clear: (): void => {
    storage.clear();
  }
};
