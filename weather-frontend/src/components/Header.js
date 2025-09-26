import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const nav = useNavigate();
  const isLoggedIn = !!localStorage.getItem("auth");

  function handleLogout() {
    localStorage.removeItem("auth");
    nav("/login");
  }

  return (
    <header
      style={{
        background: "rgba(0,0,0,0.6)",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 , color: "white" }}>🌤 Weather App</h2>
      <nav>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Dashboard
        </Link>
        {!isLoggedIn ? (
          <Link to="/login" style={{ color: "white" }}>
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              border: "1px solid white",
              padding: "6px 12px",
              borderRadius: "6px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
