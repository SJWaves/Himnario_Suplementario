import { useState } from "react";
import { X, Search, Hash } from "lucide-react";

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
      <div className="bg-white rounded-2xl w-full max-w-[min(90vw,420px)] overflow-hidden shadow-2xl mx-auto border border-gray-200">
        {/* Header */}
        <div className="bg-[#000000] text-white px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Hash className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A958] flex-shrink-0" />
            <h2 className="font-['Roboto'] text-base sm:text-lg md:text-xl font-medium">Buscar Himno</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#C9A958]/20 rounded-lg transition-colors flex-shrink-0"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          {/* Input Section */}
          <div className="bg-gray-50 border-l-4 border-[#C9A958] p-4 sm:p-5 rounded-r-lg space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <Hash className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A958] flex-shrink-0" />
              <h3 className="font-['Roboto'] text-sm sm:text-base text-[#333333] font-medium">
                Número del Himno
              </h3>
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
              className="w-full bg-white border-2 border-[#C9A958] rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-center font-['Roboto'] text-2xl sm:text-3xl md:text-4xl text-[#333333] focus:outline-none focus:border-[#B8984A] focus:ring-2 focus:ring-[#C9A958]/20 transition-all"
            />
            
            <p className="text-center text-xs sm:text-sm text-gray-500 font-['Roboto']">
              Ingrese el número del himno que desea buscar
            </p>
          </div>

          {/* Number Pad */}
          <div className="space-y-2.5 sm:space-y-3">
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 md:gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <button
                  key={num}
                  onClick={() => handleNumberClick(num.toString())}
                  className="bg-white border-2 border-gray-200 hover:border-[#C9A958] hover:bg-[#C9A958]/5 rounded-xl py-3 sm:py-4 md:py-5 font-['Roboto'] text-xl sm:text-2xl md:text-3xl font-medium text-[#333333] transition-all duration-200 touch-manipulation min-h-[3rem] sm:min-h-[3.5rem]"
                >
                  {num}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 md:gap-3">
              <button
                onClick={handleClear}
                className="bg-white border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 rounded-xl py-3 sm:py-4 font-['Roboto'] text-sm sm:text-base font-medium text-red-600 transition-all duration-200 touch-manipulation"
              >
                Limpiar
              </button>
              <button
                onClick={() => handleNumberClick("0")}
                className="bg-white border-2 border-gray-200 hover:border-[#C9A958] hover:bg-[#C9A958]/5 rounded-xl py-3 sm:py-4 font-['Roboto'] text-xl sm:text-2xl md:text-3xl font-medium text-[#333333] transition-all duration-200 touch-manipulation"
              >
                0
              </button>
              <button
                onClick={handleSearch}
                disabled={!input}
                className="bg-[#C9A958] hover:bg-[#B8984A] active:bg-[#A88739] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl py-3 sm:py-4 font-['Roboto'] text-sm sm:text-base font-medium transition-all duration-200 touch-manipulation flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg disabled:shadow-none"
              >
                <Search className="w-4 h-4 flex-shrink-0" />
                <span>Buscar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}