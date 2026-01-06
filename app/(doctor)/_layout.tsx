import { Redirect, Stack } from "expo-router";
import { useAuthStore } from "@/store/auth.store";

export default function DoctorLayout() {
  const { isAuthenticated, userRole, loading } = useAuthStore();

  if (loading) return null;

  if (!isAuthenticated || userRole !== "DOCTOR") {
    return <Redirect href="/auth/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    />
  );
}
