import axios from "axios";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { api_redit } from "../api";
import PostCard from "../components/PostCard";
import usePosts from "../hooks/usePosts";
import { Posts } from "../interfaces/RedditIterface";

const HomeScreen = () => {
  const { posts } = usePosts();

  // const getPosts = async () => {
  //   const redditPosts = await axios.get<Posts>(api_redit);
  // };
  // getPosts();
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
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
