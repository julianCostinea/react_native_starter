import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Home = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>THIS IS HOME</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
