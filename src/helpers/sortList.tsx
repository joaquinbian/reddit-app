import { MyRedditPosts } from "../interfaces/RedditIterface";

//creamos las funciones que van a odenar dependiendo de en que pantallas estén

export const sortNew = (a: MyRedditPosts, b: MyRedditPosts) => {
  const dateA = new Date(a.created * 1000).toLocaleString();
  const dateB = new Date(b.created * 1000).toLocaleString();
  if (dateA < dateB) return -1;
  else if (dateB < dateA) return 1;
  return 0;
};

export const sortTop = (a: MyRedditPosts, b: MyRedditPosts) => {};
