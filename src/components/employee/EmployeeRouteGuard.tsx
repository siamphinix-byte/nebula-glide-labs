import React from 'react';
import { Navigate } from 'react-router-dom';

function readRole(): string | null {
  try {
    const raw = localStorage.getItem('user');
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { role?: string };
    return (parsed.role ?? '').toLowerCase();
  } catch {
    return null;
  }
}

export function EmployeeRouteGuard({ children }: { children: React.ReactNode }) {
  const rawUser = localStorage.getItem('user');
  const token = localStorage.getItem('token') ?? localStorage.getItem('access_token');
  const role = readRole();
  const isAuthenticated = Boolean(token || rawUser);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (role && role !== 'employee') {
    return <Navigate to="/app/dashboard" replace />;
  }

  return <>{children}</>;
}
