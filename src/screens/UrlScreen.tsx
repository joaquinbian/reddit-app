import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";

interface Props extends StackScreenProps<RootStackParams, "Url"> {}
const UrlScreen = ({ route }: Props) => {
  const { url } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default UrlScreen;
