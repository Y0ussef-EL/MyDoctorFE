import { Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 bg-white px-6 pt-8">
  {/* Header */}
  <View className="items-center mb-6">
    <View className="w-24 h-24 rounded-full bg-blue-200 mb-3" />
    <Text className="text-xl font-bold">Dr. Youssef El Ammari</Text>
    <Text className="text-gray-500">Cardiology</Text>
  </View>

  {/* Account Info */}
  <View className="mb-6">
    <Text className="text-gray-400 mb-2">Account</Text>
    <Text>Email: doctor@mail.com</Text>
    <Text>Username: dr.youssef</Text>
  </View>

  {/* Availability */}
  <View className="mb-6">
    <Text className="text-gray-400 mb-2">Availability</Text>
    <Text>Mon – Fri</Text>
    <Text>09:00 – 17:00</Text>
  </View>

  {/* Security */}
  <View className="mt-auto">
    <Text className="text-red-600 font-semibold">Logout</Text>
  </View>
</View>

  );
};

export default Profile;
