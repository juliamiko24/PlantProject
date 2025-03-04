import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
  <Tabs
    screenOptions={{
        tabBarActiveTintColor: "#e9d9c7",
        headerStyle: {
            backgroundColor: "#20201a"
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
            backgroundColor: "#20201a"
        },
        headerTitle: "Julia's plant app",
        headerTitleAlign: "center"
    }}
    >
    <Tabs.Screen
        name = "index"
        options={{
            headerShown: true,
            tabBarIcon: ({focused,color}) => (
                <Ionicons
                    name = {focused ? "home-sharp" : "home-outline"}
                    size = {24}
                    color={color}/>
                ),
    }}
    />
    <Tabs.Screen
        name = "about"
        options={{
            headerShown: false,
            tabBarIcon: ({focused,color}) => (
                <Ionicons
                    name = {focused ? "information-circle" : "information-circle-outline"}
                    size = {24}
                    color={color}/>
                ),
    }}
    />
    <Tabs.Screen name = "+not-found" options={{
      headerShown: false,
    }}
    />

  </Tabs>
);
}