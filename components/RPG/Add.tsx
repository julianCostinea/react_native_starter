import React from "react";
import { Text, View, StyleSheet } from "react-native";
import UserForm from "./User/UserForm";

const Add = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>THIS IS ADD</Text>
      <UserForm usernameProp="" jobProp="" addressProp="" edit={false} />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
  },
});
