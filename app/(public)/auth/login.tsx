import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const router = useRouter();

  return (
    <LinearGradient colors={["#1e40af", "#312e81"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              paddingTop: 120,
              paddingBottom: 40,
            }}
          >
            <View className="px-6">
              <Text className="text-white text-4xl font-bold text-center mb-4">
                MY DOCTOR
              </Text>

              <Text className="text-white text-center text-base mb-12 opacity-90">
                Your healthcare companion — doctors & patients, connected.
              </Text>

              <TextInput
                className="mb-4 border-b border-white text-white mx-4 py-3"
                placeholder="Username"
                placeholderTextColor="#fff"
                value={username}
                onChangeText={setUsername}
              />

              <View className="mb-4 relative">
                <TextInput
                  className="mb-4 border-b border-white text-white mx-4 py-3"
                  placeholder="Password"
                  placeholderTextColor="#fff"
                  secureTextEntry={secure}
                  value={password}
                  onChangeText={setPassword}
                />

                <TouchableOpacity
                  onPress={() => setSecure(!secure)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 mr-2"
                >
                  {secure ? (
                    <Eye size={20} color="#fff" />
                  ) : (
                    <EyeOff size={20} color="#fff" />
                  )}
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                className="bg-white mt-6 py-3 rounded-lg"
                onPress={() => console.log(username, password)}
              >
                <Text className="text-indigo-600 text-center text-lg font-bold">
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
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
