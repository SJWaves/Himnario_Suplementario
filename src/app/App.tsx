import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import { App as CapacitorApp } from "@capacitor/app";
import { AppBar } from "./components/app-bar";
import { HomeScreen } from "./components/home-screen";
import { NumberSearchModal } from "./components/number-search-modal";
import { NameSearchScreen } from "./components/name-search-screen";
import { HymnDetailScreen } from "./components/hymn-detail-screen";
import { SideMenu } from "./components/side-menu";
import { SettingsScreen } from "./components/settings-screen";
import { AboutScreen } from "./components/about-screen";
import { hymnsData } from "@/data/hymns";
import type { FontFamily } from "./lib/fonts";
import { DEFAULT_FONT } from "./lib/fonts";
import { FavoritesScreen } from "./components/favorites-screen";
import { appStorage } from "./lib/storage";

type Screen = "home" | "name-search" | "hymn-detail" | "settings" | "favorites" | "about";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [selectedHymnId, setSelectedHymnId] = useState<number | null>(null);
  
  // User preferences - usa sessionStorage en web y localStorage en app nativa
  const [favorites, setFavorites] = useState<number[]>(() => {
    const stored = appStorage.getItem("hymnario-favorites");
    return stored ? JSON.parse(stored) : [];
  });
  
  const [fontSize, setFontSize] = useState(() => {
    const stored = appStorage.getItem("hymnario-fontsize");
    return stored ? parseInt(stored) : 18;
  });
  
  const [fontFamily, setFontFamily] = useState<FontFamily>(() => {
    const stored = appStorage.getItem("hymnario-fontfamily");
    const valid: FontFamily[] = ["modern", "classic", "opensans", "merriweather", "playfair", "source"];
    if (stored && valid.includes(stored as FontFamily)) return stored as FontFamily;
    return DEFAULT_FONT;
  });
  
  const [colorMode, setColorMode] = useState<"light" | "dark" | "sepia">(() => {
    const stored = appStorage.getItem("hymnario-colormode");
    return (stored as "light" | "dark" | "sepia") || "light";
  });

  // Save preferences
  useEffect(() => {
    appStorage.setItem("hymnario-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    appStorage.setItem("hymnario-fontsize", fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    appStorage.setItem("hymnario-fontfamily", fontFamily);
  }, [fontFamily]);

  useEffect(() => {
    appStorage.setItem("hymnario-colormode", colorMode);
  }, [colorMode]);

  // Manejar el botón de atrás de Android y gestos de navegación
  useEffect(() => {
    const handleBackButton = () => {
      // Si hay un modal abierto, cerrarlo
      if (isNumberModalOpen) {
        setIsNumberModalOpen(false);
        return;
      }
      
      if (isSideMenuOpen) {
        setIsSideMenuOpen(false);
        return;
      }

      // Si estamos en home, salir de la app
      if (currentScreen === "home") {
        CapacitorApp.exitApp();
        return;
      }

      // En cualquier otra pantalla, volver a home
      handleGoHome();
    };

    // Registrar el listener para el botón de atrás
    CapacitorApp.addListener("backButton", handleBackButton);

    // Cleanup
    return () => {
      CapacitorApp.removeAllListeners();
    };
  }, [currentScreen, isNumberModalOpen, isSideMenuOpen]);

  const handleSearchByNumber = (number: number) => {
    const hymn = hymnsData.find(h => h.id === number);
    if (hymn) {
      setSelectedHymnId(number);
      setCurrentScreen("hymn-detail");
    } else {
      toast.error(`Himno #${number} no encontrado`);
    }
    setIsNumberModalOpen(false);
  };

  const handleSelectHymn = (hymnId: number) => {
    setSelectedHymnId(hymnId);
    setCurrentScreen("hymn-detail");
  };

  const toggleFavorite = (hymnId: number) => {
    const hymn = hymnsData.find(h => h.id === hymnId);
    setFavorites(prev => {
      const isCurrentlyFavorite = prev.includes(hymnId);
      if (isCurrentlyFavorite) {
        toast.info(`"${hymn?.title}" removido de favoritos`);
        return prev.filter(id => id !== hymnId);
      } else {
        toast.success(`"${hymn?.title}" añadido a favoritos`);
        return [...prev, hymnId];
      }
    });
  };

  const handleGoHome = () => {
    setCurrentScreen("home");
    setSelectedHymnId(null);
  };

  const handleShowFavorites = () => setCurrentScreen("favorites");

  const selectedHymn = selectedHymnId
    ? hymnsData.find(h => h.id === selectedHymnId)
    : null;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* App Bar */}
      {(currentScreen === "home") && (
        <AppBar onMenuClick={() => setIsSideMenuOpen(true)} />
      )}

      {/* Main Content */}
      {currentScreen === "home" && (
        <HomeScreen
          onSearchByNumber={() => setIsNumberModalOpen(true)}
          onSearchByName={() => setCurrentScreen("name-search")}
        />
      )}

      {currentScreen === "name-search" && (
        <NameSearchScreen
          hymns={hymnsData}
          onBack={handleGoHome}
          onSelectHymn={handleSelectHymn}
        />
      )}

      {currentScreen === "hymn-detail" && selectedHymn && (
        <HymnDetailScreen
          hymn={selectedHymn}
          isFavorite={favorites.includes(selectedHymn.id)}
          onBack={handleGoHome}
          onToggleFavorite={() => toggleFavorite(selectedHymn.id)}
          fontSize={fontSize}
          fontFamily={fontFamily}
          colorMode={colorMode}
        />
      )}

      {currentScreen === "settings" && (
        <SettingsScreen
          onBack={handleGoHome}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
          fontFamily={fontFamily}
          onFontFamilyChange={setFontFamily}
          colorMode={colorMode}
          onColorModeChange={setColorMode}
        />
      )}

      {currentScreen === "favorites" && (
        <FavoritesScreen
          favorites={favorites}
          hymns={hymnsData}
          onBack={handleGoHome}
          onSelectHymn={handleSelectHymn}
        />
      )}

      {currentScreen === "about" && (
        <AboutScreen onBack={handleGoHome} />
      )}

      {/* Modals */}
      <NumberSearchModal
        isOpen={isNumberModalOpen}
        onClose={() => setIsNumberModalOpen(false)}
        onSearch={handleSearchByNumber}
      />

      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
        favoritesCount={favorites.length}
        onShowFavorites={handleShowFavorites}
        onShowSettings={() => setCurrentScreen("settings")}
        onShowAbout={() => setCurrentScreen("about")}
        onGoHome={handleGoHome}
      />
      <Toaster />
    </div>
  );
}