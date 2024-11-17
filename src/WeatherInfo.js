import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 ">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="weather icon"
          />
        </div>

        <div className="col-6 weather-heading">
          <p className="text-center pt-5">
            <FormattedDate date={props.data.date} />
          </p>
          <h1>{props.data.city}</h1>
          <p className="text-capitalize">{props.data.description}</p>

          <WeatherTemperature farenheit={props.data.temperature} />
        </div>
        <div className="weather-description">
          <p>CONDITIONS</p>
          <div className="row">
            <div className="col-6">
              <p>Feels like:</p>
              <h3>{Math.round(props.data.feelsLike)}°</h3>
              <p>Humidity</p>
              <h3>{props.data.humidity}%</h3>
            </div>
            <div className="col-6">
              <p>Wind Speed</p>
              <h3>{Math.round(props.data.windSpeed)} MPH</h3>

              <p>Air Pressure</p>
              <h3>{props.data.pressure} PSI</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
