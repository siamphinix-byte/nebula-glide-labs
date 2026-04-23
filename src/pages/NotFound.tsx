import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Reveal, StaggerReveal } from "../components/GSAPWrapper";
import { AlertTriangle, ArrowLeft, Compass, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pb-24 pt-24 sm:px-6 lg:px-8">
      <Reveal direction="down">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-surface shadow-2xl">
          <div className="relative border-b border-white/10 bg-brand-bg px-6 py-10 sm:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,60,245,0.2),transparent_55%)]" />
            <div className="relative z-10 flex items-center gap-3">
              <div className="rounded-xl border border-brand-secondary/30 bg-brand-secondary/10 p-2">
                <AlertTriangle className="h-5 w-5 text-brand-secondary" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-white/60">Error 404</p>
            </div>
            <h1 className="relative z-10 mt-6 text-5xl font-black leading-none text-white sm:text-6xl">Page Not Found</h1>
            <p className="relative z-10 mt-4 max-w-2xl text-sm text-white/60 sm:text-base">
              The page you requested doesn’t exist or was moved. Use one of the quick actions below to continue.
            </p>
          </div>

          <StaggerReveal className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3 sm:p-8">
            <Link
              to="/"
              className="group rounded-xl border border-white/10 bg-brand-bg p-4 transition-colors hover:border-brand-primary/35 hover:bg-white/5"
            >
              <Home className="mb-3 h-5 w-5 text-brand-primary" />
              <p className="text-sm font-bold text-white">Go Home</p>
              <p className="mt-1 text-xs text-white/55">Back to the main landing page.</p>
            </Link>
            <Link
              to="/projects"
              className="group rounded-xl border border-white/10 bg-brand-bg p-4 transition-colors hover:border-brand-teal/35 hover:bg-white/5"
            >
              <Compass className="mb-3 h-5 w-5 text-brand-teal" />
              <p className="text-sm font-bold text-white">Explore Projects</p>
              <p className="mt-1 text-xs text-white/55">Browse recent case studies and work.</p>
            </Link>
            <Link
              to="/contact"
              className="group rounded-xl border border-white/10 bg-brand-bg p-4 transition-colors hover:border-brand-secondary/35 hover:bg-white/5"
            >
              <Search className="mb-3 h-5 w-5 text-brand-secondary" />
              <p className="text-sm font-bold text-white">Contact Support</p>
              <p className="mt-1 text-xs text-white/55">Reach out and we’ll point you to the right page.</p>
            </Link>
          </StaggerReveal>

          <div className="border-t border-white/10 bg-brand-bg/50 px-6 py-4 sm:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-primary transition-colors hover:bg-brand-primary/20"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default NotFound;
