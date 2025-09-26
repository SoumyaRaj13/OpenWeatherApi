import React from "react";
import { useNavigate } from "react-router-dom";

export default function WeatherCard({ weather, city }) {
  const nav = useNavigate();

  return (
    <div className="card" onClick={() => nav("/weather-detail", { state: { weather, city } })}>
      <h2>{weather.location} — {Math.round(weather.temperature)}°C</h2>
      <p style={{ fontSize: "1.2rem" }}>{weather.condition}</p>
      <p>
        💧 {weather.humidity}% | 🌬 {weather.windSpeed} m/s | ☔ {weather.precipitation} mm
      </p>
      <small>Click for details</small>
    </div>
  );
}

// import React from "react";
// import ForecastCard from "./ForecastCard"; // ✅ reuse forecast component
// import { useNavigate } from "react-router-dom";

// export default function WeatherCard({ weather, city, forecast = [] }) {
//   const nav = useNavigate();

//   return (
//     <div
//       style={{
//         background: "linear-gradient(to bottom, #0099cc, #003366)",
//         borderRadius: "15px",
//         padding: "20px",
//         color: "white",
//         width: "400px",
//         margin: "20px auto",
//         boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
//         textAlign: "center",
//       }}
//       onClick={() => nav("/weather-detail", { state: { weather, city } })}
//     >
//       {/* ✅ City + Today */}
//       <h2 style={{ marginBottom: "5px" }}>{city}</h2>
//       <h1 style={{ fontSize: "50px", margin: "10px 0" }}>
//         {Math.round(weather.temperature)}°C
//       </h1>
//       <p style={{ fontSize: "1.2rem" }}>{weather.condition}</p>
//       <p>
//         Feels Like: {Math.round(weather.temperature)}° <br />
//         💧 {weather.humidity}% | 💨 {weather.windSpeed} m/s | ☔ {weather.precipitation} mm
//       </p>

//       {/* ✅ Forecast row (next few days) */}
//       {forecast.length > 0 && (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             marginTop: "20px",
//             flexWrap: "wrap",
//           }}
//         >
//           {forecast.map((f, i) => (
//             <ForecastCard
//               key={i}
//               day={new Date(f.dt_txt).toLocaleDateString("en-US", {
//                 weekday: "short",
//               })}
//               temp={f.main.temp}
//               icon={f.weather[0].icon}
//             />
//           ))}
//         </div>
//       )}

//       <small style={{ display: "block", marginTop: "10px" }}>
//         Click for details
//       </small>
//     </div>
//   );
// }




