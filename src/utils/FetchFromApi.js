import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const options = {
  url: BASE_URL,
  params: {
   maxResults:500
  },
  headers: {
    "X-RapidAPI-Key": "25df2624bfmshf1d03389be2a971p19a1a2jsn330dc2f2cffa",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
    throw error;
  }
};
