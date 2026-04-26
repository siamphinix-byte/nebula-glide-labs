type StoredUser = {
  role?: string;
};

export function readStoredUser(): StoredUser | null {
  try {
    const raw = localStorage.getItem('user');
    if (!raw) return null;
    return JSON.parse(raw) as StoredUser;
  } catch {
    return null;
  }
}

export function readRole(): string | null {
  const user = readStoredUser();
  const role = user?.role?.toLowerCase().trim();
  return role || null;
}

export function isAuthenticated(): boolean {
  const token = localStorage.getItem('token') ?? localStorage.getItem('access_token');
  const user = readStoredUser();
  return Boolean(token || user);
}

export function clearAuthSession() {
  localStorage.removeItem('token');
  localStorage.removeItem('access_token');
  localStorage.removeItem('user');
  sessionStorage.clear();
}