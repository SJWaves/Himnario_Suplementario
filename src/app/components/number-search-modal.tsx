import { useState } from "react";
import { X, Delete } from "lucide-react";

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

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-[360px] sm:max-w-sm overflow-hidden shadow-xl mx-auto">
        {/* Header */}
        <div className="bg-[#000000] text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
          <h2 className="font-['Roboto'] text-[16px] sm:text-[18px]">Buscar Himno</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#C9A958]/20 rounded transition-colors flex-shrink-0"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Display */}
        <div className="bg-white px-4 sm:px-6 py-6 sm:py-8 border-b border-gray-200">
          <div className="bg-white border-2 border-[#C9A958] rounded-lg px-3 sm:px-4 py-3 sm:py-4 min-h-[50px] sm:min-h-[60px] flex items-center justify-end">
            <span className="font-['Roboto'] text-[28px] sm:text-[32px] text-[#333333]">
              {input || "0"}
            </span>
          </div>
        </div>

        {/* Numpad */}
        <div className="p-3 sm:p-4 grid grid-cols-3 gap-2 sm:gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-white hover:bg-[#C9A958]/10 active:bg-[#C9A958]/20 border border-gray-300 rounded-lg py-3 sm:py-4 font-['Roboto'] text-[20px] sm:text-[24px] text-[#333333] transition-colors touch-manipulation"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="bg-white hover:bg-red-50 active:bg-red-100 border border-gray-300 rounded-lg py-3 sm:py-4 font-['Roboto'] text-[16px] sm:text-[18px] text-red-600 transition-colors touch-manipulation"
          >
            C
          </button>
          <button
            onClick={() => handleNumberClick("0")}
            className="bg-white hover:bg-[#C9A958]/10 active:bg-[#C9A958]/20 border border-gray-300 rounded-lg py-3 sm:py-4 font-['Roboto'] text-[20px] sm:text-[24px] text-[#333333] transition-colors touch-manipulation"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="bg-white hover:bg-orange-50 active:bg-orange-100 border border-gray-300 rounded-lg py-3 sm:py-4 flex items-center justify-center transition-colors touch-manipulation"
          >
            <Delete className="w-5 h-5 sm:w-6 sm:h-6 text-[#333333]" />
          </button>
        </div>

        {/* Search Button */}
        <div className="p-3 sm:p-4 pt-0">
          <button
            onClick={handleSearch}
            disabled={!input}
            className="w-full bg-[#C9A958] hover:bg-[#B8984A] active:bg-[#A88739] disabled:bg-gray-300 disabled:cursor-not-allowed text-black py-3 sm:py-4 rounded-lg font-['Roboto'] text-[16px] sm:text-[18px] transition-colors touch-manipulation"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}