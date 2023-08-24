import React from "react";
import { Text, TextInput, View, StyleSheet, Button, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface IProps {
  homeHandler: () => void;
  aboutUsHandler: () => void;
  addHandler: () => void;
}

const Sidebar = ({ aboutUsHandler, homeHandler, addHandler }: IProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={homeHandler}>
        <Ionicons name="home" size={32} color="white" />
      </Pressable>
      <Pressable style={styles.button} onPress={addHandler}>
        <Ionicons name="add-circle" size={32} color="white" />
      </Pressable>
      <Pressable style={styles.button} onPress={aboutUsHandler}>
        <Ionicons name="book" size={32} color="white" />
      </Pressable>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "blue",
    borderBlockColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
