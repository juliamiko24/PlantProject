import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { PropsWithChildren } from "react";
import  MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

