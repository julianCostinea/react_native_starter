import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Modal, Pressable } from "react-native";
import { REACT_APP_MOCK_API } from "react-native-dotenv";
import { user } from "../../lib/types";
import User from "./User/User";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const queryClient = useQueryClient();

  const fetchUsers = (): Promise<user[]> => axios.get(`${REACT_APP_MOCK_API}/users`).then((response) => response.data);

  const deleteMutation = useMutation((id: string) => axios.delete(`${REACT_APP_MOCK_API}/users/${id}`), {
    onMutate: (data) => {
      queryClient.setQueryData(["users"], (oldData) => {
        return oldData
          ? (oldData as user[]).filter((user) => {
              return user.id !== data;
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
      alert("User deleted successfully");
    },
  });

  const deleteHandler = (id: string) => {
    deleteMutation.mutate(id);
  };

  const { data, isLoading, error } = useQuery({ queryKey: ["users"], queryFn: fetchUsers, staleTime: 10000 });

  if (isLoading) return <Text style={styles.text}>"Loading..."</Text>;

  if (error && error instanceof Error)
    return <Text style={styles.text}>"An error has occurred: " {error.message}</Text>;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <User user={item} onDelete={deleteHandler} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  text: {
    color: "#fff",
  },
});
