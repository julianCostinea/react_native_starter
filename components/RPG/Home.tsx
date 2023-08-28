import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { REACT_APP_MOCK_API } from "react-native-dotenv";
import { user } from "../../lib/types";
import User from "./User/User";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const fetchUsers = (): Promise<user[]> => axios.get(`${REACT_APP_MOCK_API}/users`).then((response) => response.data);

  const { data, isLoading, error } = useQuery({ queryKey: ["users"], queryFn: fetchUsers, staleTime: 10000 });

  if (isLoading) return <Text style={styles.text}>"Loading..."</Text>;

  if (error && error instanceof Error)
    return <Text style={styles.text}>"An error has occurred: " {error.message}</Text>;
  return (
    <View style={styles.container}>
      <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => <User user={item} />} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  text: {
    color: "#fff",
  },
});
