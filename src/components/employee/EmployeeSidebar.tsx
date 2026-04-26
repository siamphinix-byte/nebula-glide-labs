import { CalendarCheck2, ChartSpline, Cog, ListChecks, UserRound, LogOut, BriefcaseBusiness } from 'lucide-react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { clearAuthSession } from '../../lib/authSession';

export function EmployeeSidebar({ isCollapsed, onToggle }: { isCollapsed: boolean; onToggle: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    { to: '/employee/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/employee/profile', label: 'Profile', icon: UserRound },
    { to: '/employee/tasks', label: 'Tasks', icon: ListChecks },
    { to: '/employee/leave', label: 'Leave', icon: CalendarCheck2 },
    { to: '/employee/attendance', label: 'Attendance', icon: BriefcaseBusiness },
    { to: '/employee/reports', label: 'Reports', icon: ChartSpline },
    { to: '/employee/settings', label: 'Settings', icon: Cog },
  ];

  const logout = () => {
    clearAuthSession();
    navigate('/login');
  };

  return (
    <aside className={`fixed left-6 top-6 bottom-6 z-50 flex flex-col rounded-[2rem] border border-border bg-brand-bg/95 py-6 shadow-2xl backdrop-blur-xl transition-all duration-300 ${isCollapsed ? 'w-[80px]' : 'w-[250px]'}`}>
      <div className={`mb-8 flex items-center ${isCollapsed ? 'justify-center px-0' : 'justify-between px-8'}`}>
        <Link to="/employee/dashboard" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary font-bold text-primary-foreground">E</div>
          {!isCollapsed && <h1 className="text-lg font-bold leading-none text-foreground">Employee Panel</h1>}
        </Link>
      </div>

      <button
        onClick={onToggle}
        className="absolute -right-3 top-10 rounded-full border border-border bg-brand-surface p-1 text-foreground shadow-lg transition-colors hover:bg-brand-muted"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <span className="block text-xs font-semibold">{isCollapsed ? '›' : '‹'}</span>
      </button>

      <div className="flex-1 space-y-1 overflow-y-auto px-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {!isCollapsed && <span className="mb-2 block px-3 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Employee Space</span>}
        {items.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              title={isCollapsed ? item.label : ''}
              className={`group flex items-center gap-3 rounded-xl transition-all ${isCollapsed ? 'mx-auto h-12 w-12 justify-center' : 'h-10 px-3'} ${active ? 'border border-border bg-brand-surface text-foreground' : 'text-foreground/60 hover:bg-brand-muted hover:text-foreground'}`}
            >
              <Icon className={`h-4 w-4 ${active ? 'text-brand-primary' : 'text-foreground/50 group-hover:text-foreground/80'}`} />
              {!isCollapsed && <span className="text-[13px] font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </div>

      <div className="mx-4 mt-4 rounded-xl border border-border bg-brand-surface p-2">
        <button
          onClick={logout}
          className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-border bg-transparent text-xs font-semibold text-foreground/70 transition-colors hover:bg-brand-muted"
        >
          <LogOut className="h-4 w-4" />
          {!isCollapsed && 'Logout'}
        </button>
      </div>
    </aside>
  );
}
