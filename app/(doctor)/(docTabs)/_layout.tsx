import { Tabs } from "expo-router";
import { DoctorTabBar } from "@/components/DoctorTabBar";

const DoctorTabsLayout = () => {
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <DoctorTabBar {...props} />}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="appointments" />
      <Tabs.Screen name="patients" />
    </Tabs>
  );
}


export default DoctorTabsLayout;
