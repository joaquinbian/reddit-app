import { MyRedditPosts } from "../interfaces/RedditIterface";
import { AppState } from "./context";
import { screens } from "../interfaces/dataInterface";

export type actionsType =
  | { type: "getAll"; payload: MyRedditPosts[] }
  | { type: "selectScreen"; payload: screens };

const reducer = (state: AppState, action: actionsType): AppState => {
  switch (action.type) {
    case "getAll":
      return { ...state, posts: action.payload };
    case "selectScreen":
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default reducer;
