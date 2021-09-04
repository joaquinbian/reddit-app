import React, { createContext, useEffect, useReducer } from "react";
import { MyRedditPosts, Posts } from "../interfaces/RedditIterface";
import { screens } from "../interfaces/dataInterface";
import reducer from "./reducer";
import axios from "axios";
import { api_redit } from "../api";
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
  sortPosts: (name: screens) => void;
  setSelected: (name: screens) => void;
  getPosts: () => Promise<void>;
}

export const appContext = createContext({} as AppContext);

const AppProvider = ({ children }: ProviderProp) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  //el initialstate es el estado que seteamos nosotros del array vacio y el selected

  //hacemos el llamado a la api para obtener los posts
  const getPosts = async () => {
    //hacemos el dispatch, lo que hace la funcion postToMyPosts es mapear todos los posts
    //y devolverlos con una interfaz que tiene los datos que realmente voy a usar luego
    const postsFetched = await axios.get<Posts>(api_redit);
    dispatch({ type: "getAll", payload: PostsToMyPosts(postsFetched.data) });
  };
  useEffect(() => {
    getPosts();
  }, []);

  const sortPosts = (name: screens) => {
    console.log("hola," + name);

    return dispatch({ type: name });
  };

  const setSelected = (name: screens) => {
    return dispatch({ type: "selectScreen", payload: name });
  };

  const data: AppContext = {
    state,
    sortPosts,
    setSelected,
    getPosts,
  };
  return <appContext.Provider value={data}>{children}</appContext.Provider>;
};
export default AppProvider;
