import { actionsType } from "../context/reducer";
export type screens = "Hot" | "New" | "Controversial" | "Top";
export interface Data {
  name: screens;
}
