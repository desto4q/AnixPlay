import axios from "axios";

export let fetch_recent =  async ({id}) => {
  try {
    let resp = await axios.get("https://api.consumet.org/anime/gogoanime/recent-episodes", { params: { page: id, type: 1 } }).then(res=>{
      return res.data
    })
    return resp;
  } catch (err) {
    return err;
  }
};


export const fetcH_info = async ({id}) => {
  let url  = `https://api.consumet.org/anime/gogoanime/info/${id}`
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};