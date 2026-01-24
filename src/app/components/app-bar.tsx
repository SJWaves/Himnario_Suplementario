import { Menu } from "lucide-react";

interface AppBarProps {
  onMenuClick: () => void;
}

export function AppBar({ onMenuClick }: AppBarProps) {
  return (
    <div className="bg-[#000000] text-white px-4 py-3 flex items-center shadow-md">
      <button 
        onClick={onMenuClick}
        className="p-2 hover:bg-[#C9A958]/20 rounded transition-colors flex-shrink-0"
        aria-label="Abrir menú"
      >
        <Menu className="w-6 h-6" />
      </button>
      <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 min-w-0">
        <img 
          src="/logo.png" 
          alt="Logo ICB Fusagasugá" 
          className="h-8 sm:h-10 w-auto flex-shrink-0 object-contain"
          onError={(e) => {
            console.error('Error loading logo');
            e.currentTarget.style.display = 'none';
          }}
        />
        <h1 className="font-['Roboto'] text-[14px] sm:text-[18px] md:text-[20px] truncate">
          Himnario Suplementario
        </h1>
      </div>
      <div className="w-10 flex-shrink-0" /> {/* Spacer for centering */}
    </div>
  );
}