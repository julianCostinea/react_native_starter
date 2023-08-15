import React from "react";
import { Text, TextInput, View } from "react-native";

interface IProps {
  name: string;
}

const Cat = (props: IProps) => {
  const { name } = props;
  return (
    <View>
      <Text>Hello, I am...</Text>
      <Text>{name}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
};

export default Cat;
