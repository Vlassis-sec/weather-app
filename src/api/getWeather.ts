// import Weather from "../components/Weather";
import { Weather } from "./Weather";
import { ApiError } from "../utilities/ApiError";

const API_KEY = import.meta.env.VITE_APP_ID;
const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&q=`;

export const getWeather = async (city: string): Promise<Weather> => {
  const response = await fetch(URL + city);
  const data = await response.json();
  if (!response.ok) {
    throw new ApiError(response.status, data);
  }
  return data;
};
