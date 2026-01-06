import { Redirect, Stack } from "expo-router";
import { useAuthStore } from "@/store/auth.store";

export default function PatientLayout() {
  const { isAuthenticated, userRole, loading } = useAuthStore();

  if (loading) return null;

  if (!isAuthenticated || userRole !== "PATIENT") {
    return <Redirect href="/auth/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    />
  );;
}
