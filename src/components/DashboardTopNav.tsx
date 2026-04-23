import { Search, Bell, Mail } from 'lucide-react';
import React from 'react';

export function DashboardTopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 h-24 flex items-center justify-between pl-[100px] lg:pl-[300px] pr-4 sm:pr-8 lg:pr-12 w-full bg-[#0e0e0e]/90 backdrop-blur-xl z-40 transition-all duration-300 pointer-events-none">
      <div className="flex-1 flex items-center pointer-events-auto">
        <div className="relative w-full max-w-sm lg:max-w-lg group flex items-center">
          <Search className="absolute left-4 sm:left-6 w-5 h-5 text-white/30 group-focus-within:text-[#bbf600] transition-colors pointer-events-none" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#1c1b1b] border-2 border-transparent rounded-full py-3 sm:py-4 pl-12 sm:pl-14 pr-12 sm:pr-16 text-[14px] sm:text-[15px] font-medium text-white focus:ring-[#bbf600]/30 focus:border-[#bbf600]/30 placeholder:text-white/30 transition-all outline-none"
          />
          <div className="absolute right-4 bg-white/5 text-white/50 text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded border border-white/5 hidden sm:block">
            ⌘ F
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto">
        <button className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1c1b1b] flex items-center justify-center border border-white/5 text-white/60 hover:text-[#bbf600] hover:bg-[#201f1f] transition-all">
          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1c1b1b] flex items-center justify-center border border-white/5 text-white/60 hover:text-[#bbf600] hover:bg-[#201f1f] transition-all">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3.5 w-2 h-2 bg-[#bbf600] rounded-full shadow-[0_0_8px_#bbf600]"></span>
        </button>
        
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border border-white/10 ml-1 sm:ml-2 transition-transform hover:scale-105 cursor-pointer bg-[#201f1f] flex items-center justify-center">
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=d4bbff" alt="Profile" className="w-full h-full object-cover scale-150 transform translate-y-1" referrerPolicy="no-referrer" />
        </div>
      </div>
    </header>
  );
}
