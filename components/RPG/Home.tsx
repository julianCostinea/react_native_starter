import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { REACT_APP_MOCK_API } from "react-native-dotenv";
import { user } from "../../lib/types";
import User from "./User/User";

const Home = () => {
  const [users, setUsers] = useState<user[]>([]);
  if (users.length === 0) {
    fetch(`${REACT_APP_MOCK_API}/users`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => console.error(error));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here are all your active users:</Text>
      {users.length > 0 ? users.map((user) => <User key={user.id} user={user} />) : <></>}
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
