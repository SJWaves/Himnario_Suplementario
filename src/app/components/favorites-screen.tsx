import { ArrowLeft, Heart } from "lucide-react";
import { Hymn } from "@/data/hymns";

interface FavoritesScreenProps {
  favorites: number[];
  hymns: Hymn[];
  onBack: () => void;
  onSelectHymn: (hymnId: number) => void;
}

export function FavoritesScreen({
  favorites,
  hymns,
  onBack,
  onSelectHymn,
}: FavoritesScreenProps) {
  const favoriteHymns = hymns.filter((h) => favorites.includes(h.id));

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white">
      <div className="bg-[#000000] text-white px-4 py-4 flex items-center gap-4 flex-shrink-0">
        <button
          onClick={onBack}
          className="p-2 hover:bg-[#C9A958]/20 rounded transition-colors"
          aria-label="Volver"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="flex-1 font-['Roboto'] text-[18px]">Favoritos</h2>
      </div>

      <div className="scrollbar-app flex-1 min-h-0 overflow-y-auto pb-20">
        {favoriteHymns.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[200px] px-6 text-center">
            <Heart className="w-12 h-12 text-[#C9A958]/40 mb-4" />
            <p className="text-gray-500 font-['Roboto'] text-[16px]">
              No hay himnos en Favoritos
            </p>
            <p className="text-gray-400 font-['Roboto'] text-[14px] mt-1">
              Añade himnos desde la pantalla del himno con el ícono de corazón.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {favoriteHymns.map((hymn) => (
              <button
                key={hymn.id}
                onClick={() => onSelectHymn(hymn.id)}
                className="w-full px-4 py-4 hover:bg-[#C9A958]/5 transition-colors flex items-start gap-4 text-left"
              >
                <div className="w-12 h-12 bg-[#C9A958] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-['Roboto']">{hymn.id}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-['Lora'] text-[16px] text-[#333333]">
                    {hymn.title}
                  </h3>
                  {hymn.reference && (
                    <p className="text-[14px] text-gray-500 font-['Roboto'] italic mt-1">
                      {hymn.reference}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
