import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { REACT_APP_CRUDCRUD_KEY } from "react-native-dotenv";

const Home = () => {
  const [unicorns, setUnicorns] = useState([]);
  fetch(`https://crudcrud.com/api/${REACT_APP_CRUDCRUD_KEY}/unicorns`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setUnicorns(json);
    })
    .catch((error) => console.error(error));
  return (
    <View style={styles.container}>
      <Text style={styles.text}>THIS IS HOME</Text>
      <Text style={styles.text}>Unicorns: {unicorns.length}</Text>
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
