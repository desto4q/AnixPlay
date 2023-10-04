import React from "react";
import Anime_list from "../components/Anime_list";
import New_list from "../components/New_list";
import { dummy_content } from "../data/data";
import { useQuery } from "@tanstack/react-query";
import { fetchTop } from "../Api/Api";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function New_season() {
  const { id } = useParams();
  const { data, isLoading } = useQuery([id], async () => {
    return await fetchTop({ pageNum: id });
  });

  let Cards = data?.results?.map(({ image, title, id, episodeNumber }) => {
    return (
      <Card
        key={id}
        title={title}
        img={image}
        episode={episodeNumber}
        id={id}
      />
    );
  });

  return (
    <div className="new_season main_cont">
      <div className="left">
        <Anime_list Head={"New Season"} isLoading={isLoading} content={Cards && Cards} />
        {/* {
          isLoading ? <RotatingLines/>: null
        } */}
        <div className="loader">
        
        </div>  
      </div>
      <div className="right">
        <New_list title={"head"} content={dummy_content} />
        <New_list title={"head"} content={dummy_content} />
      </div>
    </div>
  );
}

export default New_season;
