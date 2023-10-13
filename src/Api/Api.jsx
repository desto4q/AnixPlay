import axios from "axios";

export let fetch_recent = async ({ id }) => {
  try {
    let resp = await axios
      .get("https://api.consumet.org/anime/gogoanime/recent-episodes", {
        params: { page: id, type: 1 },
      })
      .then((res) => {
        return res.data;
      });
    return resp;
  } catch (err) {
    return err;
  }
};

export const fetcH_info = async ({ id }) => {
  let url = `https://api.consumet.org/anime/gogoanime/info/${id}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getStream = async ({ id }) => {
  let url = `https://api.consumet.org/anime/gogoanime/watch/${id && id}`;
  if (id) {
    try {
      const { data } = await axios.get(url, { params: { server: "gogocdn" } });
      // console.log(data)
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  else {
    throw new Error({})
  }
};

export const fetchSearch = async ({ query, pageNum }) => {
  const url = `https://api.consumet.org/anime/gogoanime/${query}?page=${pageNum}`;

  try {
    const { data } = await axios.get(url);
    // console.log(data)
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchTop = async ({ pageNum }) => {
  const url = "https://api.consumet.org/anime/gogoanime/top-airing";

  try {
    const { data } = await axios.get(url, { params: { page: pageNum } });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchTopSide = async () => {
  const url = "https://api.consumet.org/anime/gogoanime/top-airing";
  try {
    const { data } = await axios.get(url, { params: { page: 1 } });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
