import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, readRole } from '../../lib/authSession';

export function EmployeeRouteGuard({ children }: { children: React.ReactNode }) {
  const role = readRole();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (role && role !== 'employee') {
    return <Navigate to="/app/dashboard" replace />;
  }

  return <>{children}</>;
}
