import { MyRedditPosts } from "../interfaces/RedditIterface";
import { AppContext, AppState } from "./context";
import { screens } from "../interfaces/dataInterface";
import {
  sortNew,
  sortTop,
  sortControversial,
  sortHot,
} from "../helpers/sortList";

export type actionsType =
  | { type: "getAll"; payload: MyRedditPosts[] }
  | { type: "Top" }
  | { type: "Controversial" }
  | { type: "New" }
  | { type: "Hot" }
  | { type: "selectScreen"; payload: screens };

const reducer = (state: AppState, action: actionsType): AppState => {
  const { posts } = state;
  switch (action.type) {
    case "getAll":
      return { ...state, posts: action.payload };
    case "New":
      return { ...state, posts: posts.sort(sortNew).reverse() };
    case "Top":
      return { ...state, posts: posts.sort(sortTop) };
    case "Controversial":
      console.log("aca toy controversial");

      return { ...state, posts: posts.sort(sortControversial) };
    case "Hot":
      return { ...state, posts: posts.sort(sortHot) };

    case "selectScreen":
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default reducer;
