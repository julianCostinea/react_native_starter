import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, we are company</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nostrum impedit quod modi similique tempora
      </Text>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
