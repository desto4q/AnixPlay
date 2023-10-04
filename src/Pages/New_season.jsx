import React from "react";
import Anime_list from "../components/Anime_list";
import New_list from "../components/New_list";
import { dummy_content } from "../data/data";

function New_season() {
  return (
    <div className="new_season main_cont">
      <div className="left">
        <Anime_list Head={"New Season"} />
      </div>
      <div className="right">
        <New_list title={"head"} content={dummy_content} />
        <New_list title={"head"} content={dummy_content} />
      </div>
    </div>
  );
}

export default New_season;
