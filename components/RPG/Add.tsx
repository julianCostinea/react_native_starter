import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Add = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>THIS IS ADD</Text>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
