import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import UrlScreen from "../screens/UrlScreen";

export type RootStackParams = {
  Url: { url: string };
};
const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Url" component={UrlScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
