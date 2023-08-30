import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Modal } from "react-native";
import { user } from "../../../lib/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import UserForm from "./UserForm";

interface IProps {
  user: user;
  onDelete: (id: string) => void;
}

const User = (props: IProps) => {
  const { user, onDelete } = props;

  const [showModal, setShowModal] = useState(false);

  const deleteHandler = () => {
    onDelete(user.id);
  };

  const editHandler = () => {
    setShowModal(true);
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
      <Modal visible={showModal} animationType="slide" statusBarTranslucent>
        <View style={styles.modalContent}>
          <UserForm
            usernameProp={user.name}
            jobProp={user.job}
            addressProp={user.address}
            edit={true}
            userId={user.id}
            closeModal={() => setShowModal(false)}
          />
          <Pressable onPress={() => setShowModal(false)}>
            <Ionicons name="close-circle" size={55} color="blue" />
          </Pressable>
        </View>
      </Modal>
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
  modalContainer: {
    backgroundColor: "red",
    borderBlockColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "30%",
  },
  modalContent: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
});
