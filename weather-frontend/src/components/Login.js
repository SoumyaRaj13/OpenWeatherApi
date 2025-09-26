import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND = "http://localhost:8081"; // backend port

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const token = btoa(`${username}:${password}`);

    try {
      const res = await fetch(`${BACKEND}/api/user/me`, {
        headers: { Authorization: `Basic ${token}` },
      });

      if (res.ok) {
        localStorage.setItem("auth", token);
        const data = await res.json();
        setMsg(`Welcome, ${data.firstName}! ✅`);
        nav("/"); // redirect to Dashboard
      } else {
        setMsg("Login failed ❌");
      }
    } catch (err) {
      setMsg("Network error");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", margin: "5px", borderRadius: "6px" }}
        /><br />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "5px", borderRadius: "6px" }}
        /><br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            background: "#1976d2",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      <p>{msg}</p>
      <small>Demo: bhavesh / password</small>
    </div>
  );
}

