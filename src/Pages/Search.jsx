import React from "react";
import Anime_list from "../components/Anime_list";

// import {Anime_list} from "../components/Anime_list"
function Search() {
  return (
    <div className="search main_cont">
      <div className="left">
        <Anime_list />
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Search;
