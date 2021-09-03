import React, { createContext } from "react";
import { MyRedditPosts } from "../interfaces/RedditIterface";

interface State {
  posts: MyRedditPosts[];
}

export const appContext = createContext({} as State);
