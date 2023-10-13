import React from "react";
import { useState } from "react";
import { Arr } from "../data/data";
import Filters from "./Filters";
import Card from "./Card";
import Pagination from "./Pagination";
import { useParams } from "react-router";
import { RotatingLines } from "react-loader-spinner";

function Anime_list({ Head, content, isLoading }) {
  return (
    <div className="anime_list">
      <Filters title={Head && Head} />
      <div className="cards">
        {content && content}
      </div>
      <div className="loader">
        {isLoading && isLoading ? (
          <RotatingLines
            strokeColor="#ffa42e"
            strokeWidth="5"
            animationDuration="0.75"
            width="58"

            visible={true}
          />
        ) : null}
        
      </div>
      <Pagination />
    </div>
  );
}

export default Anime_list;
