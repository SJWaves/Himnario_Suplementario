import { X, Heart, Settings, Home, Info } from "lucide-react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  favoritesCount: number;
  onShowFavorites: () => void;
  onShowSettings: () => void;
  onShowAbout: () => void;
  onGoHome: () => void;
}

export function SideMenu({
  isOpen,
  onClose,
  favoritesCount,
  onShowFavorites,
  onShowSettings,
  onShowAbout,
  onGoHome,
}: SideMenuProps) {
  if (!isOpen) return null;

  const handleHome = () => {
    onGoHome();
    onClose();
  };
  const handleFavorites = () => {
    onShowFavorites();
    onClose();
  };
  const handleSettings = () => {
    onShowSettings();
    onClose();
  };
  const handleAbout = () => {
    onShowAbout();
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 flex flex-col min-h-0 shadow-xl">
        <div className="bg-[#000000] text-white px-4 py-4 flex items-center justify-between">
          <h2 className="font-['Roboto'] text-[18px]">Menú</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#C9A958]/20 rounded transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="scrollbar-app flex-1 min-h-0 overflow-y-auto pb-20">
          <button
            onClick={handleHome}
            className="w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-100 transition-colors border-b border-gray-200"
          >
            <Home className="w-5 h-5 text-[#C9A958]" />
            <span className="font-['Roboto'] text-[16px] text-[#333333]">
              Inicio
            </span>
          </button>

          <button
            onClick={handleFavorites}
            className="w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-100 transition-colors border-b border-gray-200"
          >
            <Heart className="w-5 h-5 text-[#C9A958] fill-[#C9A958]" />
            <span className="font-['Roboto'] text-[16px] text-[#333333]">
              Favoritos{favoritesCount > 0 ? ` (${favoritesCount})` : ""}
            </span>
          </button>

          <button
            onClick={handleSettings}
            className="w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-100 transition-colors border-b border-gray-200"
          >
            <Settings className="w-5 h-5 text-[#C9A958]" />
            <span className="font-['Roboto'] text-[16px] text-[#333333]">
              Ajustes
            </span>
          </button>

          <button
            onClick={handleAbout}
            className="w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-100 transition-colors border-b border-gray-200"
          >
            <Info className="w-5 h-5 text-[#C9A958]" />
            <span className="font-['Roboto'] text-[16px] text-[#333333]">
              Acerca de
            </span>
          </button>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-center text-[12px] text-gray-500 font-['Roboto']">
            Himnario Suplementario v1.1.1
          </p>
        </div>
      </div>
    </>
  );
}