import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Aplicaciones Móviles</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/benefits">Beneficios</Link>
        <Link to="/technologies">Tecnologías</Link>
      </nav>
    </header>
  );
};

export default Header;
