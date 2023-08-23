import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Cat from "./components/Cat";
import PokemonGetSingle from "./components/PokemonGetSingle";
import CheckInView from "./components/CheckInView.tsx/CheckInView";
import Login from "./components/RPG/Login";
import { REACT_APP_DEV_MODE } from "@env";

export default function App() {
  return (
    <View
      style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}
      // style={styles.container}
    >
      {/* <PokemonGetSingle /> */}
      {/* <CheckInView /> */}
      <Login />
      <Text>Url: {REACT_APP_DEV_MODE}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 450,
  },
});
