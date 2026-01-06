import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { AuthState, useAuthStore } from "@/store/auth.store";
import { DoctorState, useDoctorStore } from "@/store/doctor.store";
import { useEffect } from "react";

export default function Index() {
  console.log("👨‍⚕️ DOCTOR INDEX LOADED");

  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const authLoading = useAuthStore((s) => s.loading);
  const userRole = useAuthStore((s) => s.userRole);

  const profile = useDoctorStore((s) => s.profile);
  const loading = useDoctorStore((s) => s.loading);
  const error = useDoctorStore((s) => s.error);
  const loadProfile = useDoctorStore((s) => s.loadProfile);


  useEffect(() => {
    if (isAuthenticated && !profile) {
      loadProfile();
    }
  }, [isAuthenticated, profile, loadProfile]);

  if (authLoading) return null;
  if (!isAuthenticated) return <Text>Not authenticated</Text>;

  if (loading) return <Text>Loading doctor profile...</Text>;
  if (error) return <Text>{error}</Text>;
  if (!profile) return <Text>No profile found</Text>;

  return (
    <LinearGradient colors={["#1e40af", "#312e81"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", paddingHorizontal: 24 }}
        >
          <Text style={{ color: "white", fontSize: 22, textAlign: "center" }}>
            Logged in as {userRole}
          </Text>

          <Text style={{ color: "white", marginTop: 12, textAlign: "center" }}>
            Welcome Dr. {profile.lastName}
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
