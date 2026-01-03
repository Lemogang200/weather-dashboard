import React, { useState } from "react";
import { fetchWeatherByCity } from "./api";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric");

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError("");

    try {
      const data = await fetchWeatherByCity(city, unit);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
    if (weather) handleSearch();
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">
          Weather Dashboard
        </h1>
        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
        {loading && <Loader />}
        <ErrorMessage message={error} />
        {weather && !loading && (
          <WeatherCard data={weather} unit={unit} toggleUnit={toggleUnit} />
        )}
      </div>
    </div>
  );
}

export default App;