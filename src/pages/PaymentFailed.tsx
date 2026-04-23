import { Reveal } from '../components/GSAPWrapper';
import { Shield, ArrowRight, ArrowLeft, Info, CreditCard, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PaymentFailed() {
  return (
    <main className="flex-grow flex items-center justify-center min-h-screen pt-24 pb-12 px-6 bg-brand-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-4xl w-full flex flex-col gap-8 relative z-10">
        <Reveal>
          <section className="bg-brand-surface/50 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-rose-400" />
            
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <Shield className="w-10 h-10" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Payment Not Completed</h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
              Your payment for <span className="text-white font-medium">Growth Package</span> was not processed. No charges have been made to your account.
            </p>
            
            <div className="bg-[#09030b]/60 rounded-xl p-6 text-left max-w-2xl mx-auto border border-white/5 shadow-inner">
              <h2 className="text-xs uppercase tracking-widest text-[#ebd356] font-bold mb-4 flex items-center gap-2">
                <Info className="w-4 h-4" />
                Possible Reasons
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/50">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  Account fund limit reached
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  3D Secure authentication failed
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  Transaction declined by issuing bank
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  Network timeout during processing
                </li>
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.2}>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-surface/50 backdrop-blur-xl rounded-2xl p-8 border border-white/5 flex flex-col items-start shadow-xl hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary mb-6 shadow-[0_0_15px_rgba(122,60,245,0.3)]">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Alternative Payment Method</h3>
              <p className="text-white/50 text-sm mb-8 flex-grow leading-relaxed">
                Use a different credit card or digital wallet provider to securely finalize your transaction structure.
              </p>
              <Link to="/checkout" className="w-full bg-gradient-to-r from-brand-primary to-[#a166ff] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(122,60,245,0.4)]">
                Return to Checkout <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-brand-surface/50 backdrop-blur-xl rounded-2xl p-8 border border-white/5 flex flex-col items-start shadow-xl hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal mb-6 shadow-[0_0_15px_rgba(28,219,186,0.2)]">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Manual Bank Transfer</h3>
              <p className="text-white/50 text-sm mb-8 flex-grow leading-relaxed">
                Switch to manual wire routing. We will generate the SWIFT/IBAN coordinates necessary to transfer funds.
              </p>
              <Link to="/payment-verification" className="w-full bg-transparent border border-white/20 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-white/5 active:scale-[0.98]">
                Setup Wire Transfer
              </Link>
            </div>
          </section>

          <footer className="mt-8 text-center text-white/40 text-xs tracking-widest uppercase">
            <p>Support channel connected • ID: ERR-TRANSACT-409</p>
          </footer>
        </Reveal>
      </div>
    </main>
  );
}
