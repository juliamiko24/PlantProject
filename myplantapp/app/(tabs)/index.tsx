import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

import * as ImagePicker from "expo-image-picker";

// my components
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Buttons";
import IconButton from "@/components/IconButton"
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

const PlaceHolderImage = require("../../assets/images/background-image.png");

// export default makes it the entry point of the navigation route (always goes to index page)
export default function Index() {

  // this is a hook called useState from React that allows us to have a variable
  // can be a string or undefined (if user doesnt pick anything)
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEMoji, setPickedEmoji] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, quality:1,
    });

    if (!result.canceled)
    {
      // result.assets is an array, the result of image will be at position 0 hence the [0]
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true);
      console.log(result);
    }
    else
    {
      alert("You did not select any image");
    }
    }

  const onReset = () => {
    setShowAppOptions(false)
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onSaveImageAsync = async () => {

  }


  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceHolderImage}></ImageViewer>
        {pickedEMoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEMoji}></EmojiSticker>)}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style = {styles.optionsRow}>
            <IconButton icon = "refresh" label = "reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style = {styles.footerContainer}>
        <Button label = "Choose a photo" theme="primary" onPress={pickImageAsync}></Button>
        <Button label = "Use this photo" onPress={()=> setShowAppOptions(true)}></Button>
      </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}></EmojiList>
      </EmojiPicker>
      
      
      {/* <Text style={styles.text}>Hello World</Text> */}
      {/* <Link href={"/about"} style = {styles.button}> Go to About Screen </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#20201a",
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1
  },
  footerContainer:{
    flex: 1/3,
    alignItems: "center",
  },
  optionsContainer:{
    position: "absolute",
    bottom: 80,
  },
  optionsRow:{
    alignItems: "center",
    flexDirection: "row",
  }
});