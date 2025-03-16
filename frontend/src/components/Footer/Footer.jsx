import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/youtube.png" alt="YouTube" />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/pinterest.png" alt="Pinterest" />
        </a>
      </div>
      <p>&copy; 2024 Ayurveda Wellness Assistant. All rights reserved.</p>
    </footer>
  );
}

export default Footer;