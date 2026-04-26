import { Bell, Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';

export function EmployeeTopNav({ isCollapsed }: { isCollapsed: boolean }) {
  const [query, setQuery] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Leave request under review', read: false },
    { id: 2, title: 'Task deadline updated', read: false },
    { id: 3, title: 'Attendance synced', read: true },
  ]);

  const unreadCount = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);

  return (
    <header className={`fixed top-0 right-0 z-40 flex h-24 items-center justify-between bg-brand-bg/90 px-4 sm:px-8 lg:px-12 backdrop-blur-xl transition-all ${isCollapsed ? 'left-[100px]' : 'left-[300px]'}`}>
      <div className="relative w-full max-w-sm lg:max-w-lg">
        <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search tasks, leaves, attendance..."
          className="h-11 w-full rounded-full border border-border bg-brand-surface pl-12 pr-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-brand-primary/40 focus:outline-none"
        />
      </div>
      <button
        onClick={() => setNotifications((prev) => prev.map((item) => ({ ...item, read: true })))}
        className="relative ml-4 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-brand-surface text-foreground/70 transition-colors hover:bg-brand-muted"
        aria-label="Mark notifications read"
      >
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-brand-primary" />}
      </button>
    </header>
  );
}
