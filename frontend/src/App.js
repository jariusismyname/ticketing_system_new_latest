import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Ticket from "./pages/Ticket";


function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ticket" element={<Ticket />} />

      </Routes>
    </>
  );
}

export default App;
