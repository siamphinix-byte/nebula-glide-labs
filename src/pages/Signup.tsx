import { Link } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Building } from 'lucide-react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';

export function Signup() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-brand-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-brand-teal/20 rounded-full blur-[128px]" />

      <div className="w-full max-w-md relative z-10">
        <Reveal direction="down">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Create account</h1>
            <p className="text-white/60">Start your journey with BrandoFriar</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-brand-surface border border-white/10 rounded-2xl p-8 card-glow">
            <form onSubmit={(e) => e.preventDefault()}>
              <StaggerReveal className="space-y-5 flex flex-col pt-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40">
                      <User className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      className="input-field w-full pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary/50"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Company Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40">
                      <Building className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      className="input-field w-full pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary/50"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40">
                      <Mail className="h-5 w-5" />
                    </div>
                    <input
                      type="email"
                      className="input-field w-full pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary/50"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40">
                      <Lock className="h-5 w-5" />
                    </div>
                    <input
                      type="password"
                      className="input-field w-full pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-primary/50"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-3 rounded-xl font-medium transition-all glow-btn flex items-center justify-center gap-2 group mt-6"
                >
                  Create Account
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </StaggerReveal>
            </form>

            <Reveal delay={0.4}>
              <p className="text-center text-white/60 text-sm mt-8">
                Already have an account?{' '}
                <Link to="/login" className="text-brand-primary hover:text-brand-primary/80 font-medium">
                  Log in
                </Link>
              </p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
