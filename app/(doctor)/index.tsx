import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const router = useRouter();

  return (
    <LinearGradient colors={["#1e40af", "#312e81"]} className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-center px-6">
          <Text className="text-white text-4xl font-bold text-center mb-4">
            DOCTOR is logged in 
          </Text>

          </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
