import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingNav } from './FloatingNav';
import NotFound from '../pages/NotFound';

type AppErrorBoundaryState = {
  hasError: boolean;
};

export class AppErrorBoundary extends React.Component<React.PropsWithChildren, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Application runtime error captured:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-primary selection:text-white">
          <Navbar />
          <NotFound />
          <Footer />
          <FloatingNav />
        </div>
      );
    }

    return this.props.children;
  }
}