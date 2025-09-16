import axios from "axios";
const NASA_API_KEY = "BREWrIP0TE4n8VUcTqgJc4ehuW09cfhdaZu67Il4"; // ⚡ pon tu API KEY real
const BASE_URL = "https://api.nasa.gov";
export const getApod = async () => {
  const res = await axios.get(`${BASE_URL}/planetary/apod?api_key=${NASA_API_KEY}`);
  return res.data;
};
export const searchImages = async (query) => {
  const res = await axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
  return res.data.collection.items;
};