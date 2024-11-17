import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("farenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function celsius() {
    return (-32 * 5) / 9;
  }

  if (unit === "farenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          <h2>{Math.round(props.farenheit)}</h2>
        </span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          <h2>{Math.round(celsius())}</h2>
        </span>
        <span className="unit">
          <a href="/" onClick={showFarenheit}>
            °F{" "}
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
