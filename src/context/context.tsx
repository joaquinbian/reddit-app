import React, { createContext, useReducer } from "react";
import { MyRedditPosts, Posts } from "../interfaces/RedditIterface";
import { screens } from "../interfaces/dataInterface";
import reducer from "./reducer";
import axios from "axios";
import { PostsToMyPosts } from "../helpers/sortList";

interface ProviderProp {
  children: JSX.Element | JSX.Element[];
}

//definimos como va ser nuestro estado con esta interfaz
export interface AppState {
  posts: MyRedditPosts[];
  selected: screens;
}

//lo "inicializamos", este va a ser lo que vamos a ver nosotros
const initalState: AppState = {
  posts: [],
  selected: "New", //por defecto va a ser new la ventana seleccionada
};

//esto es lo que realmente expone, expone
//el estado nuestro que va a ser manejado
//por el reducer y las funciones que hacen
//los dispatch para modificarlo

export interface AppContext {
  state: AppState;
  setSelected: (name: screens) => void;
  getPosts: (name: screens) => Promise<void>;
}

export const appContext = createContext({} as AppContext);

const AppProvider = ({ children }: ProviderProp) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  //el initialstate es el estado que seteamos nosotros del array vacio y el selected

  //hacemos el llamado a la api para obtener los posts
  const getPosts = async (name: screens) => {
    //hacemos el dispatch, lo que hace la funcion postToMyPosts es mapear todos los posts
    //y devolverlos con una interfaz que tiene los datos que realmente voy a usar luego
    const postsFetched = await axios.get<Posts>(
      `https://api.reddit.com/r/pics/${name.toLowerCase()}.json`
    );
    dispatch({ type: "getAll", payload: PostsToMyPosts(postsFetched.data) });
  };

  const setSelected = (name: screens) => {
    return dispatch({ type: "selectScreen", payload: name });
  };

  const data: AppContext = {
    state,
    setSelected,
    getPosts,
  };
  return <appContext.Provider value={data}>{children}</appContext.Provider>;
};
export default AppProvider;
