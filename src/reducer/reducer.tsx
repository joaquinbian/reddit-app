import { MyRedditPosts } from "../interfaces/RedditIterface";
import {
  sortNew,
  sortTop,
  sortControversial,
  sortHot,
} from "../helpers/sortList";

type actionsType =
  | { type: "getAll"; payload: MyRedditPosts[] }
  | { type: "Top" }
  | { type: "Controversial" }
  | { type: "New" }
  | { type: "Hot" };

interface initState {
  posts: MyRedditPosts[];
}

const reducer = (state: initState, action: actionsType): initState => {
  const { posts } = state;
  switch (action.type) {
    case "getAll":
      return { posts: action.payload };
    case "New":
      return { posts: posts.sort(sortNew).reverse() };
    case "Top":
      return { posts: posts.sort(sortTop) };
    case "Controversial":
      return { posts: posts.sort(sortControversial) };
    case "Hot":
      return { posts: posts.sort(sortHot) };
    default:
      return state;
  }
};

export default reducer;
