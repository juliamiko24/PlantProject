import { Text, View, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// All properties are mandatory unless you add a '?'
type Props = {
    label: string;
    theme?: "primary";
    alertText?: string;
    onPress?: () => void;
};

export default function Button({label, theme, alertText, onPress}: Props){
    if (theme === "primary"){
        return (
            <View style={[
                //can define an array of styles for each item
                styles.buttonContainer,
                { borderWidth: 4, borderColor: "yellowgreen", borderRadius: 18},]}>
                <Pressable style={[styles.button, {backgroundColor: "#fff"}]}
                    onPress={onPress}>
                    <FontAwesome
                        name = "picture-o"
                        size={18}
                        color= "#25292e"
                        style={styles.buttonIcon}>
                    </FontAwesome>
                    <Text style={[styles.buttonLabel, {color: "#25292e"}]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    return (
        <View style = {styles.buttonContainer}>
            <Pressable
                style = {styles.button}
                onPress={onPress}>
            <Text style = {styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16,
    }
});