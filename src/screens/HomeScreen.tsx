import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import PostCard from "../components/PostCard";

import { dataList } from "../data/data";
import ListItem from "../components/ListItem";
import { appContext } from "../context/context";

//interfaz para obtener las propiedades de navigation (navigation, route...)

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { state, getPosts } = useContext(appContext);
  const { posts, selected } = state;

  useEffect(() => {
    getPosts(selected);
    console.log("entre");
  }, [selected]);

  const onRefresh = () => {
    getPosts(selected);
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
            ListFooterComponent={() => <View style={{ marginBottom: 35 }} />}
            ListHeaderComponent={() => <View style={{ marginBottom: 5 }} />}
            style={{ marginHorizontal: 5 }}
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
