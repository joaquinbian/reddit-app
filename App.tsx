import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigator/StackNavigator";
import AppProvider from "./src/context/context";

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <StackNavigator />
      </AppProvider>
    </NavigationContainer>
  );
}
