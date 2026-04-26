import { ReactNode, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardTopNav } from './DashboardTopNav';
import { isAuthenticated, readRole } from '../lib/authSession';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const role = readRole();

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarCollapsed(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (role === 'employee') {
    return <Navigate to="/employee/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-white selection:bg-brand-primary selection:text-white pb-12 overflow-x-hidden">
      <DashboardSidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      <DashboardTopNav />
      {/* Spacer + responsive margin left based on sidebar state */}
      <main 
        className={`mt-24 min-h-[calc(100vh-6rem)] transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 py-8 ${
          isSidebarCollapsed ? 'lg:ml-[100px] ml-[80px]' : 'lg:ml-[280px] ml-[80px]'
        }`}
      >
        {children}
      </main>
    </div>
  );
}
