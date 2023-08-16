import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const CheckInView = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <WebView source={{ uri: "https://steelhousecopenhagen.com" }} style={{ width: "100%" }} scalesPageToFit={true} />
    </View>
  );
};

export default CheckInView;
