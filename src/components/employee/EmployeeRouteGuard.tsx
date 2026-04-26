import React from 'react';
import { Navigate } from 'react-router-dom';
import { readRole } from '../../lib/authSession';

export function EmployeeRouteGuard({ children }: { children: React.ReactNode }) {
  const role = readRole();

  if (role && role !== 'employee') {
    return <Navigate to="/executive/dashboard" replace />;
  }

  return <>{children}</>;
}
