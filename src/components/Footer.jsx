import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <div className="footer-logo"></div>
            <span className="header-logo-text">GREEN BIT</span>
          </div>
          <p className="footer-tagline">
            Join the #bitgreen community on various platforms and contribute to making the Earth a better place again.
          </p>
        </div>

        <div className="footer-nav-col">
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><a href="#about" className="footer-link">About Us</a></li>
            <li><a href="#resources" className="footer-link">Resources</a></li>
            <li><a href="#blogs" className="footer-link">Blogs</a></li>
            <li><a href="#media" className="footer-link">Media & Press</a></li>
            <li><a href="#partners" className="footer-link">Partner with us</a></li>
          </ul>
        </div>

        <div className="footer-nav-col">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><a href="#terms" className="footer-link">Terms & Conditions</a></li>
            <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-nav-col">
          <h3>Contact Us</h3>
          <div className="footer-contact">
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} /> greenbit@gmail.com
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} /> +47 387 474 2374
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} /> +47 387 474 2375
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Green Bit. Made with <Heart size={14} color="#ef4444" fill="#ef4444" style={{ display: 'inline', verticalAlign: 'middle' }} /> for a sustainable future.
        </div>
        <div className="footer-socials">
          <a href="#instagram" className="social-btn" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#facebook" className="social-btn" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="#twitter" className="social-btn" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="#linkedin" className="social-btn" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
