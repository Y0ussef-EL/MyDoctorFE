import { View, Text, TouchableOpacity } from "react-native";
import { Home, Calendar, Users, User } from "lucide-react-native";

const ICONS: Record<string, any> = {
  home: Home,
  appointments: Calendar,
  patients: Users,
  profile: User,
};

const LABELS: Record<string, string> = {
  home: "Home",
  appointments: "Appointments",
  patients: "Patients",
  profile: "Profile",
};

export function DoctorTabBar({ state, navigation }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#1e40af",
        borderRadius: 30,
        marginHorizontal: 20,
        marginBottom: 12,
        padding: 6,
        height: 60,
        elevation: 10,
        overflow: "hidden",
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const focused = state.index === index;
        const Icon = ICONS[route.name];

        if (!Icon) return null;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            activeOpacity={0.8}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              paddingHorizontal: focused ? 16 : 12,
              borderRadius: 999,
              backgroundColor: focused
                ? "rgba(255,255,255,0.2)"
                : "transparent",
              marginHorizontal: 4,
            }}
          >
            <Icon color="#fff" size={22} />

            {focused && (
              <Text
                style={{
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: "600",
                  marginLeft: 8,
                }}
                numberOfLines={1}
              >
                {LABELS[route.name]}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
