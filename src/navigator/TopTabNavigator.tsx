import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
const TopTabNavigator = () => {
  const TopTabNavigator = createMaterialTopTabNavigator();
  return (
    <TopTabNavigator.Navigator>
      <TopTabNavigator.Screen name="New" component={HomeScreen} />
      <TopTabNavigator.Screen name="Top" component={HomeScreen} />
      <TopTabNavigator.Screen name="Controversial" component={HomeScreen} />
    </TopTabNavigator.Navigator>
  );
};
export default TopTabNavigator;
