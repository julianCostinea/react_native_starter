import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

interface IProps {
  loginHelper: (state: boolean) => void;
}

const Login = ({ loginHelper }: IProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    if (!username || !password) {
      alert("Username and password cannot be empty");
      return;
    }
    //simulate login
    loginHelper(true);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
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
