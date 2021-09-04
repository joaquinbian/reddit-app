import { MyRedditPosts, Posts } from "../interfaces/RedditIterface";

//creamos las funciones que van a odenar dependiendo de en que pantallas estén

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

export const sortNew = (a: MyRedditPosts, b: MyRedditPosts) => {
  //funcion que hace el sort de las fechas

  /**aclaracion **/
  //acá funcionaria igual sin el Number, pero typescript se queja entonces los convierto en numero
  //y como vienen en segundos, siguen funcionando
  const dateA = Number(new Date(a.created * 1000));
  const dateB = Number(new Date(b.created * 1000));
  return dateA - dateB;
};

export const sortTop = (a: MyRedditPosts, b: MyRedditPosts) => {
  //la misma logica que arriba, ordena de menor a mayor y en el reduce
  //le aplicamos el metodo reverse
  return a.upVotes - b.upVotes;
};

export const sortControversial = (a: MyRedditPosts, b: MyRedditPosts) => {
  //controversial es cuando tienen aproximadamente la misma cantidad de
  //upVotes que de downVotes, por eso resto los upVotes - downVotes
  // y si la diferencia es pequeña es porque son un numero
  //similar, entonces es controversial
  console.log({
    upVotes: a.upVotes,
  });

  if (a.upVotes - b.downVotes) return -1;
  if (b.upVotes - a.downVotes) return 1;
  return 0;
};
