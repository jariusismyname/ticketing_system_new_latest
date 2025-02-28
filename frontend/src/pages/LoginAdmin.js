import React, { useState } from "react";
import "./LoginAdmin.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginAdmin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "password") {
      toast.success("Login Successful 🎯");
      navigate("/ticketsadmin");
    } else {
      toast.error("Invalid Password ❌");
    }
  };

  return (
    <div className="login-admin-container">
      <div className="login-card">
        <h2>🔐 Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="button">Login</button><br></br><br/>
<button
          className="user-login-btn"
          onClick={() => navigate("/login")}
        >
         I am a User
        </button>

        </form>

        {/* 🎯 New User Login Button */}
        
      </div>
    </div>
  );
};

export default LoginAdmin;
