import axios from "axios";
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Pressable } from "react-native";
import { REACT_APP_MOCK_API } from "react-native-dotenv";

const Add = () => {
  const [username, setUsername] = useState("");
  const [job, setJob] = useState("");
  const [address, setAddress] = useState("");

  const addUser = () => {
    if (username === "" || job === "" || address === "") {
      alert("Please fill all fields");
      return;
    }

    axios
      .post(`${REACT_APP_MOCK_API}/users`, { name: username, job: job, address: address })
      .then((response) => {
        try {
          if (response.status !== 201) {
            alert("Something went wrong");
            return;
          }
          alert("User added successfully");
          setUsername("");
          setJob("");
          setAddress("");
        } catch (error) {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>THIS IS ADD</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder="Username"
        onChangeText={setUsername}
        placeholderTextColor={"lightgray"}
      />
      <TextInput
        style={styles.input}
        value={job}
        placeholder="Job"
        onChangeText={setJob}
        placeholderTextColor={"lightgray"}
      />
      <TextInput
        style={styles.input}
        value={address}
        placeholder="Address"
        onChangeText={setAddress}
        placeholderTextColor={"lightgray"}
      />
      <Pressable onPress={addUser} style={styles.button}>
        <Text style={styles.buttonText}>ADD</Text>
      </Pressable>
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
  input: {
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    padding: 10,
    margin: 5,
    width: "100%",
    borderRadius: 5,
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: "50%",
  },
  buttonText: {
    color: "blue",
    textAlign: "center",
  },
});
