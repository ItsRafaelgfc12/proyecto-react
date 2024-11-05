// src/pages/Benefits.js
import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <div className="benefits">
      <h2>Beneficios de las Aplicaciones Móviles</h2>
      <p>
        Las aplicaciones móviles ofrecen una variedad de beneficios tanto para los usuarios como para las empresas. Estos son algunos de los principales:
      </p>
      <ul>
        <li><strong>Accesibilidad en cualquier lugar:</strong> Las apps permiten a los usuarios acceder a servicios desde cualquier lugar y en cualquier momento, solo necesitan un dispositivo móvil y conexión a internet.</li>
        <li><strong>Experiencia personalizada:</strong> Las aplicaciones móviles pueden adaptarse a los intereses y comportamientos del usuario, mejorando la experiencia de uso mediante personalización.</li>
        <li><strong>Aumento en la productividad:</strong> Para las empresas, las apps ayudan a optimizar procesos, reducir costos y mejorar la comunicación con los clientes.</li>
        <li><strong>Notificaciones en tiempo real:</strong> Las apps pueden enviar notificaciones para mantener a los usuarios informados, lo que contribuye a una mayor interacción y fidelización.</li>
      </ul>
    </div>
  );
};

export default Benefits;
