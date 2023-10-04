import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Nav from "../components/Nav";
import Anime from "../Pages/Anime";
import New_season from "../Pages/New_season";
import Movies from "../Pages/Movies";
import Search from "../Pages/Search";
import Stream from "../Pages/Stream";
import Redirect from "../components/Redirect";

function Page_router() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Redirect/>}/>
        <Route path="/:id" element={<Home />} />
        <Route path="/AnimeList/:id" element={<Anime/>} />
        <Route path="/NewSeason/:id" element={<New_season />} />
        <Route path="/Movies/:id" element={<Movies/>} />
        <Route path="/Search/:id" element={<Search/>}/>
        <Route path="/Stream/:id" element={<Stream/>}/>
        {/* <Route path="/">
          
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Page_router;
