import React from "react";
import sunny from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import rainy from "../assets/Rainy.svg"
function WeatherCard(props) {
  const iconSrc =
    props.data.forecast == "Sunny" ? sunny:
    props.data.forecast == "Cloudy" ? cloudy:
    props.data.forecast == "Partly Cloudy" ? partlyCloudy:
    props.data.forecast == "Rainy" ? rainy:
    null;
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {iconSrc} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.data.city}</h3>
            <h5 className="card-text">{props.data.temperature}</h5>
            <h5 className="card-text">{props.data.forecast}</h5>
        </div>
    </div>
  );
};
// Export the WeatherCard
export default WeatherCard;