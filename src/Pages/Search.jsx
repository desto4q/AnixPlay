import React from "react";
import Anime_list from "../components/Anime_list";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../context/Context";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearch } from "../Api/Api";
import Card from "../components/Card";
// import {Anime_list} from "../components/Anime_list"
function Search() {

  const {sParam,setSParam} = useContext(PageContext)
  const {id} = useParams()
  let [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("q")
  useEffect(()=>{
      if (query) {
        setSParam(query)
      }
      else {
        if (sParam) {
          setSearchParams({q: sParam})
        }
      }
  },[])

  
  
  const {data,isLoading} = useQuery([id,query], async ()=> {
    return await fetchSearch({query:query,pageNum: id})
  })

  useEffect(()=> {
    
  },[data])



  let Cards = data?.results?.map(({image,title,id,episodeNumber})=>{
    return (<Card key={id} title={title} img={image} episode={episodeNumber} id={id}/>)
  })
  return (
    <div className="search main_cont">
      <div className="left">
        
        <Anime_list isLoading={isLoading} content={Cards && Cards} Head={"Search Results"}/>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Search;
