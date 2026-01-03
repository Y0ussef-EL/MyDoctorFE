import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
  const router = useRouter();

  return (
    // FIX: Use style={{flex:1}} instead of className for Native Modules on iOS
    <LinearGradient colors={["#1e40af", "#312e81"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 justify-center px-6">
          <Text className="text-white text-4xl font-bold text-center mb-4">
            MY DOCTORe
          </Text>

          <Text className="text-white text-center text-base mb-12 opacity-90">
            Your healthcare companion — doctors & patients, connected.
          </Text>

          <TouchableOpacity
            className="bg-white py-3 rounded-xl mb-4 self-center px-12"
            onPress={() => router.push("/(public)/auth/login")}
          >
            <Text className="text-indigo-600 text-center text-lg font-semibold">
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(public)/auth/register")}
          >
            <Text className="text-white underline text-center text-lg font-semibold">
              Create an account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}