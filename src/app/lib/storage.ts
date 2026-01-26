import { Capacitor } from '@capacitor/core';

/**
 * Storage adapter que usa localStorage para persistencia en web y app nativa.
 * Las configuraciones se guardan localmente en cada navegador/dispositivo.
 */
const isNativeApp = Capacitor.isNativePlatform();
const storage = localStorage; // Siempre usa localStorage para persistencia

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
