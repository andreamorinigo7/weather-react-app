import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      windSpeed: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      city: response.data.city,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "o7aa001199a3fa308a4b424t253e2953";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="search"
              autoFocus
              placeholder="Search for cities ..."
              className="search-input col-9"
              onChange={handleCityChange}
            />
            <input className="col-3 submit-input" type="submit" Search />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <h4 className="text-center">Loading...</h4>;
  }
}
