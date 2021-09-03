import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyRedditPosts, Posts } from "../interfaces/RedditIterface";

interface Props {
  post: MyRedditPosts;
}
const PostCard = ({ post }: Props) => {
  return (
    <View style={{ backgroundColor: "red" }}>
      <Text>{post.author}</Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({});
