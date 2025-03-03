import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Buttons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceHolderImage = require("../../assets/images/background-image.png");

// export default makes it the entry point of the navigation route (always goes to index page)
export default function Index() {

  // this is a hook called useState from React that allows us to have a variable
  // can be a string or undefined (if user doesnt pick anything)
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

const pickImageAsync = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true, quality:1,
  });

  if (!result.canceled)
  {
    // result.assets is an array, the result of image will be at position 0 hence the [0]
    setSelectedImage(result.assets[0].uri)
    console.log(result);
  }
  else
  {
    alert("You did not select any image");
  }
  }


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceHolderImage}></ImageViewer>
      </View>
      <View style = {styles.footerContainer}>
        <Button label = "Choose a photo" theme="primary" onPress={pickImageAsync}></Button>
        <Button label = "Use this photo"></Button>
        <Button label = "Click me" alertText="Hello"></Button>
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