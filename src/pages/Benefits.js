import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './Benefits.css';

const Benefits = () => {
  const [benefits, setBenefits] = useState([
    {
      id: 1,
      title: "Experiencias Interactivas",
      description: "La realidad aumentada permite a los usuarios interactuar con objetos digitales superpuestos al mundo real.",
    },
    {
      id: 2,
      title: "Educación Inmersiva",
      description: "Proporciona una forma innovadora de enseñar conceptos complejos mediante visualización y simulaciones.",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentBenefit, setCurrentBenefit] = useState({ id: null, title: '', description: '' });
  const [benefitToDelete, setBenefitToDelete] = useState(null);

  const handleShowModal = (benefit = { id: null, title: '', description: '' }) => {
    setCurrentBenefit(benefit);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setCurrentBenefit({ id: null, title: '', description: '' });
    setShowModal(false);
  };

  const saveBenefit = () => {
    if (currentBenefit.id) {
      // Actualizar beneficio existente
      setBenefits(
        benefits.map((b) =>
          b.id === currentBenefit.id ? currentBenefit : b
        )
      );
    } else {
      // Agregar nuevo beneficio
      setBenefits([
        ...benefits,
        { ...currentBenefit, id: Date.now() },
      ]);
    }
    handleCloseModal();
  };

  const handleShowConfirm = (id) => {
    setBenefitToDelete(id);
    setShowConfirm(true);
  };

  const handleCloseConfirm = () => {
    setBenefitToDelete(null);
    setShowConfirm(false);
  };

  const deleteBenefit = () => {
    setBenefits(benefits.filter((b) => b.id !== benefitToDelete));
    handleCloseConfirm();
  };

  return (
    <div className="benefits">
      <h2>Beneficios de la Realidad Aumentada</h2>
      <Button variant="primary" onClick={() => handleShowModal()}>
        Agregar Beneficio
      </Button>
      <ul className="list-group mt-3">
        {benefits.map((benefit) => (
          <li
            key={benefit.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{benefit.title}:</strong> {benefit.description}
            </div>
            <div>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => handleShowModal(benefit)}
              >
                Editar
              </Button>
              <Button
                variant="danger"
                onClick={() => handleShowConfirm(benefit.id)}
              >
                Eliminar
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal para agregar/editar beneficio */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentBenefit.id ? 'Editar Beneficio' : 'Agregar Beneficio'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el título del beneficio"
                value={currentBenefit.title}
                onChange={(e) =>
                  setCurrentBenefit({
                    ...currentBenefit,
                    title: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción del beneficio"
                value={currentBenefit.description}
                onChange={(e) =>
                  setCurrentBenefit({
                    ...currentBenefit,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={saveBenefit}>
            {currentBenefit.id ? 'Guardar Cambios' : 'Agregar'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de confirmación para eliminar */}
      <Modal show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar este beneficio? Esta acción no se puede deshacer.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={deleteBenefit}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Benefits;
