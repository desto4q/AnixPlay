import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export let PageContext = createContext();

export const ContextMaker = ({ child }) => {

  let [Animname,setAnim] = useState()
  let [url,setUrl] = useState("")
        let value = {setAnim,Animname,url,setUrl}

  return <PageContext.Provider value={value}>{child}</PageContext.Provider>;
};
