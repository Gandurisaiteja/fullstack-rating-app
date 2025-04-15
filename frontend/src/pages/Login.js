import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For displaying errors
  const navigate = useNavigate(); // For navigating after successful login

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/users/login", {
        email,
        password,
      })
      .then((response) => {
        // Store the token and role in local storage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role); // Assuming role is returned

        // Redirect based on role
        if (response.data.role === "admin") {
          navigate("/admin-dashboard");
        } else if (response.data.role === "store_owner") {
          navigate("/store-dashboard");
        } else {
          navigate("/user-dashboard");
        }

        alert("Login successful");
      })
      .catch((err) => {
        console.error("Login error", err);
        setErrorMessage("Login failed. Please check your credentials.");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
