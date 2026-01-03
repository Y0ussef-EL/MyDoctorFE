import { Slot } from "expo-router";
import "../global.css";

export default function RootLayout() {
  // Using Slot tells Expo to just render the child (index or public group)
  return <Slot />;
}