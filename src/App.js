import { useState } from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/Current-Weather";
import Forecast from "./components/forecast/Forecast";
import "./App.css";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api/api";

function App() {
  const [currentWeather, setCurrentWeather] = useState("");
  const [forecastWeather, setForecastWeather] = useState("");

  const handleOnSearchChange = (searchData) => {
    console.log("searchDatas", searchData);
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };

  console.log("currentWeather", currentWeather);
  console.log("forecastWeather", forecastWeather);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
