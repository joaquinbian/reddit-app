import React, { useEffect, useReducer, useState } from "react";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import PostCard from "../components/PostCard";
import reducer from "../reducer/reducer";
import { Posts } from "../interfaces/RedditIterface";
import { api_redit } from "../api";
import { PostsToMyPosts } from "../helpers/sortList";
import usePosts from "../hooks/usePosts";

//interfaz para obtener las propiedades de navigation (navigation, route...)
interface Props extends MaterialTopTabScreenProps<any, any> {}

const HomeScreen = ({ route }: Props) => {
  const [{ posts }, dispatch] = useReducer(reducer, {
    posts: [], //donde van a estar los posts
  });

  const [isLoading, setIsLoading] = useState(false);

  const getPosts = async () => {
    //refreshing en true para que aparezca el loader
    setIsLoading(true);

    //enviamos la peticion y despachamos las acciones que van a agregar los posts al state
    //y al mismo tiempo le hace el sort
    const posts = await axios.get<Posts>(api_redit);
    dispatch({ type: "getAll", payload: PostsToMyPosts(posts.data) });
    dispatch({ type: route.name });

    setIsLoading(false);
    //una vez que los posts estan en el estado, seteamos el refreshing en false
  };
  useEffect(() => {
    //ejecucion de la funcion cuando se hace el mount,
    //esta funcion ya hace el sort dependiendo de la ruta en la que esté
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      {!posts.length ? (
        <View style={styles.loadingView}>
          <ActivityIndicator color="orange" size={30} />
          <Text>Loading posts...</Text>
        </View>
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostCard post={item} />}
          keyExtractor={(item) => item.created.toString()}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 5 }} />}
          refreshing={isLoading}
          onRefresh={getPosts}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    flex: 1,
  },
  loadingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
