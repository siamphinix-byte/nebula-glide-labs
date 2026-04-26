import React, { useEffect, useState } from 'react';
import { EmployeeSidebar } from './EmployeeSidebar';
import { EmployeeTopNav } from './EmployeeTopNav';

export function EmployeeLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const syncMobile = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarCollapsed(true);
      }
    };

    syncMobile();
    window.addEventListener('resize', syncMobile);
    return () => window.removeEventListener('resize', syncMobile);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-bg pb-12 font-sans text-foreground selection:bg-brand-primary selection:text-primary-foreground">
      <EmployeeSidebar isCollapsed={isSidebarCollapsed} onToggle={() => setIsSidebarCollapsed((prev) => !prev)} />
      <EmployeeTopNav isCollapsed={isSidebarCollapsed} />
      <main className={`mt-24 min-h-[calc(100vh-6rem)] px-4 py-8 transition-all duration-300 sm:px-6 lg:px-8 ${isSidebarCollapsed ? 'ml-[80px] lg:ml-[100px]' : 'ml-[80px] lg:ml-[280px]'}`}>
        {children}
      </main>
    </div>
  );
}
