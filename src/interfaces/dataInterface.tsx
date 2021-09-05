export type screens = "Hot" | "New" | "Controversial" | "Top"; //las screens por las que vamos a filtrar
export interface Data {
  name: screens; //este objeto va a ser el modelo de cada item de la lista que va a renderizar el navbar, el texto va a ser el name
  //que a su vez va a ser una pantalla para filtrar luego
}
