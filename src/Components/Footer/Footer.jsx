import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1 className="footer-title">🍽️ DriveDish</h1>
          <p>&copy; 2024 DriveDish Limited</p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Team</li>
            <li>DriveDish Pro</li>
            <li>DriveDish Genie</li>
            <li>Minis</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Drive With Us</li>
          </ul>
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Available in:</h3>
          <ul>
            <li>Bangalore</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Hyderabad</li>
            <li>Chennai</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Life at DriveDish</h3>
          <ul>
            <li>Explore with DriveDish</li>
            <li>News</li>
            <li>Snacks & More</li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Social Links</h3>
          <div className="social-icons">
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-pinterest"></i>
            <i className="fa fa-twitter"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
