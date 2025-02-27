import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Ticket from "./pages/Tickets";
import LoginAdmin from "./pages/LoginAdmin";
import Users from "./pages/Users";

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
        <Route path="/users" element={<Users />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />

      </Routes>
    </>
  );
}

export default App;
