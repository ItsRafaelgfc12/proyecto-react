import React from 'react';
import './Technologies.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Technologies = () => {
  return (
    <div className="all">
      <Container className="content">
        <h1 className="text-center">Registro de Usuarios</h1>
        <Form>
          <FloatingLabel controlId="floatingInputName" label="Nombres" className="mb-3">
            <Form.Control type="text" placeholder="Nombres" />
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingInputLastName" label="Apellidos" className="mb-3">
            <Form.Control type="text" placeholder="Apellidos" />
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingInputDate" label="Fecha de nacimiento" className="mb-3">
            <Form.Control type="date" placeholder="Fecha de nacimiento" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInputEmail" label="Correo" className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Contraseña" className="mb-3">
            <Form.Control type="password" placeholder="Contraseña" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingConfirmPassword" label="Confirmar Contraseña" className="mb-3">
            <Form.Control type="password" placeholder="Confirmar Contraseña" />
          </FloatingLabel>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Registrar
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Technologies;
