import React, { useContext } from "react";
import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
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
  const { setSelected, state } = useContext(appContext);
  const { selected } = state;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: width / dataList.length,
        backgroundColor: selected === name ? "red" : "transparent",
        ...styles.item,
      }}
      onPress={() => setSelected(name)} //el name es el nombre de una screen porque asi lo definimos en la
      //interface de Data, entonces cuando se selecciona, se ejecuta el efecto de homescreen que hace el
      //llamado con ese mismo name, y entonces ahi hace la peticion
    >
      <Text
        style={{
          alignSelf: "center",
          color: selected === name ? "white" : "red",
          fontWeight: selected === name ? "bold" : "normal",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    borderColor: "red",
    borderWidth: 1,
    paddingVertical: 10,
    color: "red",
  },
});
