import React from "react";
import { Link } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1>My Portfolio</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      <div className="container">
        <Link className="navbar-brand" to="/">Danny Zhang - Portfolio</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
