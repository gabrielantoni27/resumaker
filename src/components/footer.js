import React from 'react';
import '../styles/footer.css';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';
import { GiBossKey } from 'react-icons/gi'; // For BossJobs (closest match)

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Brand Info */}
        <div className="footer-section footer-brand">
          <span className="footer-logo">Gabriel Antoni</span>
          <p className="footer-tagline">Full Stack Developer</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section footer-contact">
          <h4>Get In Touch</h4>
          <ul>
            <li>
              <a href="mailto:gabriel.louizze.antoni@gmail.com">
                <FaEnvelope className="footer-icon" />
                <span className="contact-text">gabriel.louizze.antoni@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://github.com/gabrielantoni27" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-antoni-456601252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="footer-icon" />
            </a>
            <a href="https://www.facebook.com/gbrielantoni27/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="footer-icon" />
            </a>
            <a href="https://www.instagram.com/artofantoni/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-antoni-456601252/" target="_blank" rel="noopener noreferrer" aria-label="Indeed">
              <SiIndeed className="footer-icon" />
            </a>
            <a href="https://bossjob.com/" target="_blank" rel="noopener noreferrer" aria-label="BossJobs">
              <GiBossKey className="footer-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gabriel Antoni. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
