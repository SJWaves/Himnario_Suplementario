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

      <div className="z-10 flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 w-full max-w-lg py-8">
        {/* Church Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Iglesia Cristiana Bíblica de Fusagasugá" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* App Title */}
        <h1 className="text-center font-['Lora'] text-2xl sm:text-3xl md:text-4xl text-[#000000] italic font-medium mb-4">
          Himnario Suplementario
          <br />
          <span className="text-xl sm:text-2xl md:text-3xl">ICB Fusagasugá</span>
        </h1>

        {/* Search by Number Button */}
        <button
          onClick={onSearchByNumber}
          className="w-full bg-white border-2 border-[#C9A958] rounded-xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl hover:bg-[#C9A958]/5 transition-all flex flex-col items-center gap-4 sm:gap-5 group"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#C9A958] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
            <Hash className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black" />
          </div>
          <span className="font-['Roboto'] text-lg sm:text-xl md:text-2xl text-[#000000] font-medium">
            Buscar por Número
          </span>
        </button>

        {/* Search by Name Button */}
        <button
          onClick={onSearchByName}
          className="w-full bg-white border-2 border-[#C9A958] rounded-xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl hover:bg-[#C9A958]/5 transition-all flex flex-col items-center gap-4 sm:gap-5 group"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#C9A958] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
            <Search className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black" />
          </div>
          <span className="font-['Roboto'] text-lg sm:text-xl md:text-2xl text-[#000000] font-medium">
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