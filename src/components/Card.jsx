import React from "react";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import { useContext } from "react";
import { PageContext } from "../context/Context";

function Card({ img, title, episode, id }) {
  let { setAnim } = useContext(PageContext);
  return (
    <Link
      to={`/Stream/${id}`}
      onClick={(e) => {
        setAnim(id);
      }}
      className="card"
    >
      <img loading="lazy" src={img && img} alt="" />
      <div className="text">
        <LinesEllipsis
          text={title && title}
          maxLine={"2"}
          ellipsis="..."
          trimRight
          basedOn="letters"
          className="title"
        />
        <div className="epi_cont">
          <p className="epi"> {episode && `Episode ${episode}`}</p>
          {/* <p className='type'> sub</p> */}
        </div>
      </div>
    </Link>
  );
}

export default Card;
