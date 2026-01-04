import axios from "axios"

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
  },
});

export const fetchWeatherByCity = async (city, unit = "metric") => {
  const response = await fetch(
    `${BASE_URL}?q=${city}&units=${unit}&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
};
