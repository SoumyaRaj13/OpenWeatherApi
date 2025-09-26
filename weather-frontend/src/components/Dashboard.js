

import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

const BACKEND = "http://localhost:8081";

function getAuthHeader() {
  const token = localStorage.getItem("auth");
  return token ? { Authorization: `Basic ${token}` } : {};
}

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [city, setCity] = useState("Mumbai");
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState("Mumbai"); // ✅ separate search input

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`${BACKEND}/api/user/me`, {
          headers: getAuthHeader(),
        });
        if (res.ok) setUser(await res.json());
      } catch {}
    }
    fetchUser();
  }, []);

  // fetch weather when city changes
  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(`${BACKEND}/api/weather?city=${encodeURIComponent(city)}`);
        if (res.ok) setWeather(await res.json());
      } catch {}
    }
    fetchWeather();
  }, [city]);

  const greeting = user?.firstName ? `Hi ${user.firstName}` : "Hi User";

  function handleSearch(e) {
    e.preventDefault();
    if (search.trim() !== "") {
      setCity(search); // ✅ update city to trigger weather fetch
    }
  }

  return (
    <div className="container" style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>{greeting}, Welcome to Weather Dashboard</h1>

      {/* ✅ Tagline */}
      <h2 style={{ marginTop: "10px", fontWeight: "bold" }}>OpenWeather</h2>
      <p style={{ fontSize: "1.2rem", color: "#1d1b1bff" }}>
        Weather forecasts, nowcasts and history in a fast and elegant way
      </p>

      {/* ✅ Search form */}
      <form onSubmit={handleSearch} style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search city"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            textAlign: "center",
            width: "250px",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#1976d2",
            color: "white",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {weather ? (
        <WeatherCard weather={weather} city={city} />
      ) : (
        <p>No weather data</p>
      )}
    </div>
  );
}


// ______________

// import React, { useState, useEffect } from "react";
// import WeatherCard from "./WeatherCard";

// const BACKEND = "http://localhost:8081"; // Spring Boot backend

// export default function Dashboard() {
//   const [city, setCity] = useState("Delhi");
//   const [weather, setWeather] = useState(null);
//   const [forecast, setForecast] = useState([]);
//   const [search, setSearch] = useState("Delhi");

//   // ✅ Fetch today's weather
//   useEffect(() => {
//     async function fetchWeather() {
//       try {
//         const res = await fetch(`${BACKEND}/api/weather?city=${city}`);
//         if (res.ok) {
//           setWeather(await res.json());
//         }
//       } catch (err) {
//         console.error("Weather fetch failed", err);
//       }
//     }
//     fetchWeather();
//   }, [city]);

//   // ✅ Fetch forecast (5-day / 3-hour data from backend)
//   useEffect(() => {
//     async function fetchForecast() {
//       try {
//         const res = await fetch(`${BACKEND}/api/forecast?city=${city}`);
//         if (res.ok) {
//           const data = await res.json();
//           // pick ~1 reading per day (every 8th = ~24 hours)
//           const days = data.list.filter((_, idx) => idx % 8 === 0);
//           setForecast(days);
//         }
//       } catch (err) {
//         console.error("Forecast fetch failed", err);
//       }
//     }
//     fetchForecast();
//   }, [city]);

//   // ✅ Handle city search
//   function handleSearch(e) {
//     e.preventDefault();
//     if (search.trim() !== "") {
//       setCity(search);
//     }
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "30px" }}>
//       {/* Header / Tagline */}
//       <h1 style={{ fontWeight: "bold" }}>OpenWeather</h1>
//       <p style={{ fontSize: "1.2rem", color: "#555" }}>
//         Weather forecasts, nowcasts and history in a fast and elegant way
//       </p>

//       {/* Search Bar */}
//       <form onSubmit={handleSearch} style={{ marginTop: "20px" }}>
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search city"
//           style={{
//             padding: "10px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             textAlign: "center",
//             width: "250px",
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             marginLeft: "10px",
//             padding: "10px 20px",
//             borderRadius: "8px",
//             border: "none",
//             background: "#1976d2",
//             color: "white",
//             cursor: "pointer",
//           }}
//         >
//           Search
//         </button>
//       </form>

     
//       {weather ? (
//         <WeatherCard weather={weather} city={city} forecast={forecast} />
//       ) : (
//         <p style={{ marginTop: "20px" }}>No weather data available</p>
//       )}
//     </div>
//   );
// }

