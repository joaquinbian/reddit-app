import React, { useContext, useEffect, useRef, useState } from "react";
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

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { state, getPosts, setSelected } = useContext(appContext);
  const { posts, selected } = state;
  const refList = useRef<FlatList<any>>(null); //si no le pongo null me sale warning de tipado

  console.log(selected);

  useEffect(() => {
    console.log("entro");

    getPosts(selected).then(() => {
      //cuando seleccionemos una nueva pantalla, si ibamos por la mitda
      //vuelve a emepzar desde arriba
      refList.current?.scrollToIndex({ index: 0, animated: false });
    });
  }, [selected]);

  const onRefresh = () => {
    setIsLoading(true);
    getPosts(selected).then(() => {
      setIsLoading(false);
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
            ref={refList}
            data={posts}
            renderItem={({ item }) => <PostCard post={item} />}
            keyExtractor={(item, index) => `${item.title}+${index}`}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 5 }} />}
            refreshing={isLoading}
            onRefresh={onRefresh}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <View style={{ marginBottom: 45 }} />}
            ListHeaderComponent={() => <View style={{ marginBottom: 5 }} />}
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
