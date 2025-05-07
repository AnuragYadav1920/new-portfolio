import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./components.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Me</h4>
          <div>
            <p>
              <a href="mailto:anuragyadav.webdev@gmail.com">
                anuragyadav.webdev@gmail.com
              </a>
            </p>
            <p>
              <a href="#">+91 6387208361</a>
            </p>
          </div>
        </div>
        <div className="social-links">
          <h4>Follow Me</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/anuragyadav1920/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AnuragYadav1920"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Anurag Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
