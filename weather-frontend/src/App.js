

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import WeatherDetail from "./components/WeatherDetail";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/weather-detail" element={<WeatherDetail />} />
      </Routes>
    </Router>
  );
}

export default App;


