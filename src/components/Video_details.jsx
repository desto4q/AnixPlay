import React from "react";

function Video_details({
  id,
  img,
  title,
  episodes,
  description,
  status,
  year,
}) {
  return (
    <div className="video_details">
      <img src={img && img} alt="" />
      <h4>{title && title}</h4>
      <div className="title">
        <div className="status_cont">
          <p className="status">
            {" "}
            Status: <span>{status && status}</span>
          </p>
          <p className="year">
            Year: <span> {year && year}</span>{" "}
          </p>
          <p className="epi_count">
            {" "}
            episodes: <span>{episodes && episodes}</span>
          </p>
        </div>
        <p className="description">{description && description}</p>
      </div>
    </div>
  );
}

export default Video_details;
