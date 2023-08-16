import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Cat from "./components/Cat";
import PokemonGetSingle from "./components/PokemonGetSingle";
import CheckInView from "./components/CheckInView.tsx/CheckInView";

export default function App() {
  return (
    <View 
      style={{ width: "100%", height: "100%" }}
      // style={styles.container}
      >
      {/* <PokemonGetSingle /> */}
      <CheckInView />
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
