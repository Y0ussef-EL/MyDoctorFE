import { create } from "zustand";
import { storage } from "../lib/storage";
import { authService } from "../services/auth.service";
import { Role } from "../types/auth.types";

const TOKEN_KEY = "TOKEN_KEY";

export interface AuthState {
  userRole: Role | null;
  isAuthenticated: boolean;
  loading: boolean;

  login: (username: string, password: string) => Promise<Role>;
  logout: () => Promise<void>;
  bootstrap: () => Promise<void>;
}


export const useAuthStore = create<AuthState>((set) => ({
  userRole: null,
  isAuthenticated: false,
  loading: true,

  login: async (username, password) => {
    const res = await authService.login({ username, password });
    const { token, role } = res.data;
    await storage.setToken(TOKEN_KEY, token);

    set({
      userRole: role,
      isAuthenticated: true,
      loading: false,
    });

    return role;

  
  },

  logout: async () => {
    await storage.removeToken(TOKEN_KEY);

    set({
      userRole: null,
      isAuthenticated: false,
      loading: false,
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
