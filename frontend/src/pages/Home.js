import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom"; // For redirection

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Scroll to Top Button
    window.addEventListener("scroll", handleScroll);

    // Auto Logout after 1 Hour
    const logoutTimer = setTimeout(() => {
      localStorage.removeItem("username");
      alert("Session Expired! Please Login Again.");
      navigate("/login");
    }, 3600000); // 1 hour

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(logoutTimer);
    };
  }, [navigate]);

  // Scroll Event for Button Visibility
  const handleScroll = () => {
    const scrollBtn = document.querySelector("#scrollToTop");
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  };

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Dark Mode Toggle
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="home">
      <header>
        <nav>
          <ul>
            <li>
              <a href="" className="nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="/ticket" className="nav-link">
                Submit Ticket
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <h1>Welcome, {username}!</h1>
        <button id="scrollToTop" onClick={scrollToTop}>
          ⬆ Scroll to Top
        </button>
        <button onClick={toggleDarkMode} id="darkMode">
          Toggle Dark Mode
        </button>
      </section>
    </div>
  );
};

export default Home;
