import React from "react";
import { useState } from "react";
import { Arr } from "../data/data";
import Filters from "./Filters";
import Card from "./Card";

import Pagination from "./pagination";
import { useParams } from "react-router";

function Anime_list({ Head,content }) {
 
  return (
    <div className="anime_list">
      <Filters title={Head && Head} />
      <div className="cards">
        {/* {Arr.map((item, key) => {
          return <Card key={key} />;
        })} */}

        {content && content}
      </div>
        <Pagination/>
    </div>
  );
}

export default Anime_list;
