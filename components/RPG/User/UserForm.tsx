import axios from "axios";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { REACT_APP_MOCK_API } from "react-native-dotenv";

interface IProps {
  usernameProp: string;
  jobProp: string;
  addressProp: string;
  edit: boolean;
  userId?: string;
  closeModal?: () => void;
}

const UserForm = (props: IProps) => {
  const { usernameProp, jobProp, addressProp, edit, userId, closeModal } = props;

  const [username, setUsername] = useState(usernameProp);
  const [job, setJob] = useState(jobProp);
  const [address, setAddress] = useState(addressProp);

  const submitHandler = () => {
    if (username === "" || job === "" || address === "") {
      alert("Please fill all fields");
      return;
    }
    if (edit && userId) {
      axios
        .put(`${REACT_APP_MOCK_API}/users/${userId}`, { name: username, job: job, address: address })
        .then((response) => {
          console.log("response", response);
          try {
            if (response.status !== 200) {
              alert("Something went wrong");
              return;
            }
            alert("User edited successfully");
            setUsername("");
            setJob("");
            setAddress("");
            closeModal?.();
          } catch (error) {
            alert("Something went wrong");
          }
        })
        .catch((error) => {
          alert("Something went wrong");
        });
    } else {
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
    }
  };

  return (
    <View style={styles.container}>
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
      <Pressable onPress={submitHandler} style={styles.button}>
        <Text style={styles.buttonText}>{edit ? "EDIT" : "ADD"}</Text>
      </Pressable>
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "blue",
    paddingVertical: 20,
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
