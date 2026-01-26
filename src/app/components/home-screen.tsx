import { Search, Hash } from "lucide-react";

interface HomeScreenProps {
  onSearchByNumber: () => void;
  onSearchByName: () => void;
}

export function HomeScreen({ onSearchByNumber, onSearchByName }: HomeScreenProps) {
  return (
    <div className="scrollbar-app flex-1 min-h-0 bg-white flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden">
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

      <div className="z-10 flex flex-col items-center justify-center gap-3 sm:gap-4 w-full max-w-lg">
        {/* Hymnal Logo */}
        <div className="flex justify-center">
          <img 
            src={`${import.meta.env.BASE_URL}Logo_Himnario.png`}
            alt="Himnario Suplementario" 
            className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* App Title */}
        <h1 className="text-center font-['Lora'] text-xl sm:text-2xl md:text-3xl text-[#000000] italic font-medium">
          Himnario Suplementario
          <br />
          <span className="text-lg sm:text-xl md:text-2xl">ICB Fusagasugá</span>
        </h1>

        {/* Search by Number Button */}
        <button
          onClick={onSearchByNumber}
          className="w-full bg-white border-2 border-[#C9A958] rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl hover:bg-[#C9A958]/5 transition-all flex flex-col items-center gap-3 group"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#C9A958] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
            <Hash className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
          </div>
          <span className="font-['Roboto'] text-base sm:text-lg md:text-xl text-[#000000] font-medium">
            Buscar por Número
          </span>
        </button>

        {/* Search by Name Button */}
        <button
          onClick={onSearchByName}
          className="w-full bg-white border-2 border-[#C9A958] rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl hover:bg-[#C9A958]/5 transition-all flex flex-col items-center gap-3 group"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#C9A958] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
            <Search className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
          </div>
          <span className="font-['Roboto'] text-base sm:text-lg md:text-xl text-[#000000] font-medium">
            Buscar por Nombre
          </span>
        </button>

        {/* Inspirational quote */}
        <div className="z-10 text-center px-4 mt-4">
          <p className="font-['Lora'] text-[13px] sm:text-[14px] italic text-[#333333]/70">
            "Canta con gracia en tu corazón"
          </p>
        </div>
      </div>
    </div>
  );
}