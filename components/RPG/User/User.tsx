import React from "react";
import { Text, TextInput, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { user } from "../../../lib/types";
import { REACT_APP_MOCK_API } from "react-native-dotenv";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";

interface IProps {
  user: user;
  onDelete: (id: string) => void;
}

const User = (props: IProps) => {
  const { user, onDelete } = props;

  const deleteHandler = () => {
    //try this
    onDelete(user.id);
    // axios
    //   .delete(`${REACT_APP_MOCK_API}/users/${user.id}`)
    //   .then((response) => {
    //     try {
    //       if (response.status !== 200) {
    //         alert("Something went wrong");
    //         return;
    //       }
    //       alert("User deleted successfully");
    //     } catch (error) {
    //       alert("Something went wrong");
    //     }
    //   })
    //   .catch((error) => {
    //     alert("Something went wrong");
    //   });
  };

  const editHandler = () => {
    console.log("editHandler", user.name);
  };

  return (
    <View style={styles.container}>
      <Text>{user.name}</Text>
      <Text>{user.job}</Text>
      <Text>{user.address}</Text>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={deleteHandler}>
          <Ionicons name="trash" size={32} color="blue" />
        </Pressable>
        <Pressable onPress={editHandler}>
          <Ionicons name="pencil" size={32} color="blue" />
        </Pressable>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderBlockColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%",
    margin: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    width: "100%",
  },
});
