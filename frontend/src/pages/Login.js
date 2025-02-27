import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Login.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Para sa redirection

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Pang redirect

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data.status === "success") {
        toast.success(response.data.message);
        console.log("Login Successful");
        setEmail("");
        setPassword("");
        navigate("/home"); // Redirect to Home
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const goToRegister = () => {
    navigate("/register"); // Pang redirect sa Register Page
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account?</p>
      <button onClick={goToRegister}>Register</button>
    </div>
  );
};

export default Login;
