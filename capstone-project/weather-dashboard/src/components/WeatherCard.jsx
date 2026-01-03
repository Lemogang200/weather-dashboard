import React from "react";

const WeatherCard = ({ data, unit, toggleUnit }) => {
  return (
    <div className="bg-white shadow-lg rounded p-6 text-center mt-6">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />
      <p className="text-xl">
        {Math.round(data.main.temp)}°{unit === "metric" ? "C" : "F"}
      </p>
      <p className="capitalize">{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>

      <button
        onClick={toggleUnit}
        className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Toggle °C / °F
      </button>
    </div>
  );
};

export default WeatherCard;