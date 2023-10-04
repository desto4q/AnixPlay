import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcH_info } from "../Api/Api";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Stream() {
  // let {id} = useParams()
  // let {data} = useQuery([id],async ()=>{
  //   return await fetcH_info({id: id})
  // })
  // // console.log( data)
  // console.log(data)
  let [vid_source, setVideo] = useState();
  return (
    <div className="stream main_cont">
      <div className="left">
        <div className="video">
          <video controls>
            <source />
          </video>
        </div>
        <div className="sources">
        </div>
        <div className="episode_list">

        </div>
      </div>
      <div className="right">
        
      </div>
    </div>
  );
}

export default Stream;
