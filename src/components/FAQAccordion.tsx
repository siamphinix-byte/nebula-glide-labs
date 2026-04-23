import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

interface FAQProps {
  question: string;
  answer: string;
  isDark?: boolean;
}

export function FAQAccordion({ question, answer, isDark = false }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b py-6 ${isDark ? 'border-white/10' : 'border-[#09030b]/10'}`}>
      <button 
        className="w-full flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-lg md:text-xl font-bold font-sans transition-colors ${isDark ? 'text-white group-hover:text-brand-primary' : 'text-[#222] group-hover:text-brand-primary'}`}>
          {question}
        </h3>
        <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? `border-brand-primary text-brand-primary bg-brand-primary/5` : `${isDark ? 'border-white/20 text-white/50' : 'border-[#09030b]/20 text-[#09030b]/50'} group-hover:border-brand-primary group-hover:text-brand-primary`}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className={`leading-relaxed pr-12 ${isDark ? 'text-white/70' : 'text-[#555]'}`}>
          {answer}
        </p>
      </div>
    </div>
  );
}
