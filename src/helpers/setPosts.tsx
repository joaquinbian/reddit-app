import { MyRedditPosts, Posts } from "../interfaces/RedditIterface";

//esta function nos hace un arreglo con los posts pero que solo tienen la data que necestio
export const PostsToMyPosts = (arr: Posts): MyRedditPosts[] => {
  const arrPosts = arr.data.children;

  return arrPosts.map((p) => {
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
};
