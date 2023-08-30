import axios from "axios";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { REACT_APP_MOCK_API } from "react-native-dotenv";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { user } from "../../../lib/types";

interface IProps {
  usernameProp: string;
  jobProp: string;
  addressProp: string;
  edit: boolean;
  userId?: string;
  closeModal?: () => void;
}

const UserForm = (props: IProps) => {
  const queryClient = useQueryClient();

  const { usernameProp, jobProp, addressProp, edit, userId, closeModal } = props;

  const editMutation = useMutation(
    (data: { name: string; job: string; address: string }) => axios.put(`${REACT_APP_MOCK_API}/users/${userId}`, data),
    {
      onMutate: (data) => {
        queryClient.setQueryData(["users"], (oldData) => {
          return oldData
            ? (oldData as user[]).map((user) => {
                if (user.id === userId) {
                  return { ...user, name: data.name, job: data.job, address: data.address };
                }
                return user;
              })
            : [];
        });
      },
      onSettled: () => {
        queryClient.invalidateQueries(["users"]);
      },
      onError: (error, variables, context) => {
        alert("Something went wrong");
      },
      onSuccess: (data, variables, context) => {
        alert("User edited successfully");
      },
    }
  );

  const [username, setUsername] = useState(usernameProp);
  const [job, setJob] = useState(jobProp);
  const [address, setAddress] = useState(addressProp);

  const submitHandler = () => {
    if (username === "" || job === "" || address === "") {
      alert("Please fill all fields");
      return;
    }
    if (edit && userId) {
      editMutation.mutate({ name: username, job: job, address: address });
      closeModal?.();
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
