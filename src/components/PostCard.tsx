import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MyRedditPosts, Posts } from "../interfaces/RedditIterface";

interface Props {
  post: MyRedditPosts;
}
const PostCard = ({ post }: Props) => {
  const date = new Date(post.created * 1000).toLocaleString();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate("Url", { url: post.url });
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={{ uri: post.image }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View
          style={{ flex: 1, marginLeft: 5, justifyContent: "space-evenly" }}
        >
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.title}>{post.title}</Text>
          <View style={styles.postInfo}>
            <Text style={styles.textInfo}>{post.author}</Text>
            <Text style={styles.textInfo}>score: {post.score}</Text>
            <Text style={styles.textInfo}>{post.comments} comments</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  date: {
    alignSelf: "flex-end",
    fontSize: 12,
    marginVertical: 2,
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  textInfo: {
    fontSize: 11,
  },
});
