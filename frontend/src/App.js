import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TicketsAdmin from "./pages/TicketsAdmin";
import Home from "./pages/Home";
import HomeAdmin from "./pages/HomeAdmin";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Ticket from "./pages/Tickets";
import LoginAdmin from "./pages/LoginAdmin";
import Users from "./pages/Users";
import React from 'react';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tickets" element={<Ticket />} />
        <Route path="/homeadmin" element={<HomeAdmin />} />
        <Route path="/users" element={<Users />} />
        <Route path="/ticketsadmin" element={<TicketsAdmin />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />

      </Routes>
    </>
  );
}

export default App;
