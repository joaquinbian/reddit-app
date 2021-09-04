import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { api_redit } from "../api";
import { MyRedditPosts, Posts } from "../interfaces/RedditIterface";
import reducer from "../reducer/reducer";
import {
  sortNew,
  sortControversial,
  sortHot,
  sortTop,
} from "../helpers/sortList";

type screens = "Top" | "New" | "Controversial" | "Hot";

const usePosts = (cat?: screens) => {
  const [posts, setPosts] = useState<MyRedditPosts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [state, dispatch] =  useReducer(reducer, [])

  const getPosts = async () => {
    setIsLoading(true);
    const postsReddit = await axios.get<Posts>(api_redit);
    const arrPosts = postsReddit.data.data.children;

    const arrMyPosts: MyRedditPosts[] = arrPosts.map((p) => {
      return {
        author: p.data.author,
        title: p.data.title,
        image: p.data.thumbnail,
        comments: p.data.num_comments,
        score: p.data.score,
        created: p.data.created,
        upVotes: p.data.ups,
        downVotes: p.data.downs,
        url: p.data.url,
      };
    });

    setPosts(sortPosts(arrMyPosts));
    setIsLoading(false);
  };

  const sortPosts = (arr: MyRedditPosts[]) => {
    switch (cat) {
      case "New":
        return arr.sort(sortNew);
      case "Controversial":
        return arr.sort(sortControversial);
      case "Hot":
        return arr.sort(sortHot);
      case "Top":
        return arr.sort(sortTop);
      default:
        return arr;
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return { posts, isLoading };
};

export default usePosts;
