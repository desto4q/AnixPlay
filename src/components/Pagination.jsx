import React from "react";
import { IconMinus } from "@tabler/icons-react";
import { IconPlus } from "@tabler/icons-react";
import { useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useId } from "react";
import { Link } from "react-router-dom";

function Pagination() {
  let location = useLocation().pathname;
  let { id } = useParams();
  let navigate = useNavigate();
  let page =  location.slice(0, location.lastIndexOf('/'))
  let NextPage = (number) => {
    let currPage = parseInt(number);
    currPage += 1;
    navigate(`${page}/${currPage}`)
  };
  let PrevPage = (number) => {
    let currPage = parseInt(number);
    if (currPage >= 2) {
        currPage -= 1;
    }
    navigate(`${page}/${currPage}`)

  };

  return (
    <div className="pagination">
      <button
        onClick={(e) => {
          PrevPage(id)
          
        }}
      >
        <IconMinus />
      </button>
      <div className="number">{parseInt(id)}</div>
      <button
        onClick={() => {
            NextPage(id);
        }}
      >
        <IconPlus />
      </button >
    </div>
  );
}

export default Pagination;
