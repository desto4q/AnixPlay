import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export let PageContext = createContext();

export const ContextMaker = ({ child }) => {
  
  // let [searcParam,setSearchParam] = useSearchParams()
  // console.log(searcParam.get("q"))

  let [sParam,setSParam] = useState("")
  let value = { sParam,setSParam};

  return <PageContext.Provider value={value}>{child}</PageContext.Provider>;
};
