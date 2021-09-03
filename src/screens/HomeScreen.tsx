import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import PostCard from "../components/PostCard";
import usePosts from "../hooks/usePosts";
import { sortNew } from "../helpers/sortList";

//interfaz para obtener las propiedades de navigation (navigation, route...)
interface Props extends MaterialTopTabScreenProps<any, any> {}

const HomeScreen = ({ route, navigation }: Props) => {
  const { posts } = usePosts();

  useEffect(() => {
    // agrego un listener que ejecute el filtrado cuando se haga navegue
    // a x pantalla obteniendo el route.name, y en base a eso filtro

    const onFocus = navigation.addListener("focus", () => {
      console.log(route.name);
    });

    return onFocus;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts.sort(sortNew)}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) => item.created.toString()}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 5 }} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
});
