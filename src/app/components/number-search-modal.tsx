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
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl mx-auto border border-gray-200">
        {/* Header */}
        <div className="bg-[#000000] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Hash className="w-6 h-6 text-[#C9A958]" />
            <h2 className="font-['Roboto'] text-[18px] sm:text-[20px] font-medium">Buscar Himno</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#C9A958]/20 rounded-lg transition-colors flex-shrink-0"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Input Section */}
          <div className="bg-gray-50 border-l-4 border-[#C9A958] p-5 rounded-r-lg space-y-4">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-[#C9A958]" />
              <h3 className="font-['Roboto'] text-[16px] text-[#333333] font-medium">
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
              className="w-full bg-white border-2 border-[#C9A958] rounded-lg px-4 py-4 text-center font-['Roboto'] text-[32px] text-[#333333] focus:outline-none focus:border-[#B8984A] focus:ring-2 focus:ring-[#C9A958]/20 transition-all"
            />
            
            <p className="text-center text-[13px] text-gray-500 font-['Roboto']">
              Ingrese el número del himno que desea buscar
            </p>
          </div>

          {/* Number Pad */}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <button
                  key={num}
                  onClick={() => handleNumberClick(num.toString())}
                  className="bg-white border-2 border-gray-200 hover:border-[#C9A958] hover:bg-[#C9A958]/5 rounded-xl py-4 font-['Roboto'] text-[24px] font-medium text-[#333333] transition-all duration-200 touch-manipulation"
                >
                  {num}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={handleClear}
                className="bg-white border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 rounded-xl py-3 font-['Roboto'] text-[15px] font-medium text-red-600 transition-all duration-200 touch-manipulation"
              >
                Limpiar
              </button>
              <button
                onClick={() => handleNumberClick("0")}
                className="bg-white border-2 border-gray-200 hover:border-[#C9A958] hover:bg-[#C9A958]/5 rounded-xl py-3 font-['Roboto'] text-[24px] font-medium text-[#333333] transition-all duration-200 touch-manipulation"
              >
                0
              </button>
              <button
                onClick={handleDelete}
                className="bg-white border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 rounded-xl py-3 font-['Roboto'] text-[15px] font-medium text-orange-600 transition-all duration-200 touch-manipulation"
              >
                Borrar
              </button>
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            disabled={!input}
            className="w-full bg-[#C9A958] hover:bg-[#B8984A] active:bg-[#A88739] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg font-['Roboto'] text-[17px] font-medium transition-all duration-200 touch-manipulation flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:shadow-none"
          >
            <Search className="w-5 h-5" />
            <span>Buscar Himno</span>
          </button>
        </div>
      </div>
    </div>
  );
}