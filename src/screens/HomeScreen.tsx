import React, { useContext, useEffect, useReducer, useState } from "react";
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
import reducer from "../context/reducer";
import { Posts } from "../interfaces/RedditIterface";
import { api_redit } from "../api";
import { PostsToMyPosts } from "../helpers/sortList";
import { dataList } from "../data/data";
import ListItem from "../components/ListItem";
import { appContext } from "../context/context";

//interfaz para obtener las propiedades de navigation (navigation, route...)
interface Props extends MaterialTopTabScreenProps<any, any> {}

const HomeScreen = ({ route }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { state, getPosts, sortPosts, setSelected } = useContext(appContext);
  const { posts, selected } = state;

  // const getPosts = async () => {
  //   //refreshing en true para que aparezca el loader
  //   setIsLoading(true);

  //   //enviamos la peticion y despachamos las acciones que van a agregar los posts al state
  //   //y al mismo tiempo le hace el sort
  //   const posts = await axios.get<Posts>(api_redit);
  //   dispatch({ type: "getAll", payload: PostsToMyPosts(posts.data) });
  //   dispatch({ type: route.name });

  //   setIsLoading(false);
  //   //una vez que los posts estan en el estado, seteamos el refreshing en false
  // };
  // useEffect(() => {
  //   //ejecucion de la funcion cuando se hace el mount,
  //   //esta funcion ya hace el sort dependiendo de la ruta en la que esté
  //   getPosts();
  // }, []);

  useEffect(() => {
    // setSelected("New");
    sortPosts(selected);
  }, []);

  const onRefresh = () => {
    getPosts().then(() => {
      sortPosts(selected);
    });
  };

  return (
    <View style={styles.container}>
      {!posts.length ? (
        <View style={styles.loadingView}>
          <ActivityIndicator color="orange" size={30} />
          <Text>Loading posts...</Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={dataList}
            renderItem={({ item }) => <ListItem item={item} />}
            keyExtractor={(item, index) => `${item.name}+${index}`}
            horizontal
          />
          <FlatList
            data={posts}
            renderItem={({ item }) => <PostCard post={item} />}
            keyExtractor={(item) => item.created.toString()}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 5 }} />}
            refreshing={isLoading}
            onRefresh={onRefresh}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 5,
    flex: 1,
  },
  loadingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
