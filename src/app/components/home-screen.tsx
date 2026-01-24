import { Search, Hash } from "lucide-react";

interface HomeScreenProps {
  onSearchByNumber: () => void;
  onSearchByName: () => void;
}

export function HomeScreen({ onSearchByNumber, onSearchByName }: HomeScreenProps) {
  return (
    <div className="scrollbar-app flex-1 min-h-0 bg-white flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-y-auto overflow-x-hidden">
      {/* Background decorative element */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-5"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M50 10 L50 90 M10 50 L90 50\' stroke=\'%23C9A958\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '200px'
        }}
      />

      <div className="z-10 flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 w-full max-w-md py-6">
        {/* Church Logo */}
        <div className="flex justify-center mb-2">
          <img 
            src="/logo.png" 
            alt="Iglesia Cristiana Bíblica de Fusagasugá" 
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* App Title */}
        <h1 className="text-center font-['Roboto'] text-[18px] sm:text-[24px] text-[#000000] mb-2">
          Himnario Suplementario - ICB Fusagasugá
        </h1>

        {/* Search by Number Button */}
        <button
          onClick={onSearchByNumber}
          className="bg-white border-2 border-[#C9A958] rounded-lg p-5 sm:p-8 shadow-md hover:shadow-lg hover:bg-[#C9A958]/5 transition-all flex flex-col items-center gap-3 sm:gap-4 group"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#C9A958] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Hash className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
          </div>
          <span className="font-['Roboto'] text-[16px] sm:text-[18px] text-[#000000]">
            Buscar por Número
          </span>
        </button>

        {/* Search by Name Button */}
        <button
          onClick={onSearchByName}
          className="bg-white border-2 border-[#C9A958] rounded-lg p-5 sm:p-8 shadow-md hover:shadow-lg hover:bg-[#C9A958]/5 transition-all flex flex-col items-center gap-3 sm:gap-4 group"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#C9A958] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Search className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
          </div>
          <span className="font-['Roboto'] text-[16px] sm:text-[18px] text-[#000000]">
            Buscar por Nombre
          </span>
        </button>
      </div>

      {/* Inspirational quote */}
      <div className="mt-auto pt-6 pb-6 sm:pb-8 z-10 text-center px-4">
        <p className="font-['Lora'] text-[14px] sm:text-[16px] italic text-[#333333]/70">
          "Canta con gracia en tu corazón"
        </p>
      </div>
    </div>
  );
}