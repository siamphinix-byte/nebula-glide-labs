import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="absolute top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-full md:max-w-7xl z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center font-bold text-white shadow-lg">
          B
        </div>
        <span className="font-bold text-xl tracking-tight text-white">BrandoFriar</span>
      </Link>
      
      <div className="flex justify-end items-center">
         <Link to="/login" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-[0_0_15px_rgba(122,60,245,0.4)] hover:shadow-[0_0_25px_rgba(122,60,245,0.6)]">
            Login
         </Link>
      </div>
    </nav>
  );
}
