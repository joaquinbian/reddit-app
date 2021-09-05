import { MyRedditPosts } from "../interfaces/RedditIterface";
const sortNew = (a: MyRedditPosts, b: MyRedditPosts) => {
  //funcion que hace el sort de las fechas

  /**aclaracion **/
  //acá funcionaria igual sin el Number, pero typescript se queja entonces los convierto en numero
  //y como vienen en segundos, siguen funcionando
  const dateA = Number(new Date(a.created * 1000));
  const dateB = Number(new Date(b.created * 1000));
  return dateA - dateB;
};

const sortTop = (a: MyRedditPosts, b: MyRedditPosts) => {
  //la misma logica que arriba, ordena de menor a mayor y en el reduce
  //le aplicamos el metodo reverse
  return a.upVotes - b.upVotes;
};

const sortControversial = (a: MyRedditPosts, b: MyRedditPosts) => {
  //controversial es cuando tienen aproximadamente la misma cantidad de
  //upVotes que de downVotes, por eso resto los upVotes - downVotes
  // y si la diferencia es pequeña es porque son un numero
  //similar, entonces es controversial

  if (a.upVotes - b.downVotes) return -1;
  if (b.upVotes - a.downVotes) return 1;
  return 0;
};
