import { MyRedditPosts } from "../interfaces/RedditIterface";
import { sortNew, sortTop } from "../helpers/sortList";

type actionsType =
  | { type: "getAll"; payload: MyRedditPosts[] }
  | { type: "Top" }
  | { type: "Controversial" }
  | { type: "New" }
  | { type: "Hot" }
  | { type: "loading" };

interface initState {
  isLoading: boolean;
  posts: MyRedditPosts[];
}

const reducer = (state: initState, action: actionsType): initState => {
  const { isLoading, posts } = state;
  switch (action.type) {
    case "getAll":
      return { isLoading: false, posts: action.payload };
    case "New":
      return { ...state, posts: posts.sort(sortNew).reverse() };
    case "Top":
      return { ...state, posts: posts.sort(sortTop) };
    case "loading":
      return { ...state, isLoading: !isLoading };
    default:
      return state;
  }
};

export default reducer;
