import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useAuthStore } from "@/store/auth.store";

export default function Index() {
  const router = useRouter();
  const role =useAuthStore((state) => state.userRole);

  return (
    <LinearGradient colors={["#1e40af", "#312e81"]} className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-center px-6">
          <Text className="text-white text-4xl font-bold text-center mb-4">
            the current user is logged in as {role} 
          </Text>

          </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
