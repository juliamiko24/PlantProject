import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
    <StatusBar style= "light"/>
      <Stack>
      <Stack.Screen name = "(tabs)" options={{
        headerTitle: "My plant app",
        headerShown: false,
        headerLeft: () => <></>
      }}
      />
      <Stack.Screen name = "+not-found" options={{}}
      />

      </Stack>
    </>
  
);
}
