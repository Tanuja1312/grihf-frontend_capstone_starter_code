import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ IMPORTANT: LOGIN API CALL
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // ✅ Store token
      if (data.authtoken) {
        localStorage.setItem("token", data.authtoken);
        alert("Login successful");
      } else {
        alert("Invalid credentials");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />
      <br /><br />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
