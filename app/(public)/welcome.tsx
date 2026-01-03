import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Welcome() {
  const router = useRouter();

  return (
    <LinearGradient colors={["#1e40af", "#312e81"]} className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-center px-6">
          <Text className="text-white text-4xl font-bold text-center mb-4">
            MY DOCTOR
          </Text>

          <Text className="text-white text-center text-base mb-12 opacity-90">
            Your healthcare companion — doctors & patients, connected.
          </Text>

          <TouchableOpacity
            className=" bg-white py-3 rounded-xl mb-4 max-w-fit w-fit mx-auto px-4"
            onPress={() => router.push("/auth/login")}
          >
            <Text className="text-indigo-600 text-center text-lg font-semibold">
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
                className=""
                onPress={() => router.push("/auth/register")}
              >
                <Text className="text-white text-center mt-4 font-extralight">
                  Create an account
                </Text>
              </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
