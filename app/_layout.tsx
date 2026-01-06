import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import { useAuthStore } from "@/store/auth.store";
import { useEffect } from "react";

export default function RootLayout() {

  const bootstrap =useAuthStore((state) => state.bootstrap);

  useEffect(() => {
    bootstrap();
  }, []);


  return (
    <>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
