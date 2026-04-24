import { Search, Bell, LogOut, User } from 'lucide-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function DashboardTopNav() {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);
  const bellRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [isBellOpen, setIsBellOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Budget approval pending', time: '2m ago', read: false },
    { id: 2, title: 'Timesheet submitted', time: '18m ago', read: false },
    { id: 3, title: 'Project report updated', time: '1h ago', read: true },
  ]);

  const unreadCount = useMemo(() => notifications.filter((item) => !item.read).length, [notifications]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'f') {
        event.preventDefault();
        searchRef.current?.focus();
      }

      if (event.key === 'Escape') {
        setIsBellOpen(false);
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (bellRef.current && !bellRef.current.contains(target)) {
        setIsBellOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.clear();
    setIsLogoutDialogOpen(false);
    navigate('/login');
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  const markOneAsRead = (id: number) => {
    setNotifications((prev) => prev.map((item) => (item.id === id ? { ...item, read: true } : item)));
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-24 flex items-center justify-between pl-[100px] lg:pl-[300px] pr-4 sm:pr-8 lg:pr-12 w-full bg-brand-bg/90 backdrop-blur-xl z-40 transition-all duration-300 pointer-events-none">
      <div className="flex-1 flex items-center pointer-events-auto">
        <div className="relative w-full max-w-sm lg:max-w-lg group flex items-center">
          <Search className="absolute left-4 sm:left-6 w-5 h-5 text-foreground/30 group-focus-within:text-brand-primary transition-colors pointer-events-none" />
          <input
            ref={searchRef}
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setSearchQuery('');
                searchRef.current?.blur();
              }
            }}
            placeholder="Search projects, tasks, notes..."
            className="w-full bg-brand-surface border-2 border-transparent rounded-full py-3 sm:py-4 pl-12 sm:pl-14 pr-20 sm:pr-20 text-[14px] sm:text-[15px] font-medium text-foreground focus:ring-brand-primary/30 focus:border-brand-primary/30 placeholder:text-foreground/30 transition-all outline-none"
          />
          <div className="absolute right-4 bg-brand-muted text-foreground/60 text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded border border-border hidden sm:block">
            ⌘ F
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto">
        <div ref={bellRef} className="relative">
          <button
            onClick={() => setIsBellOpen((prev) => !prev)}
            className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-surface flex items-center justify-center border border-border text-foreground/60 hover:text-brand-primary hover:bg-brand-muted transition-all"
            aria-label="Open notifications"
          >
            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            {unreadCount > 0 && <span className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3.5 w-2 h-2 bg-brand-primary rounded-full shadow-sm" />}
          </button>

          {isBellOpen && (
            <div className="absolute right-0 mt-3 w-[280px] sm:w-[320px] rounded-xl border border-border bg-brand-surface shadow-xl p-3 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Notifications</p>
                <button onClick={markAllAsRead} className="text-xs text-brand-primary hover:text-brand-primary/80 transition-colors">
                  Mark all read
                </button>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {notifications.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => markOneAsRead(item.id)}
                    className="w-full text-left rounded-lg px-3 py-2 bg-brand-muted/60 hover:bg-brand-muted transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm text-foreground/90 leading-tight">{item.title}</p>
                      {!item.read && <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary shrink-0" />}
                    </div>
                    <p className="text-xs text-foreground/50 mt-1">{item.time}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div ref={profileRef} className="relative ml-1 sm:ml-2">
          <button
            onClick={() => setIsProfileOpen((prev) => !prev)}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border border-border transition-transform hover:scale-105 cursor-pointer bg-brand-surface flex items-center justify-center"
            aria-label="Open profile menu"
          >
            <img
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=d4bbff"
              alt="Profile"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-52 rounded-xl border border-border bg-brand-surface shadow-xl p-2">
              <div className="px-2 py-2 border-b border-border mb-1">
                <p className="text-sm font-semibold text-foreground">Project Admin</p>
                <p className="text-xs text-foreground/50">admin@brandofriar.com</p>
              </div>
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-brand-muted transition-colors">
                <User className="w-4 h-4" />
                Profile
              </button>
              <button
                onClick={() => {
                  setIsProfileOpen(false);
                  setIsLogoutDialogOpen(true);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-brand-muted transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {isLogoutDialogOpen && (
        <div className="fixed inset-0 z-[70] pointer-events-auto">
          <button
            aria-label="Close logout dialog"
            onClick={() => setIsLogoutDialogOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <div className="absolute left-1/2 top-1/2 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-brand-surface p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-foreground">Do you want to logout?</h3>
            <p className="text-sm text-foreground/70 mt-2">
              You will be redirected to the login page and need to sign in again.
            </p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setIsLogoutDialogOpen(false)}
                className="px-4 py-2 rounded-lg border border-border text-sm text-foreground/80 hover:bg-brand-muted transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-brand-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
