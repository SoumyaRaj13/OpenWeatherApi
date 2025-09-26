import React from "react";
import { useLocation , useNavigate} from "react-router-dom";

export default function WeatherDetail() {
  const { state } = useLocation();
  const nav = useNavigate();
  const { weather, city } = state || {};

  if (!weather) return <div>No weather selected</div>;

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>{city} Weather Details</h1>
      <div className="card">
        <p>🌡 Temperature: {weather.temperature} °C</p>
        <p>☁ Condition: {weather.condition}</p>
        <p>📍 Location: {weather.location}</p>
        <p>💧 Humidity: {weather.humidity}%</p>
        <p>💨 Wind Speed: {weather.windSpeed} m/s</p>
        <p>☔ Precipitation: {weather.precipitation} mm</p>
      </div>


 <small
        onClick={() => nav(-1)}
        style={{
          display: "block",
          marginTop: "15px",
          color: "#1976d2",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        ⬅ Go Back
      </small>
    </div>

   
  );
}

