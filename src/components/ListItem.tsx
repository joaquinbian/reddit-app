import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { Data } from "../interfaces/dataInterface";
import { dataList } from "../data/data";
import { appContext } from "../context/context";

interface Props {
  item: Data;
}

const ListItem = ({ item }: Props) => {
  const { width } = useWindowDimensions();
  const { name } = item;
  const { setSelected, sortPosts, state } = useContext(appContext);
  const { selected } = state;

  //nosotros aca recibimos el nombre, entonces ejecutamos una funcion
  //que dentro va a ejecutar dos funciones que expone el context:
  //una para selecionar la pantalla, y la otra para hacer el sort

  const onTouch = () => {
    setSelected(name);
    sortPosts(name);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: width / dataList.length,
        backgroundColor: selected === name ? "red" : "#fff",
        justifyContent: "center",
        height: 30,
      }}
      onPress={onTouch}
    >
      <Text style={{ alignSelf: "center" }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
