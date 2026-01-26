import { useState, useMemo } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { Hymn } from "@/data/hymns";

interface NameSearchScreenProps {
  hymns: Hymn[];
  onBack: () => void;
  onSelectHymn: (hymnId: number) => void;
}

export function NameSearchScreen({ hymns, onBack, onSelectHymn }: NameSearchScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHymns = useMemo(() => {
    if (!searchQuery.trim()) return hymns;
    
    const query = searchQuery.toLowerCase();
    return hymns.filter(hymn => 
      hymn.title.toLowerCase().includes(query) ||
      hymn.id.toString().includes(query)
    );
  }, [hymns, searchQuery]);

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white">
      {/* Header */}
      <div className="bg-[#000000] text-white px-4 py-4 flex items-center gap-4 flex-shrink-0">
        <button
          onClick={onBack}
          className="p-2 hover:bg-[#C9A958]/20 rounded transition-colors"
          aria-label="Volver"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="flex-1 font-['Roboto'] text-[18px]">Buscar Himno</h2>
      </div>

      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200 flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nombre o número..."
            className="w-full pl-10 pr-4 py-3 border-2 border-[#C9A958]/40 rounded-lg focus:outline-none focus:border-[#C9A958] font-['Roboto']"
          />
        </div>
      </div>

      {/* Hymns List */}
      <div className="scrollbar-app flex-1 min-h-0 overflow-y-auto pb-20">
        {filteredHymns.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 font-['Roboto']">
              No se encontraron himnos
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredHymns.map(hymn => (
              <button
                key={hymn.id}
                onClick={() => onSelectHymn(hymn.id)}
                className="w-full px-4 py-4 hover:bg-[#C9A958]/5 transition-colors flex items-start gap-4 text-left"
              >
                <div className="w-12 h-12 bg-[#C9A958] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-['Roboto']">
                    {hymn.id}
                  </span>
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