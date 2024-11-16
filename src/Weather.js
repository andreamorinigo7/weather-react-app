import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data.time);
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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div>
            <input
              type="search"
              autoFocus
              placeholder="Search for cities ..."
              className="search-input col-9"
            />
            <input className="col-3 submit-input" type="submit" Search />
          </div>
        </form>
        <div className="row">
          <div className="col-6 ">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather icon"
            />
          </div>

          <div className="col-6 weather-heading">
            <p className="text-center pt-5">
              <FormattedDate date={weatherData.date} />
            </p>
            <h1>{weatherData.city}</h1>
            <p className="text-capitalize">{weatherData.description}</p>
            <h2>
              {Math.round(weatherData.temperature)}
              <span>°C | °F</span>
            </h2>
          </div>
          <div className="weather-description">
            <p>CONDITIONS</p>
            <div className="row">
              <div className="col-6">
                <p>Feels like:</p>
                <h3>{Math.round(weatherData.feelsLike)}°</h3>
                <p>Humidity</p>
                <h3>{weatherData.humidity}%</h3>
              </div>
              <div className="col-6">
                <p>Wind Speed</p>
                <h3>{Math.round(weatherData.windSpeed)} MPH</h3>

                <p>Air Pressure</p>
                <h3>{weatherData.pressure} PSI</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "o7aa001199a3fa308a4b424t253e2953";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return <h4 className="text-center">Loading...</h4>;
  }
}
