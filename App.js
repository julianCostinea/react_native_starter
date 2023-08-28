import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Login from "./components/RPG/Login";
import { useState } from "react";
import Sidebar from "./components/RPG/Sidebar";
import AboutUs from "./components/RPG/AboutUs";
import Home from "./components/RPG/Home";
import Add from "./components/RPG/Add";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showAdd, setShowAdd] = useState(false);

  const aboutUs = () => {
    setShowAboutUs(true);
    setShowHome(false);
    setShowAdd(false);
  };

  const home = () => {
    setShowAboutUs(false);
    setShowHome(true);
    setShowAdd(false);
  };

  const add = () => {
    setShowAboutUs(false);
    setShowHome(false);
    setShowAdd(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
        {/* <PokemonGetSingle /> */}
        {/* <CheckInView /> */}
        {!loggedIn && <Login loginHelper={setLoggedIn} />}
        {loggedIn && (
          <View style={styles.container}>
            <View style={styles.sidebarContainer}>
              <Sidebar aboutUsHandler={aboutUs} addHandler={add} homeHandler={home} />
            </View>
            <View style={styles.contentContainer}>
              {showAboutUs && <AboutUs />}
              {showHome && <Home />}
              {showAdd && <Add />}
            </View>
          </View>
        )}
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  sidebarContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "blue",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    flex: 3,
    height: "100%",
  },
});
