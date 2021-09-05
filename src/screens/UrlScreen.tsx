import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Alert,
  TextComponent,
  ActivityIndicator,
} from "react-native";
import WebView from "react-native-webview";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";

interface Props extends StackScreenProps<RootStackParams, "Url"> {}

const UrlScreen = ({ route, navigation }: Props) => {
  const { title, url } = route.params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default UrlScreen;
