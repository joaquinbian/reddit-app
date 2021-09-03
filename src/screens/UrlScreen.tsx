import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";

interface Props extends StackScreenProps<RootStackParams, "Url"> {}
const UrlScreen = ({ route }: Props) => {
  const { url } = route.params;
  console.log(url);

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default UrlScreen;

const styles = StyleSheet.create({});
