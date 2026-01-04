import { LinearGradient } from "expo-linear-gradient";
import { Eye, EyeOff, Ellipsis } from "lucide-react-native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RadioGroup, { RadioOption } from "../../../components/RadioGroup";
import { BlurView } from "expo-blur";
import { router } from "expo-router";

export default function Register() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pSecure, setPSecure] = useState(true);
  const [role, setRole] = useState<"PATIENT" | "DOCTOR">("PATIENT");
const roleOptions: RadioOption<"PATIENT" | "DOCTOR">[] = [
  { label: "Patient", value: "PATIENT" },
  { label: "Doctor", value: "DOCTOR" },
];
  const [modalVisible, setModalVisible] = useState(false);
  const [specialization, setSpecialization] = useState("");
  const specializations = [
    "General Practitioner",
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Pediatrician",
    "Psychiatrist",
    "Surgeon",
    "Orthopedist",
  ];
  const locked = role !== "DOCTOR";
  const isDisabled =
  !username ||
  !firstName ||
  !lastName ||
  !email ||
  !password ||
  (role === "DOCTOR" && !specialization);


  const handleRegister = () => {
  const payload = {
  username,
  firstName,
  lastName,
  email,
  password,
  role,
  specialization: role === "DOCTOR" ? specialization : null,
}
    console.log("Registering user with data:", payload);
    router.push("/auth/login");

};

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

              <Text className="text-white text-center text-base mb-6 opacity-90">
                Your healthcare companion — doctors & patients, connected.
              </Text>
              <View className="flex-row items-center mx-4 py-3">
                <Text className="text-white mr-6">Register as:</Text>
                <RadioGroup
                  options={roleOptions}
                  selectedValue={role}
                  onValueChange={setRole}
                />
              </View>

              <TextInput
                className="mb-4 border-b border-white text-white mx-4 py-3"
                placeholder="First Name"
                placeholderTextColor="#fff"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                className="mb-4 border-b border-white text-white mx-4 py-3"
                placeholder="Last Name"
                placeholderTextColor="#fff"
                value={lastName}
                onChangeText={setLastName}
              />
              <TextInput
                className="mb-4 border-b border-white text-white mx-4 py-3"
                placeholder="Email"
                placeholderTextColor="#fff"
                value={email}
                autoCapitalize="none"
                onChangeText={setEmail}
              />
              <TextInput
                className="mb-4 border-b border-white text-white mx-4 py-3"
                placeholder="Username"
                placeholderTextColor="#fff"
                value={username}
                autoCapitalize="none"
                onChangeText={setUsername}
              />

              <View className="relative">
                <TextInput
                  className="mb-4 border-b border-white text-white mx-4 py-3"
                  placeholder="Password"
                  placeholderTextColor="#fff"
                  value={password}
                  secureTextEntry={pSecure}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setPSecure(!pSecure)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 mr-2"
                >
                  {pSecure ? (
                    <Eye size={20} color="#fff" />
                  ) : (
                    <EyeOff size={20} color="#fff" />
                  )}
                </TouchableOpacity>
              </View>
              {role === "DOCTOR" && (
                <View>
                  <Text className="mb-4 border-b border-white text-white mx-4 py-3 px-2">
                    {specialization || "Specialization"}
                  </Text>

                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 mr-2"
                  >
                    <Ellipsis size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
              )}

              <Modal
                animationType="fade"
                transparent
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
              >
                <LinearGradient
                  colors={["#1e40af", "#312e81"]}
                  style={{ flex: 1 }}
                >
                  <View className="flex-1 justify-center  items-center px-6">
                    <BlurView
                      intensity={20}
                      tint="light"
                      className="w-full max-h-[50%] rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <View className="p-6">
                        <Text className="text-xl font-bold mb-4 text-center text-white">
                          Specialization
                        </Text>

                        <FlatList
                          data={specializations}
                          keyExtractor={(item) => item}
                          showsVerticalScrollIndicator={false}
                          renderItem={({ item }) => (
                            <TouchableOpacity
                              className="py-4 border-b border-white/10"
                              onPress={() => {
                                setSpecialization(item);
                                setModalVisible(false);
                              }}
                            >
                              <Text
                                style={{ color: "#fff" }}
                                className={`text-lg ${
                                  specialization === item
                                    ? "font-bold"
                                    : "font-extralight"
                                }`}
                              >
                                {item}
                              </Text>
                            </TouchableOpacity>
                          )}
                        />
                      </View>
                    </BlurView>
                  </View>
                </LinearGradient>
              </Modal>
            </View>
            <TouchableOpacity
              className={`w-[30%] mx-auto mt-6 py-3 rounded-lg ${
    isDisabled ? "bg-white/50" : "bg-white"
  }`}
              onPress={() =>handleRegister()}
              disabled={isDisabled}
            >
              <Text className="text-indigo-600 text-center text-lg font-bold">
                Register
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
