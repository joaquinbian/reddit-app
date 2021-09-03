import axios from "axios";
import { useEffect, useState } from "react";
import { api_redit } from "../api";
import { MyRedditPosts, Posts } from "../interfaces/RedditIterface";

const usePosts = (cat?: string) => {
  const [posts, setPosts] = useState<MyRedditPosts[]>([]);

  const getPosts = async () => {
    const postsReddit = await axios.get<Posts>(api_redit);
    const arrPosts = postsReddit.data.data.children;
    console.log(arrPosts.length);

    const arrMyPosts: MyRedditPosts[] = arrPosts.map((p) => {
      return {
        author: p.data.author,
        title: p.data.title,
        image: p.data.thumbnail,
        comments: p.data.num_comments,
        score: p.data.score,
        created: p.data.created,
        upVotes: p.data.ups,
        totalVotes: p.data.ups + p.data.downs,
        url: p.data.url,
      };
    });

    setPosts(arrMyPosts);
    // setPosts([...arrMyPosts]);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return { posts };
};

export default usePosts;