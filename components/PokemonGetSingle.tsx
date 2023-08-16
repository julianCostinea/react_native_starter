import React, { useState } from "react";
import { Button, Text, TextInput, View, Image } from "react-native";

const PokemonGetSingle = () => {
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getPokemon = () => {
    setErrorMessage("");
    setPokemonName("");

    if (pokemonNameInput === "") {
      setErrorMessage("Pokemon name cannot be empty");
      return;
    }

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNameInput.toLowerCase())
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPokemonName(json.name);
        setPokemonType(json.types[0].type.name);
        setPokemonImage(json.sprites.front_default);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Get Pokemon</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        value={pokemonNameInput}
        onChangeText={setPokemonNameInput}
      />
      <Button title="Get Pokemon" onPress={getPokemon} />
      {/* <Cat name="New name 2"/> */}
      <Text>{pokemonName && `${pokemonName} is of type: ${pokemonType}`}</Text>
      {pokemonImage && <Image source={{ uri: pokemonImage }} style={{ width: 160, height: 160 }} />}
      <Text>{errorMessage}</Text>
    </View>
  );
};

export default PokemonGetSingle;
