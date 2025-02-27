document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to the Home Page!");

    // Navbar Active Link Highlight
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Scroll to Top Button
    const scrollBtn = document.querySelector("#scrollToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Dynamic Welcome Message
    const welcomeMsg = document.querySelector("#welcomeMsg");
    const username = "Guest"; // You can set the username dynamically
    welcomeMsg.textContent = `Welcome, ${username}!`;
});
