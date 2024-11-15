import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <input className="col-3" type="submit" Search />
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
          <h1>New York</h1>
          <p>Clear Sky</p>
          <h2>
            70 <span>°C | °F</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
