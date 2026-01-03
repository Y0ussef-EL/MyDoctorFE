import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
    const [username, setUsername] = useState("");
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
                placeholder="First Name"
                placeholderTextColor="#fff"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                className="mb-4 border-b border-white text-white mx-4 py-3"
                placeholder="Last Name"
                placeholderTextColor="#fff"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                className="mb-4 border-b border-white text-white mx-4 py-3"
                placeholder="Username"
                placeholderTextColor="#fff"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                className="mb-4 border-b border-white text-white mx-4 py-3"
                placeholder="Username"
                placeholderTextColor="#fff"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                className="mb-4 border-b border-white text-white mx-4 py-3"
                placeholder="Username"
                placeholderTextColor="#fff"
                value={username}
                onChangeText={setUsername}
              />
              </View>
            </ScrollView>
            </KeyboardAvoidingView>
          </SafeAreaView>
          </LinearGradient>
              )
}