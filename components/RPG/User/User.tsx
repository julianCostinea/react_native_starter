import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { user } from "../../../lib/types";

interface IProps {
  user: user;
}

const User = (props: IProps) => {
  const { user } = props;
  return (
    <View style={styles.container}>
      <Text>{user.name}</Text>
      <Text>{user.job}</Text>
      <Text>{user.address}</Text>
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
    padding: 10,
  },
});
