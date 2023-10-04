import { createContext } from "react";
import { useContext } from "react";

let PageContext = createContext();

export const ContextMaker = ({ child }) => {

        let value = {}

  return <PageContext.Provider value={value}>{child}</PageContext.Provider>;
};
