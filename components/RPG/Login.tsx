import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    if (!username || !password) {
      alert("Username and password cannot be empty");
      return;
    }

    const options = {
      method: "Get",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({ username, password }),
    };

    fetch("https://192.168.87.32:7136/api/Fight/Highscore")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("aaa", json);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Usernamezz" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={loginHandler} />
    </View>
  );
};

//TODO: replace with flex
const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "50%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
  },
});

export default Login;
