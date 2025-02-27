import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

// export default makes it the entry point of the navigation route (always goes to index page)
export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title: "Oops! Not Found"}}></Stack.Screen>
    <View style={styles.container}>
        <Link href = "/" style={styles.button}> 
        Go back to Home Screen!</Link>
        </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff"
  }
});