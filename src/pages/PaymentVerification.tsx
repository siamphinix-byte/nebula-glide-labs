import { Reveal } from '../components/GSAPWrapper';
import { Clock, Building2, Copy, FileText, LayoutDashboard, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PaymentVerification() {
  return (
    <main className="flex-grow flex items-center justify-center min-h-screen pt-24 pb-12 px-6 bg-brand-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 -right-20 w-[500px] h-[500px] bg-[#ebd356]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl w-full relative z-10">
        <Reveal>
          <div className="bg-brand-surface/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">
            
            {/* Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ebd356]/10 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Status Icon */}
              <div className="w-20 h-20 bg-[#ebd356]/10 rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(235,211,86,0.3)] animate-pulse">
                <Clock className="w-10 h-10 text-[#ebd356]" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Awaiting Verification</h1>
              <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-12">
                Your order is secured. Complete the wire transfer to the architectural coordinates below to finalize your brand package.
              </p>

              {/* Order Summary Bento */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <div className="bg-[#09030b]/60 p-6 rounded-2xl text-left border border-white/5 border-l-4 border-l-brand-primary shadow-inner">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Order Details</span>
                  <h3 className="text-xl font-bold text-white">Growth Package</h3>
                  <p className="text-xs text-white/50 mt-1 font-mono">ID: #BF-99281-XT</p>
                </div>
                <div className="bg-[#09030b]/60 p-6 rounded-2xl text-left border border-white/5 flex flex-col justify-between shadow-inner">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1 block">Total Amount</span>
                      <span className="text-3xl font-bold text-white tracking-tight">$2,450.00</span>
                    </div>
                    <span className="bg-[#ebd356]/20 text-[#ebd356] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#ebd356]/30 shadow-[0_0_10px_rgba(235,211,86,0.3)]">Pending</span>
                  </div>
                </div>
              </div>

              {/* Bank Transfer Instructions */}
              <div className="w-full text-left bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h4 className="text-white font-semibold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-[#ebd356]/20 rounded-lg">
                    <Building2 className="text-[#ebd356] w-5 h-5" />
                  </div>
                  Wire Instructions
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Bank Name</label>
                    <div className="text-white font-medium text-sm">Global Commerce Bank</div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Account Name</label>
                    <div className="text-white font-medium text-sm">BrandFriar Ecosystem</div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Account Number</label>
                    <div className="flex items-center justify-between group cursor-pointer bg-[#09030b]/40 py-2 px-3 rounded-lg border border-white/5 hover:border-white/20 transition-all">
                      <span className="text-brand-teal font-medium font-mono tracking-widest">0098 1122 4433</span>
                      <Copy className="text-white/40 group-hover:text-brand-teal transition-colors w-4 h-4" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Routing / SWIFT</label>
                    <div className="flex items-center justify-between group cursor-pointer bg-[#09030b]/40 py-2 px-3 rounded-lg border border-white/5 hover:border-white/20 transition-all">
                      <span className="text-brand-teal font-medium font-mono tracking-widest">GCBKNYSWXXX</span>
                      <Copy className="text-white/40 group-hover:text-brand-teal transition-colors w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Reference Code Highlight */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="bg-[#ebd356]/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#ebd356]/20 shadow-[0_0_20px_rgba(235,211,86,0.1)]">
                    <div>
                      <label className="text-[10px] font-bold text-[#ebd356] uppercase tracking-widest mb-1 block">Mandatory Reference Code</label>
                      <p className="text-xs text-white/60">Include this code in your transfer to avoid delays.</p>
                    </div>
                    <div className="flex items-center gap-3 bg-[#09030b] px-6 py-3 rounded-xl border border-[#ebd356]/40 cursor-copy group">
                      <span className="text-xl font-bold text-[#ebd356] tracking-widest font-mono">FRIAR-99281</span>
                      <Copy className="text-[#ebd356]/50 group-hover:text-[#ebd356] transition-colors w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-12 w-full flex flex-col gap-4">
                <Link to="/dashboard" className="w-full py-4 rounded-xl border border-[#ebd356]/50 text-[#ebd356] font-bold tracking-tight hover:bg-[#ebd356]/10 transition-all active:scale-[0.98] duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(235,211,86,0.2)]">
                  I've Completed the Transfer
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-3 rounded-xl bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/5">
                    <FileText className="w-4 h-4" />
                    Download Invoice
                  </button>
                  <Link to="/dashboard" className="py-3 rounded-xl bg-transparent border border-white/20 text-white/70 font-medium text-sm hover:text-white hover:border-white/40 transition-all flex items-center justify-center gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    Back to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        
        <footer className="mt-12 text-center text-white/40 font-mono text-[10px] tracking-widest uppercase">
          Verifications process automatically • Support: billing@brandfriar.com
        </footer>
      </div>
    </main>
  );
}
