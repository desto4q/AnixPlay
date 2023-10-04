import React from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { fetcH_info, getStream } from "../Api/Api";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Video_details from "../components/Video_details";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import Video_player from "../components/Video_player";




function Stream() {
  let [vid_source, setVideo] = useState();
  let ref = useRef()

  let { id } = useParams();
  id;
  let regex = /\d+$/;
  const matches = id.match(regex);

  let { data } = useQuery([id], async () => {
    if (id) {
      let info_String = id.replace(/-episode-\d+/g, "");
      return await fetcH_info({ id: info_String });
    }
  });

  let { data: Streamdata,isLoading: streamloading } = useQuery([id, data?.episodes], async () => {
    let subString = "episode";
    const regex = new RegExp(subString, "i");
    if (regex.test(id)) {
      const regex = /\d+$/;
      const matches = id.match(regex);
      let numId = parseInt(matches[0]) - 1;
      let epid = await data?.episodes[numId].id;
      return await getStream({ id: epid });
    } else {
      let subString =  `${id}-episode-1`;
      let epid = await data?.episodes[0].id;
      return await getStream({ id: epid });
    }
  });

  
  useEffect(()=>{
    if (Streamdata?.sources){
        setVideo(Streamdata?.sources[0])
        console.log()
    }
  },[Streamdata])


  
  

  return (
    <div className="stream main_cont">
      <div className="left">
        <div className="video">
          <Video_player src={vid_source && vid_source}/>

          <div className="quality_list">
            {Streamdata?.sources.map((item)=>{
                return (
                  <div className="quality" key={item} onClick={e=>{
                    setVideo(item)
                  }}>
                    {item?.quality}
                  </div>
                )
            })}
          </div>
        </div>
        <div className="sources"></div>
        <div className="episode_list">
          <h3>Episodes</h3>
          <div className="cont">
            {data?.episodes.map(({ id, number, url }) => {
              return (
                <Link
                  to={`/Stream/${id}`}
                  className="button"
                  key={id}
                  onClick={async (e) => {
                    setUrl(url);
                    // setVideo(getStream({url:url}))
                  }}
                >
                  {number}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="right">
        <Video_details
          img={data?.image}
          title={data?.title}
          description={data?.description}
          year={data?.releaseDate}
          status={data?.status}
          episodes={data?.totalEpisodes}
        />
      </div>
    </div>
  );
}

export default Stream;
