import React, { useState } from "react";
import axios from "axios";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        form
      );

      // Save token (optional)
      localStorage.setItem("adminToken", res.data.token);

      alert("Login Successful ✅");

      // Redirect
      navigate("/admin/dashboard");

    } catch (error) {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="login-page">

      <div className="login-box">
        <h2>Admin Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>

        </form>
      </div>

    </div>
  );
};

export default AdminLogin;