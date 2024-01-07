import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import { Facebook, Twitter, Instagram, Email, Phone } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Gallery</NavLink></li>
            <li><NavLink to="/">Artist</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li><Email /> rlawnssud77@naver.com</li>
            <li><Phone /> +82 10-2888-5141</li>
            <li><LocationOnIcon /> 56, Janganut-gil, Pyeongtaek-si<br/> Gyeonggi-do</li>
            <li><PublicIcon /> Republic of Korea</li>
          </ul>
        </div>
      </div>
      <div className="footer-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="footer-social">
          <NavLink to="/" target="_blank" rel="noopener noreferrer"><Facebook /></NavLink>
          <NavLink to="/" target="_blank" rel="noopener noreferrer"><Twitter /></NavLink>
          <NavLink to="/" target="_blank" rel="noopener noreferrer"><Instagram /></NavLink>
        </div>
      </div>
      <div className="footer-section">
        <h4>Newsletter</h4>
        <p>newsletter for updates</p>
        <form>
          <input type="email" placeholder="email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
