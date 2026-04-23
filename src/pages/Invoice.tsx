import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Download, Printer, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Invoice() {
  return (
    <main className="flex-grow pt-32 pb-20 px-6 flex justify-center min-h-screen bg-brand-bg">
      <div className="max-w-3xl w-full bg-brand-surface rounded-[2rem] shadow-2xl overflow-hidden p-12 lg:p-16 border border-white/5 relative">
        
        {/* Aesthetic Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-teal/5 blur-[80px] -z-10 rounded-full" />

        {/* Header Section */}
        <Reveal direction="down">
          <header className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-10">
            <div>
              <div className="text-3xl font-extrabold tracking-tighter text-brand-primary mb-2 shadow-[0_0_15px_rgba(122,60,245,0.4)] px-2 -mx-2 inline-block rounded-lg">BrandFriar</div>
              <div className="text-white/60 text-[10px] font-medium tracking-[0.2em] uppercase">Studio Ecosystem</div>
            </div>
            <div className="md:text-right">
              <h1 className="text-5xl font-black tracking-tighter text-white mb-8 drop-shadow-md">INVOICE</h1>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between md:justify-end gap-8">
                  <span className="text-white/40 uppercase tracking-widest font-semibold text-[10px]">Invoice #</span>
                  <span className="text-white font-medium">BF-2026-001</span>
                </div>
                <div className="flex justify-between md:justify-end gap-8">
                  <span className="text-white/40 uppercase tracking-widest font-semibold text-[10px]">Date</span>
                  <span className="text-white font-medium">Oct 12, 2026</span>
                </div>
                <div className="flex justify-between md:justify-end gap-8 bg-brand-primary/10 p-2 rounded-lg border border-brand-primary/20">
                  <span className="text-brand-primary uppercase tracking-widest font-bold text-[10px]">Due</span>
                  <span className="text-white font-bold">Oct 26, 2026</span>
                </div>
              </div>
            </div>
          </header>
        </Reveal>

        {/* Address Blocks */}
        <Reveal>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 shadow-inner">
              <h3 className="text-[10px] uppercase tracking-widest text-[#ebd356] font-bold mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ebd356]"></div>
                Bill To
              </h3>
              <div className="text-white">
                <p className="font-bold text-xl mb-1 tracking-tight">Alex Rivera</p>
                <p className="text-brand-teal/80 text-sm font-medium mb-3">alex@venture.com</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Venture Dynamics Inc.<br/>
                  204 Digital Way, Suite 400<br/>
                  San Francisco, CA 94107
                </p>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl border border-white/5 bg-[#09030b]/30">
              <h3 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">From</h3>
              <div className="text-white">
                <p className="font-bold text-xl mb-1 tracking-tight">BrandFriar Studio</p>
                <p className="text-brand-primary/80 text-sm font-medium mb-3">info@brandfriar.com</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  88 Kinetic Tower<br/>
                  Innovation District<br/>
                  New York, NY 10013
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Line Items Table */}
        <Reveal delay={0.2}>
          <section className="mb-12">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[500px]">
                {/* Table Header */}
                <div className="grid grid-cols-12 border-b border-white/10 pb-4 mb-4">
                  <div className="col-span-6 text-[10px] uppercase tracking-widest font-bold text-white/40">Description</div>
                  <div className="col-span-2 text-[10px] uppercase tracking-widest font-bold text-white/40 text-center">Qty</div>
                  <div className="col-span-2 text-[10px] uppercase tracking-widest font-bold text-white/40 text-right">Unit Price</div>
                  <div className="col-span-2 text-[10px] uppercase tracking-widest font-bold text-white/40 text-right">Amount</div>
                </div>
                
                {/* Line Item */}
                <div className="grid grid-cols-12 items-center py-6 bg-white/5 rounded-xl px-4 border border-white/5 hover:border-white/20 transition-colors">
                  <div className="col-span-6 pr-4">
                    <p className="font-bold text-white text-lg tracking-tight">Growth Package</p>
                    <p className="text-sm text-white/50 mt-2 leading-relaxed">Full brand architecture, UI/UX audit, and kinetic identity system setup.</p>
                  </div>
                  <div className="col-span-2 text-center text-white font-medium font-mono text-lg">1</div>
                  <div className="col-span-2 text-right text-white/70 font-medium font-mono">$1,299.00</div>
                  <div className="col-span-2 text-right text-white font-bold font-mono text-lg text-brand-teal shadow-[0_0_10px_rgba(28,219,186,0.2)]">$1,299.00</div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Totals Section */}
        <Reveal delay={0.3}>
          <section className="flex justify-end mb-16">
            <div className="w-72 space-y-4 bg-[#09030b]/50 p-6 rounded-2xl border border-white/5 shadow-2xl">
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/60 font-medium">Subtotal</span>
                <span className="text-white font-mono font-medium">$1,299.00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/60 font-medium">Tax (0%)</span>
                <span className="text-white font-mono font-medium">$0.00</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-white font-bold text-lg uppercase tracking-widest">Total</span>
                <span className="text-3xl font-black text-brand-primary tracking-tighter drop-shadow-[0_0_15px_rgba(122,60,245,0.6)]">$1,299.00</span>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Payment/Actions Footer */}
        <Reveal delay={0.4}>
          <footer className="flex flex-col-reverse sm:flex-row items-center justify-between pt-10 border-t border-white/10 gap-6">
            <div className="flex gap-4 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white/70 bg-white/5 border border-white/10 font-bold text-sm hover:bg-white/10 hover:text-white transition-all shadow-md">
                <Download className="w-5 h-5" />
                <span>PDF</span>
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white/70 bg-white/5 border border-white/10 font-bold text-sm hover:bg-white/10 hover:text-white transition-all shadow-md">
                <Printer className="w-5 h-5" />
                <span>Print</span>
              </button>
            </div>
            
            <Link to="/checkout" className="w-full sm:w-auto bg-gradient-to-r from-brand-primary to-[#a166ff] text-white px-12 py-4 rounded-xl font-bold tracking-widest uppercase text-sm shadow-[0_0_30px_rgba(122,60,245,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
              <Banknote className="w-5 h-5" />
              Pay Invoice
            </Link>
          </footer>
        </Reveal>

      </div>
    </main>
  );
}
