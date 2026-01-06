import { create } from "zustand";
import { doctorService } from "../services/doctor.service";
import { DoctorProfile } from "../types/user.types";

export interface DoctorState {
  profile: DoctorProfile | null;
  loading: boolean;
  error: string | null;

  loadProfile: () => Promise<void>;
  clear: () => void;
}

export const useDoctorStore = create<DoctorState>((set) => ({
  profile: null,
  loading: false,
  error: null,

  loadProfile: async () => {
    try {
      set({ loading: true, error: null });

      const res = await doctorService.me();

      set({
        profile: res.data,
        loading: false,
      });
    } catch (e: any) {
      set({
        error: e.response?.data?.message || "Failed to load doctor profile",
        loading: false,
      });
    }
  },

  clear: () => {
    set({ profile: null, loading: false, error: null });
  },
}));
