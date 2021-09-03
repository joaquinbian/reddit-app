import axios from "axios";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { api_redit } from "../api";
import PostCard from "../components/PostCard";
import usePosts from "../hooks/usePosts";
import { Posts } from "../interfaces/RedditIterface";

const HomeScreen = () => {
  // const [posts, setPosts] = useState([])
  const { posts } = usePosts();

  const getPosts = async () => {
    const redditPosts = await axios.get<Posts>(api_redit);
    // console.log(redditPosts.data.data.children[21].data);
  };
  getPosts();
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostCard post={item} />}
      keyExtractor={(item) => item.created.toString()}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
