import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-3">
      <div className="container text-center">
        <p className="mb-2">
          &copy; 2024 Realidad Aumentada | Todos los derechos reservados.
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
