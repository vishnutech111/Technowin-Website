import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2 className="logo">Technowin</h2>
          <p>
            Leading UPVC windows and doors fabricator and supplier in Kannur.
            Delivering quality, durability, and modern design.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>UPVC Windows</li>
            <li>UPVC Doors</li>
            <li>Custom Fabrication</li>
            <li>Installation</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Kannur, Kerala</p>
          <p>📞 +91 9876543210</p>
          <p>📧 technowin@gmail.com</p>

          {/* Social Icons */}
          <div className="socials">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Technowin. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;