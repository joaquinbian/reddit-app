import React, { useEffect, useReducer, useState } from "react";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { StyleSheet, View, FlatList } from "react-native";
import PostCard from "../components/PostCard";
import usePosts from "../hooks/usePosts";
import reducer from "../reducer/reducer";
import { MyRedditPosts, Posts } from "../interfaces/RedditIterface";
import axios from "axios";
import { api_redit } from "../api";
import { PostsToMyPosts } from "../helpers/sortList";

//interfaz para obtener las propiedades de navigation (navigation, route...)
interface Props extends MaterialTopTabScreenProps<any, any> {}

const HomeScreen = ({ route, navigation }: Props) => {
  const [{ isLoading, posts }, dispatch] = useReducer(reducer, {
    posts: [], //donde van a estar los posts
    isLoading: false, //loading para el refresh y para cuando se hace la carga
  });
  const [refreshing, setRefreshing] = useState(false);

  const setPosts = async () => {
    //refreshing en true para que aparezca el loader
    setRefreshing(true);

    //enviamos la peticion y despachamos las acciones que van a agregar los posts al state
    //y al mismo tiempo le hace el sort
    const posts = await axios.get<Posts>(api_redit);
    dispatch({ type: "getAll", payload: PostsToMyPosts(posts.data) });
    dispatch({ type: route.name });

    //una vez que los posts estan en el estado, seteamos el refreshing en false
    setRefreshing(false);
  };
  useEffect(() => {
    //ejecucion de la funcion cuando se hace el mount
    setPosts();
  }, []);

  useEffect(() => {
    // agrego un listener que ejecute el filtrado cuando se haga navegue
    // a x pantalla obteniendo el route.name, y en base a eso filtro

    const onFocus = navigation.addListener("focus", () => {
      dispatch({ type: route.name });
      console.log(route.name);
    });

    return onFocus;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) => item.created.toString()}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 5 }} />}
        refreshing={refreshing}
        onRefresh={setPosts}
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
