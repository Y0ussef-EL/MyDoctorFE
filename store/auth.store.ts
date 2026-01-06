import { create } from "zustand";
import { storage } from "../lib/storage";
import { authService } from "../services/auth.service";
import { Role } from "../types/auth.types";
import {jwtDecode} from "jwt-decode";

const TOKEN_KEY = "TOKEN_KEY";

interface AuthState {
  userRole: Role | null;
  isAuthenticated: boolean;
  loading: boolean;

  login: (username: string, password: string) => Promise<Role>;
  logout: () => Promise<void>;
  bootstrap: () => Promise<void>;
}

interface JwtPayload{
  sub: string;
  role: "DOCTOR" | "PATIENT";
}

export const useAuthStore = create<AuthState>((set) => ({
  userRole: null,
  isAuthenticated: false,
  loading: true,

  login: async (username, password) => {
    const res = await authService.login({ username, password });
    const { token } = res.data;

  const decoded = jwtDecode<JwtPayload>(token);
    await storage.setToken(TOKEN_KEY, token);

    set({
      userRole: decoded.role,
      isAuthenticated: true,
      loading: false,
    });
    return decoded.role;
  },

  logout: async () => {
    await storage.removeToken(TOKEN_KEY);

    set({
      userRole: null,
      isAuthenticated: false,
    });
  },

  bootstrap: async () => {
    const token = await storage.getToken(TOKEN_KEY);

    if (!token) {
      set({ loading: false });
      return;
    }

    try {
      const res = await authService.me();

      set({
        userRole: res.data.role,
        isAuthenticated: true,
        loading: false,
      });
    } catch {
      await storage.removeToken(TOKEN_KEY);

      set({
        userRole: null,
        isAuthenticated: false,
        loading: false,
      });
    }
  },
}));
