import { useState } from "react";
import { fetchWeatherByCity } from "./api";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import image from "./image/img.jpg";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [unit] = useState("metric");

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

  return (
    <div className="min-h-screen bg-[url(./image/img.jpg)] bg-cover bg-center flex items-center justify-center p-4">
      <div className="bg-blue-100 p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-500 text-center mb-4">
          Weather Dashboard
        </h1>
        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
        {loading && <Loader />}
        <ErrorMessage message={error} />
        {weather && !loading && (
          <WeatherCard data={weather} unit={unit} />
        )}
      </div>
    </div>
  );
}

export default App;