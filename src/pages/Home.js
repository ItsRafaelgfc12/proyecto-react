import React from 'react';
import { Card, Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Carrusel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://content.nationalgeographic.com.es/medio/2023/12/09/realidad-aumentada_961f3729_231209164453_1280x853.jpg"
            alt="Primera diapositiva"
          />
          <Carousel.Caption>
            <h3>Entretenimiento Inmersivo</h3>
            <p>La realidad aumentada transforma la forma en que jugamos y disfrutamos del ocio.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.onirix.com/wp-content/uploads/2023/03/%C2%BFQue%CC%81-es-la-Realidad-Aumentada-1024x566.jpg.webp"
            alt="Segunda diapositiva"
          />
          <Carousel.Caption>
            <h3>Educación y Aprendizaje</h3>
            <p>Visualiza conceptos complejos y mejora el aprendizaje con RA.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.edsrobotics.com/wp-content/uploads/2021/07/realidad-aumentada-que-es-1200x900.jpg"
            alt="Tercera diapositiva"
          />
          <Carousel.Caption>
            <h3>Aplicaciones Prácticas</h3>
            <p>Impulsa sectores como la medicina y la arquitectura con tecnologías RA.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Contenido principal */}
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h2 className="text-center">Bienvenido a la Realidad Aumentada</h2>
            <p className="text-center">
              La Realidad Aumentada (RA) combina el mundo físico con elementos digitales para crear experiencias interactivas y enriquecidas.
              Desde el entretenimiento hasta la educación, la RA está transformando nuestra forma de interactuar con la tecnología.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src="https://virtualarena.tech/wp-content/uploads/2024/04/4.jpg"
                alt="Ejemplo de RA"
              />
              <Card.Body>
                <Card.Title>Entretenimiento Inmersivo</Card.Title>
                <Card.Text>
                  La RA ofrece una nueva dimensión en el entretenimiento, integrando juegos y experiencias virtuales con el mundo real.
                </Card.Text>
                <Button variant="primary">Aprender Más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src="https://d8285fmxt3duy.cloudfront.net/public/articulos/img/Realidad-aumentada2.jpg"
                alt="Educación con RA"
              />
              <Card.Body>
                <Card.Title>Educación y Formación</Card.Title>
                <Card.Text>
                  En educación, la RA permite visualizar conceptos complejos y mejorar el aprendizaje mediante simulaciones interactivas.
                </Card.Text>
                <Button variant="primary">Explorar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Augmented-reality-1957411_1920.jpg"
                alt="Aplicaciones prácticas"
              />
              <Card.Body>
                <Card.Title>Aplicaciones Prácticas</Card.Title>
                <Card.Text>
                  Sectores como la medicina, el comercio y la arquitectura están utilizando RA para mejorar procesos y resultados.
                </Card.Text>
                <Button variant="primary">Descubrir</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src="https://metaverse-news.es/wp-content/uploads/2023/07/realidad-aumentada-scaled.jpeg"
                alt="Futuro de la RA"
              />
              <Card.Body>
                <Card.Title>El Futuro de la RA</Card.Title>
                <Card.Text>
                  Con tecnologías como el 5G y la inteligencia artificial, el potencial de la realidad aumentada sigue expandiéndose.
                </Card.Text>
                <Button variant="primary">Ver Más</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
