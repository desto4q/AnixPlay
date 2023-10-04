import { useLocation } from "react-router";

export const Nav_links = [
  {
    text: "Home",
    to: "/1",
  },
  {
    text: "Anime list",
    to: "/AnimeList/1",
  },
  {
    text: "New release",
    to: "/NewSeason/1",
  },
  {
    text: "Movie",
    to: "/Movies/1",
  },

];

export const filter_list = ["All", "Sub", "dub"];

export let dummy_content = [
  {
    title: "narito",
    episode: 1,
  },
  {
    title: "narito",
    episode: 1,
  },
  {
    title: "narito",
    episode: 1,
  },
  {
    title: "narito",
    episode: 1,
  },
  {
    title: "narito",
    episode: 1,
  },
];



export let Arr = Array.from(Array(10))