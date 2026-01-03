const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherByCity = async (city, unit = "metric") => {
  const response = await fetch(
    `${BASE_URL}?q=${city}&units=${unit}&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
};