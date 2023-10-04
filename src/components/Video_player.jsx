import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";

function Video_player({ src }) {
  let [source, setSource] = useState();

  useEffect(() => {
    setSource(src?.url);
  }, [src]);

  return (
    <div className="player-wrapper">
      <ReactPlayer width={"100%"} pip className="react-player" url={source} controls />
    </div>
  );
}

export default Video_player;
