import React from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { fetcH_info, getStream } from "../Api/Api"; 
import { useParams } from "react-router-dom"; 
import { useState } from "react"; 
import Video_details from "../components/Video_details"; 
import { Link } from "react-router-dom"; 
import { useEffect } from "react"; 
import Video_player from "../components/Video_player"; 
import { SxPaginate } from "sx-paginate"; 
import "sx-paginate/dist/index.css"; 
import { Radio } from "react-loader-spinner";
// Define a functional component called Stream
function Stream() {

  let [vid_source, setVideo] = useState(); // Declare a state variable for video source and a setter function

  let { id } = useParams(); // Get the 'id' parameter from the URL using the useParams hook

  let regex = /\d+$/; 
  const matches = id.match(regex);
  let { data } = useQuery([id], async () => {
    if (id) {
      let info_String = id.replace(/-episode-\d+/g, ""); 
      return await fetcH_info({ id: info_String }); 
    }
  });

  
  let { data: Streamdata, isLoading: streamloading } = useQuery(
    [id, data?.episodes],
    async () => {
      // Check if the 'id' contains the word 'episode'
      let subString = "episode";
      const regex = new RegExp(subString, "i");
      if (regex.test(id)) {
        const regex = /\d+$/;
        const matches = id.match(regex); 
        let numId = parseInt(matches[0]) - 1; 
        let epid = await data?.episodes[numId].id; 
        return await getStream({ id: epid });
      } else {
        let subString = `${id}-episode-1`;
        let epid = await data?.episodes[0].id; 
        return await getStream({ id: epid });
      }
    }
  );

  useEffect(() => {
    if (Streamdata?.sources) {
      setVideo(Streamdata?.sources[0]); // Set the video source to the first source in the array
    }
  }, [Streamdata]);


  const onPaginate = (pageNumber) => {
    console.log(pageNumber); // Log the selected page number to the console
  };

  const [paginatedPosts, setPaginatedPosts] = useState([]);

  return (
    <div className="stream main_cont">
      <div className="left">
        <div className="video">
          {streamloading ? ( // Conditional rendering based on the 'streamloading' variable
            <Radio
              wrapperClass="radio"
              colors={["#ffa42e", "#ffa42e", "#ffa42e"]}
            />
          ) : (
            <Video_player src={vid_source && vid_source} /> // Render the video player component
          )}

          <div className="quality_list">
            {Streamdata?.sources.map((item, key) => {
              // Map over the sources in Streamdata and render them
              return (
                <div
                  className="quality"
                  key={key}
                  onClick={(e) => {
                    setVideo(item); // Set the video source when a quality is clicked
                  }}
                >
                  {item?.quality}
                </div>
              );
            })}
          </div>
        </div>
        <div className="details_mobile">
          <div className="details_title">
            {data?.title}
            <div className="details_year">{data?.releaseDate}</div>
            <div className="details_type">{data?.subOrDub}</div>
          </div>
          <p>{data?.description}</p>
        </div>
        <div className="sources"></div>
        <div className="episode_list">
          <h3>Episodes</h3>
          <div className="cont">
            {paginatedPosts.map(({ id, number, url }) => {
              // Map over paginated posts and render episode links
              return (
                <Link
                  to={`/Stream/${id}`}
                  className="button"
                  key={id}
                  onClick={async (e) => {
                    setUrl(url); // Set the URL (setUrl is not defined in this code)
                    // setVideo(getStream({url:url})) // Set the video source (commented out)
                  }}
                >
                  {number}
                </Link>
              );
            })}
          </div>
          <SxPaginate
            recordsPerPage={50}
            setRecords={setPaginatedPosts}
            records={data?.episodes}
            onPaginate={onPaginate}
            activeColor="#ffa42e"
            buttonStyle={{
              color: "white",
              background: "hsla(212, 44%, 32%, 1)",
              outline: "none",
              border: "none",
            }}
            activeBtnStyle={{ background: "#ffa42e", border: "none" }}
          />
        </div>
      </div>
      <div className="right">
        {streamloading ? (
          <Radio
            wrapperClass="radio"
            colors={["#ffa42e", "#ffa42e", "#ffa42e"]}
          />
        ) : null}
        <Video_details
          img={data?.image}
          title={data?.title}
          description={data?.description}
          year={data?.releaseDate}
          status={data?.status}
          episodes={data?.totalEpisodes}
          subOrDub={data?.subOrDub}
        />
      </div>
    </div>
  );
}

export default Stream; // Export the Stream component as the default export
