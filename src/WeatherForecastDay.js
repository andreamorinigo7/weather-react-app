import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minxTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-dailyBox">
        <div className="WeatherForecast-icon img-fluid">
          <img src={props.data.condition.icon_url} />
        </div>

        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">
            {maxTemperature()}
          </span>{" "}
          <span className="WeatherForecast-temperature-min">
            /{minxTemperature()}{" "}
          </span>
        </div>

        <div className="WeatherForecast-date">
          <span className="WeatherForecast-day"> {day()}</span>
        </div>
      </div>
    </div>
  );
}
