import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Buttons";

const PlaceHolderImage = require("../../assets/images/background-image.png");

// export default makes it the entry point of the navigation route (always goes to index page)
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceHolderImage}></ImageViewer>
      </View>
      <View style = {styles.footerContainer}>
        <Button label = "Choose a photo" theme="primary"></Button>
        <Button label = "Use this photo"></Button>
      </View>
      
      {/* <Text style={styles.text}>Hello World</Text> */}
      {/* <Link href={"/about"} style = {styles.button}> Go to About Screen </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1
  },
  footerContainer:{
    flex: 1/3,
    alignItems: "center",
  }
});