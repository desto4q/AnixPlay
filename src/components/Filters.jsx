import React from "react";
import { useState } from "react";
import { filter_list } from "../data/data";

function Filters({title}) {
  const [active_filter, setActive] = useState("all");
  return (
    <div className="header">
      <h3>{title?title:"Recent Release"}</h3>
      <div className="filter_list">
        {/* {filter_list.map((item) => {
          if (item.toLowerCase() == active_filter) {
            return (
              <div className="filter filter_active" key={item}>
                {item}
              </div>
            );
          }
          return (
            <div
              className="filter"
              onClick={(e) => {
                setActive(item.toLowerCase());
              }}
              key={item}
            >
              {item}
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default Filters;
