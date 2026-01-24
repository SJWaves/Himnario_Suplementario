import { useState } from "react";
import { X, Delete, Search, Hash } from "lucide-react";

interface NumberSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (number: number) => void;
}

export function NumberSearchModal({ isOpen, onClose, onSearch }: NumberSearchModalProps) {
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleNumberClick = (num: string) => {
    setInput(prev => prev + num);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput(prev => prev.slice(0, -1));
  };

  const handleSearch = () => {
    const number = parseInt(input);
    if (number > 0) {
      onSearch(number);
      setInput("");
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input) {
      handleSearch();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl w-full max-w-[380px] sm:max-w-md overflow-hidden shadow-2xl mx-auto border border-[#C9A958]/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#000000] to-[#1a1a1a] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hash className="w-5 h-5 text-[#C9A958]" />
            <h2 className="font-['Roboto'] text-[17px] sm:text-[19px] font-medium">Buscar por Número</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#C9A958]/20 rounded-lg transition-colors flex-shrink-0"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Display */}
        <div className="bg-gradient-to-b from-white to-gray-50 px-5 sm:px-6 py-6 sm:py-7">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Hash className="w-5 h-5 text-[#C9A958]" />
            </div>
            <input
              type="text"
              inputMode="numeric"
              value={input}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setInput(value);
              }}
              onKeyPress={handleKeyPress}
              placeholder="Ingrese número..."
              className="w-full bg-white border-2 border-[#C9A958] rounded-xl pl-11 pr-4 py-4 text-center font-['Roboto'] text-[28px] sm:text-[32px] text-[#333333] focus:outline-none focus:border-[#B8984A] focus:ring-2 focus:ring-[#C9A958]/20 transition-all shadow-sm"
            />
          </div>
          <p className="text-center text-[12px] sm:text-[13px] text-gray-500 font-['Roboto'] mt-3">
            Ingrese el número del himno que desea buscar
          </p>
        </div>

        {/* Numpad */}
        <div className="px-4 sm:px-5 pb-4">
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                className="bg-white hover:bg-[#C9A958] active:bg-[#B8984A] border-2 border-gray-200 hover:border-[#C9A958] rounded-xl py-4 sm:py-5 font-['Roboto'] text-[22px] sm:text-[26px] font-medium text-[#333333] hover:text-white transition-all duration-200 touch-manipulation shadow-sm hover:shadow-md"
              >
                {num}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-4">
            <button
              onClick={handleClear}
              className="bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 active:from-red-200 active:to-red-300 border-2 border-red-200 rounded-xl py-3 sm:py-4 font-['Roboto'] text-[15px] sm:text-[17px] font-medium text-red-700 transition-all duration-200 touch-manipulation shadow-sm hover:shadow-md"
            >
              Limpiar
            </button>
            <button
              onClick={() => handleNumberClick("0")}
              className="bg-white hover:bg-[#C9A958] active:bg-[#B8984A] border-2 border-gray-200 hover:border-[#C9A958] rounded-xl py-3 sm:py-4 font-['Roboto'] text-[22px] sm:text-[26px] font-medium text-[#333333] hover:text-white transition-all duration-200 touch-manipulation shadow-sm hover:shadow-md"
            >
              0
            </button>
            <button
              onClick={handleDelete}
              className="bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 active:from-orange-200 active:to-orange-300 border-2 border-orange-200 rounded-xl py-3 sm:py-4 flex items-center justify-center transition-all duration-200 touch-manipulation shadow-sm hover:shadow-md"
            >
              <Delete className="w-5 h-5 sm:w-6 sm:h-6 text-orange-700" />
            </button>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            disabled={!input}
            className="w-full bg-gradient-to-r from-[#C9A958] to-[#B8984A] hover:from-[#B8984A] hover:to-[#A88739] active:from-[#A88739] active:to-[#988736] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white py-4 sm:py-5 rounded-xl font-['Roboto'] text-[17px] sm:text-[19px] font-medium transition-all duration-200 touch-manipulation shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            <span>Buscar Himno</span>
          </button>
        </div>
      </div>
    </div>
  );
}