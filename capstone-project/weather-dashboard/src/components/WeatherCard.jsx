

const WeatherCard = ({ data, unit }) => {
  return (
    <div className="bg-white shadow-lg rounded p-6 text-center mt-6">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />
      <p className="text-xl">
        {Math.round(data.main.temp)}°{unit === "metric" ? "C":""}
      </p>
      <p className="capitalize">{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>

    </div>
  );
};

export default WeatherCard;