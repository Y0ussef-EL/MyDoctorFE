import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Explicitly pathing to the group folder helps iOS resolution
    const timeout = setTimeout(() => {
      router.replace("/(public)/welcome");
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#1e40af" }}>
      <ActivityIndicator color="white" size="large" />
    </View>
  );
}