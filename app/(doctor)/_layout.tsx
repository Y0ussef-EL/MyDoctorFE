import { useAuthStore } from "@/store/auth.store";
import { Redirect, Stack } from "expo-router";

export default function DoctorLayout() {
  const { isAuthenticated, userRole, loading } = useAuthStore();

  if (loading) return null;

  if (!isAuthenticated || userRole !== "DOCTOR") {
    return <Redirect href="/auth/login" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false, animation: "fade"}}>
      <Stack.Screen name="(docTabs)" />
    </Stack>
  );
}
