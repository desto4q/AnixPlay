import React from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { fetcH_info, getStream } from "../Api/Api"; // Importing functions from external modules
import { useParams } from "react-router-dom"; // Importing a hook for getting URL parameters
import { useState } from "react"; // Importing the useState hook
import Video_details from "../components/Video_details"; // Importing a custom component
import { Link } from "react-router-dom"; // Importing a component for creating links
import { useEffect } from "react"; // Importing the useEffect hook
import { useRef } from "react"; // Importing the useRef hook
import Video_player from "../components/Video_player"; // Importing a custom video player component
import { Radio } from "react-loader-spinner"; // Importing a loading spinner component
import { SxPaginate } from "sx-paginate"; // Importing a custom pagination component
import "sx-paginate/dist/index.css"; // Importing CSS for the pagination component
import { NavLink } from "react-router-dom"; // Importing a component for creating navigational links

// Define a functional component called Stream
function Stream() {
  let [vid_source, setVideo] = useState(); // Declare a state variable for video source and a setter function
  let ref = useRef(); // Create a ref object

  let { id } = useParams(); // Get the 'id' parameter from the URL using the useParams hook
  id; // This line appears to be unnecessary and doesn't do anything

  let regex = /\d+$/; // Define a regular expression to match digits at the end of a string
  const matches = id.match(regex); // Use the regular expression to find matches in the 'id' string

  // Use the useQuery hook to fetch data based on the 'id' parameter
  let { data } = useQuery([id], async () => {
    if (id) {
      let info_String = id.replace(/-episode-\d+/g, ""); // Extract the episode information from the 'id' string
      return await fetcH_info({ id: info_String }); // Fetch data using the 'fetcH_info' function
    }
  });

  // Use the useQuery hook to fetch streaming data based on 'id' and 'data.episodes'
  let { data: Streamdata, isLoading: streamloading } = useQuery(
    [id, data?.episodes],
    async () => {
      // Check if the 'id' contains the word 'episode'
      let subString = "episode";
      const regex = new RegExp(subString, "i");
      if (regex.test(id)) {
        const regex = /\d+$/;
        const matches = id.match(regex); // Extract the episode number from the 'id'
        let numId = parseInt(matches[0]) - 1; // Convert the episode number to an index
        let epid = await data?.episodes[numId].id; // Get the episode ID from the data
        return await getStream({ id: epid }); // Fetch the stream data using 'getStream'
      } else {
        let subString = `${id}-episode-1`;
        let epid = await data?.episodes[0].id; // Get the ID of the first episode
        return await getStream({ id: epid }); // Fetch the stream data for the first episode
      }
    }
  );

  // useEffect hook to set the video source when Streamdata.sources is available
  useEffect(() => {
    if (Streamdata?.sources) {
      setVideo(Streamdata?.sources[0]); // Set the video source to the first source in the array
      console.log();
    }
  }, [Streamdata]);

  let List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 2]; // Define an array named 'List'

  console.log(data);
  // Define a function 'onPaginate' to handle pagination
  const onPaginate = (pageNumber) => {
    console.log(pageNumber); // Log the selected page number to the console
  };

  // Define a state variable 'paginatedPosts' and a setter function
  const [paginatedPosts, setPaginatedPosts] = useState([]);

  // Render the JSX for the Stream component
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
