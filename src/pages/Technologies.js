// src/pages/Technologies.js
import React from 'react';
import './Technologies.css';

const Technologies = () => {
  return (
    <div className="technologies">
      <h2>Tecnologías para Desarrollo de Aplicaciones Móviles</h2>
      <p>
        El desarrollo de aplicaciones móviles ha evolucionado rápidamente, y hoy en día existen múltiples tecnologías para crear apps funcionales y atractivas. A continuación, exploramos algunas de las principales:
      </p>
      <ul>
        <li>
          <strong>React Native:</strong> Un framework de código abierto creado por Facebook, permite desarrollar aplicaciones móviles multiplataforma utilizando JavaScript y React. React Native permite crear una única base de código para Android e iOS, reduciendo el tiempo y costo de desarrollo.
        </li>
        <li>
          <strong>Flutter:</strong> Un framework de Google que facilita la creación de aplicaciones nativas desde una sola base de código. Es conocido por su rendimiento y por el uso de widgets personalizables que logran una excelente experiencia de usuario.
        </li>
        <li>
          <strong>Swift:</strong> Un lenguaje de programación desarrollado por Apple, ideal para el desarrollo de aplicaciones iOS. Swift es seguro, eficiente y tiene una sintaxis fácil de leer, lo que lo convierte en la opción preferida para apps iOS nativas.
        </li>
        <li>
          <strong>Kotlin:</strong> Un lenguaje de programación oficial para el desarrollo de aplicaciones Android, respaldado por Google. Kotlin es seguro y moderno, y ofrece una mejor interoperabilidad con Java, lo que hace que el desarrollo de Android sea más eficiente.
        </li>
      </ul>
      <p>
        Estas tecnologías permiten a los desarrolladores crear aplicaciones móviles que satisfacen las necesidades del usuario y ofrecen una experiencia intuitiva y de alto rendimiento.
      </p>
    </div>
  );
};

export default Technologies;
