import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="/photos/logo.jpg" alt="Logo" id="logo" />
      <h1>Ayurveda Wellness Assistant</h1>
      <nav>
        <ul>
        <a href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/ayurveda" target="_blank" rel="noopener noreferrer">Articles</a>
          <a href="https://example.com/articles" target="_blank" rel="noopener noreferrer">Diagnostic</a>
          <a href="https://www.baluherbals.com/collections/powders" target="_blank" rel="noopener noreferrer">Prodcuts</a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;