import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import UrlScreen from "../screens/UrlScreen";

export type RootStackParams = {
  Home: undefined;
  Url: { url: string; title: string };
};
const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: "transparent", //para que no salga en ios
          elevation: 0, //para que no salga la sombra del header en android
          borderBottomColor: "rgba(0,0,0,.2)",
          borderBottomWidth: 1,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "reddit/r/programing" }}
      />
      <Stack.Screen name="Url" component={UrlScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
