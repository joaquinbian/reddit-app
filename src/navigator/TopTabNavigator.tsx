import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Text, View } from "react-native";
const TopTabNavigator = () => {
  const TopTabNavigator = createMaterialTopTabNavigator();
  return (
    <TopTabNavigator.Navigator
      screenOptions={({ route }) => ({
        // tabBarStyle: { backgroundColor: "blue" },
        // tabBarActiveTintColor: "red",
        // tabBarContentContainerStyle: { backgroundColor: "red" },
        // activeBackgroundColor: "blue",
        tabBarActiveTintColor: "red",
        // tabBarInactiveTintColor: "blue",
        // tabBarLabelStyle: { fontSize: 7.7 },
        tabBarIndicatorStyle: { backgroundColor: "red" },
      })}
    >
      <TopTabNavigator.Screen name="New" component={HomeScreen} />
      <TopTabNavigator.Screen name="Top" component={HomeScreen} />
      <TopTabNavigator.Screen
        name="Controversial"
        component={HomeScreen}
        options={{ tabBarLabel: "Popular" }}
      />
      <TopTabNavigator.Screen name="Hot" component={HomeScreen} />
    </TopTabNavigator.Navigator>
  );
};
export default TopTabNavigator;
