import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderOpen, ArrowRightLeft, MessageSquare, Headphones, Smartphone, CheckSquare, Bug, ChevronDown, PanelLeftClose, PanelLeftOpen, CalendarDays, Users } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export function DashboardSidebar({ isCollapsed, onToggle }: { isCollapsed?: boolean; onToggle?: () => void }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const [tasksOpen, setTasksOpen] = useState(location.pathname.includes('/app/task'));
  const [bugsOpen, setBugsOpen] = useState(location.pathname.includes('/app/bug'));
  const [timesheetsOpen, setTimesheetsOpen] = useState(location.pathname.includes('/app/timesheet'));
  const [budgetOpen, setBudgetOpen] = useState(location.pathname.includes('/app/budget'));
  const [hrmOpen, setHrmOpen] = useState(location.pathname.includes('/app/hrm'));

  useEffect(() => {
    if (location.pathname.includes('/app/task')) setTasksOpen(true);
    if (location.pathname.includes('/app/bug')) setBugsOpen(true);
    if (location.pathname.includes('/app/timesheet')) setTimesheetsOpen(true);
    if (location.pathname.includes('/app/budget')) setBudgetOpen(true);
    if (location.pathname.includes('/app/hrm')) setHrmOpen(true);
  }, [location.pathname]);

  return (
    <aside className={`fixed left-6 top-6 bottom-6 rounded-[2rem] bg-[#131313]/95 backdrop-blur-xl shadow-2xl border border-white/5 flex flex-col py-6 z-50 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[80px]' : 'w-[250px]'}`}>
      <div className={`px-4 mb-8 flex items-center ${isCollapsed ? 'justify-center mx-0' : 'justify-between px-8'}`}>
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#bbf600] rounded-lg flex items-center justify-center text-[#131313] font-bold font-serif text-lg shrink-0">B</div>
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold tracking-tight text-white leading-none whitespace-nowrap">BrandoFriar</h1>
            </div>
          )}
        </Link>
      </div>

      {onToggle && (
        <button 
          onClick={onToggle} 
          className="absolute -right-3 top-10 bg-[#1c1b1b] border border-white/10 text-white p-1 rounded-full shadow-lg hover:bg-white/10 hover:text-[#bbf600] transition-colors z-50"
        >
          {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
        </button>
      )}
      
      <div className="overflow-y-auto flex-1 flex flex-col gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div>
          {!isCollapsed && <span className="px-8 text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3 block">Perspective</span>}
          {isCollapsed && <div className="h-4" />}
          <nav className="space-y-1 relative">
            <NavLink to="/app/dashboard" icon={LayoutDashboard} label="Executive Console" active={isActive('/app/dashboard')} isCollapsed={isCollapsed} />
            {isCollapsed ? (
              <NavLink to="/app/hrm/dashboard" icon={Users} label="HRM" active={location.pathname.includes('/app/hrm')} isCollapsed={isCollapsed} />
            ) : (
              <div>
                <button
                  onClick={() => setHrmOpen(!hrmOpen)}
                  className={`flex items-center w-full justify-between px-4 mx-4 pr-8 h-10 rounded-xl transition-all duration-300 font-medium group ${location.pathname.includes('/app/hrm') ? 'text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
                >
                  <div className="flex items-center gap-3">
                    <Users className={`w-4 h-4 flex-shrink-0 transition-colors ${location.pathname.includes('/app/hrm') ? 'text-[#bbf600]' : 'text-white/30 group-hover:text-white/70'}`} />
                    <span className="text-[13px]">HRM</span>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hrmOpen ? '' : '-rotate-90'}`} />
                </button>
                {hrmOpen && (
                  <div className="ml-8 mt-1 space-y-1 border-l border-white/5 pl-2">
                    <NavLink to="/app/hrm/dashboard" label="HRM Dashboard" active={isActive('/app/hrm/dashboard')} isSub isCollapsed={isCollapsed} />
                  </div>
                )}
              </div>
            )}
            <NavLink to="/app/projects" icon={FolderOpen} label="Projects" active={isActive('/app/projects')} isCollapsed={isCollapsed} />
            
            {/* Tasks Menu */}
            <div>
              <button 
                onClick={() => !isCollapsed && setTasksOpen(!tasksOpen)} 
                className={`flex items-center ${isCollapsed ? 'justify-center mx-auto w-12 h-12' : 'w-full justify-between px-4 mx-4 pr-8 h-10'} rounded-xl transition-all duration-300 font-medium group ${location.pathname.includes('/app/task') ? 'text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
                title={isCollapsed ? "Tasks" : ""}
              >
                <div className="flex items-center gap-3">
                  <CheckSquare className={`${isCollapsed ? 'w-5 h-5' : 'w-4 h-4'} flex-shrink-0 transition-colors ${location.pathname.includes('/app/task') ? 'text-[#bbf600]' : 'text-white/30 group-hover:text-white/70'}`} />
                  {!isCollapsed && <span className="text-[13px]">Tasks</span>}
                </div>
                {!isCollapsed && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${tasksOpen ? '' : '-rotate-90'}`} />}
              </button>
              {tasksOpen && !isCollapsed && (
                <div className="ml-8 mt-1 space-y-1 border-l border-white/5 pl-2">
                  <NavLink to="/app/tasks" label="All Tasks" active={isActive('/app/tasks')} isSub isCollapsed={isCollapsed} />
                  <NavLink to="/app/task-stages" label="Task Stages" active={isActive('/app/task-stages')} isSub isCollapsed={isCollapsed} />
                </div>
              )}
            </div>

            {/* Bugs Menu */}
            <div>
              <button 
                onClick={() => !isCollapsed && setBugsOpen(!bugsOpen)} 
                className={`flex items-center ${isCollapsed ? 'justify-center mx-auto w-12 h-12' : 'w-full justify-between px-4 mx-4 pr-8 h-10'} rounded-xl transition-all duration-300 font-medium group ${location.pathname.includes('/app/bug') ? 'text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
                title={isCollapsed ? "Bugs" : ""}
              >
                <div className="flex items-center gap-3">
                  <Bug className={`${isCollapsed ? 'w-5 h-5' : 'w-4 h-4'} flex-shrink-0 transition-colors ${location.pathname.includes('/app/bug') ? 'text-[#bbf600]' : 'text-white/30 group-hover:text-white/70'}`} />
                  {!isCollapsed && <span className="text-[13px]">Bugs</span>}
                </div>
                {!isCollapsed && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${bugsOpen ? '' : '-rotate-90'}`} />}
              </button>
              {bugsOpen && !isCollapsed && (
                <div className="ml-8 mt-1 space-y-1 border-l border-white/5 pl-2">
                  <NavLink to="/app/bugs" label="All Bugs" active={isActive('/app/bugs')} isSub isCollapsed={isCollapsed} />
                  <NavLink to="/app/bug-statuses" label="Bug Statuses" active={isActive('/app/bug-statuses')} isSub isCollapsed={isCollapsed} />
                </div>
              )}
            </div>

            {/* Timesheets Menu */}
            <div>
              <button 
                onClick={() => !isCollapsed && setTimesheetsOpen(!timesheetsOpen)} 
                className={`flex items-center ${isCollapsed ? 'justify-center mx-auto w-12 h-12' : 'w-full justify-between px-4 mx-4 pr-8 h-10'} rounded-xl transition-all duration-300 font-medium group ${location.pathname.includes('/app/timesheet') ? 'text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
                title={isCollapsed ? "Timesheets" : ""}
              >
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isCollapsed ? 'w-5 h-5' : 'w-4 h-4'} flex-shrink-0 transition-colors ${location.pathname.includes('/app/timesheet') ? 'text-[#bbf600]' : 'text-white/30 group-hover:text-white/70'}`}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {!isCollapsed && <span className="text-[13px]">Timesheets</span>}
                </div>
                {!isCollapsed && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${timesheetsOpen ? '' : '-rotate-90'}`} />}
              </button>
              {timesheetsOpen && !isCollapsed && (
                <div className="ml-8 mt-1 space-y-1 border-l border-white/5 pl-2">
                  <NavLink to="/app/timesheets" label="My Timesheets" active={isActive('/app/timesheets')} isSub isCollapsed={isCollapsed} />
                  <NavLink to="/app/timesheets/daily" label="Daily View" active={isActive('/app/timesheets/daily')} isSub isCollapsed={isCollapsed} />
                  <NavLink to="/app/timesheets/weekly" label="Weekly View" active={isActive('/app/timesheets/weekly')} isSub isCollapsed={isCollapsed} />
                  <NavLink to="/app/timesheets/monthly" label="Monthly View" active={isActive('/app/timesheets/monthly')} isSub isCollapsed={isCollapsed} />
                  <NavLink to="/app/timesheets/approvals" label="Approvals" active={isActive('/app/timesheets/approvals')} isSub isCollapsed={isCollapsed} />
                  <NavLink to="/app/timesheets/reports" label="Reports" active={isActive('/app/timesheets/reports')} isSub isCollapsed={isCollapsed} />
                </div>
              )}
            </div>

            <NavLink to="/app/meetings" icon={() => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 transition-colors w-4 h-4"><path d="M15 10l5-5v14l-5-5"/><rect x="4" y="6" width="11" height="12" rx="2" ry="2"/></svg>} label="Meetings" active={isActive('/app/meetings') || isActive('/app/zoom-meetings') || isActive('/app/google-meetings')} isCollapsed={isCollapsed} />
            
            {/* Budget Menu */}
            <div>
              <button 
                onClick={() => !isCollapsed && setBudgetOpen(!budgetOpen)} 
                className={`flex items-center ${isCollapsed ? 'justify-center mx-auto w-12 h-12' : 'w-full justify-between px-4 mx-4 pr-8 h-10'} rounded-xl transition-all duration-300 font-medium group ${location.pathname.includes('/app/budget') ? 'text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
                title={isCollapsed ? "Budget & Expenses" : ""}
              >
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isCollapsed ? 'w-5 h-5' : 'w-4 h-4'} flex-shrink-0 transition-colors ${location.pathname.includes('/app/budget') ? 'text-[#bbf600]' : 'text-white/30 group-hover:text-white/70'}`}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  {!isCollapsed && <span className="text-[13px]">Budget & Expenses</span>}
                </div>
                {!isCollapsed && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${budgetOpen ? '' : '-rotate-90'}`} />}
              </button>
              {budgetOpen && !isCollapsed && (
                <div className="ml-8 mt-1 space-y-1 border-l border-white/5 pl-2">
                  <NavLink to="/app/budget/dashboard" label="Budget Dashboard" active={isActive('/app/budget/dashboard')} isSub isCollapsed={isCollapsed} />
                  <NavLink to="/app/budget/budgets" label="Budgets" active={isActive('/app/budget/budgets')} isSub isCollapsed={isCollapsed} />
                  <NavLink to="/app/budget/expenses" label="Expenses" active={isActive('/app/budget/expenses')} isSub isCollapsed={isCollapsed} />
                  <NavLink to="/app/budget/approvals" label="Expense Approvals" active={isActive('/app/budget/approvals')} isSub isCollapsed={isCollapsed} />
                </div>
              )}
            </div>

            <NavLink to="/app/todos" icon={() => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 transition-colors w-4 h-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>} label="ToDos" active={isActive('/app/todos')} isCollapsed={isCollapsed} />
            <NavLink to="/app/project-reports" icon={() => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 transition-colors w-4 h-4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>} label="Project Reports" active={isActive('/app/project-reports')} isCollapsed={isCollapsed} />
            <NavLink to="/app/messenger" icon={MessageSquare} label="Messenger" active={isActive('/app/messenger')} isCollapsed={isCollapsed} />
            <NavLink to="/app/invoice" icon={() => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 transition-colors w-4 h-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>} label="Invoices" active={isActive('/app/invoice')} isCollapsed={isCollapsed} />
            <NavLink to="/app/notes" icon={() => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 transition-colors w-4 h-4"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M16 2v20"/></svg>} label="Notes" active={isActive('/app/notes')} isCollapsed={isCollapsed} />
            <NavLink to="/app/calendar" icon={CalendarDays} label="Calendar" active={isActive('/app/calendar')} isCollapsed={isCollapsed} />
            <NavLink to="/app/media" icon={() => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 transition-colors w-4 h-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>} label="Media Library" active={isActive('/app/media')} isCollapsed={isCollapsed} />
          </nav>
        </div>

      </div>
      
      {/* Compressed Mobile App Block */}
      {!isCollapsed ? (
        <div className="mt-4 mx-5 p-4 rounded-2xl bg-[#1c1b1b] border border-white/5 shadow-inner shrink-0 overflow-hidden transition-opacity">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/80 border border-white/10 shrink-0">
                <Smartphone className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-[13px] leading-tight truncate">Mobile App</p>
              <p className="text-[10px] text-white/40 truncate">iOS & Android</p>
            </div>
          </div>
          <button className="w-full py-2 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white text-[11px] font-bold rounded-xl transition-all border border-white/10 flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#bbf600]/50 whitespace-nowrap">
            Download App
          </button>
        </div>
      ) : (
        <div className="mt-4 mx-2 p-0 w-12 h-12 flex justify-center items-center mx-auto rounded-xl bg-[#1c1b1b] border border-white/5 shadow-inner shrink-0 hover:bg-white/5 cursor-pointer transition-colors" title="Download App">
           <Smartphone className="w-5 h-5 text-white/50 hover:text-[#bbf600]" />
        </div>
      )}
    </aside>
  );
}

function NavLink({ to, icon: Icon, label, active, isSub = false, isCollapsed = false }: { to: string, icon?: any, label: string, active: boolean, isSub?: boolean, isCollapsed?: boolean }) {
  if (isCollapsed && isSub) return null; // Hide sub items entirely when collapsed, though shouldn't mount it

  return (
    <Link 
      to={to}
      title={isCollapsed ? label : ""}
      className={`flex items-center gap-3 rounded-xl transition-all duration-300 font-medium group ${
        isCollapsed ? 'mx-auto px-0 justify-center w-12 h-12 flex-shrink-0' : (isSub ? 'mx-2 px-4 py-2.5 text-xs h-9' : 'mx-4 px-4 h-10 text-[13px]')
      } ${
        active 
          ? 'bg-[#1c1b1b] text-white border border-white/10 shadow-sm' 
          : 'text-white/40 hover:bg-white/5 hover:text-white border border-transparent'
      }`}
    >
      {Icon && <Icon className={`flex-shrink-0 transition-colors ${isCollapsed ? 'w-5 h-5' : 'w-4 h-4'} ${active ? 'text-[#bbf600]' : 'text-white/30 group-hover:text-white/70'}`} />}
      {!Icon && isSub && <div className={`w-1.5 h-1.5 rounded-full transition-colors ${active ? 'bg-[#bbf600]' : 'bg-white/20 group-hover:bg-white/50'}`} />}
      {!isCollapsed && <span className="whitespace-nowrap">{label}</span>}
    </Link>
  );
}
