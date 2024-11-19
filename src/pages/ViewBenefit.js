import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ViewBenefit = ({ benefits }) => {
  const { id } = useParams();
  const benefit = benefits.find(b => b.id === parseInt(id));

  if (!benefit) {
    return <div>Beneficio no encontrado.</div>;
  }

  return (
    <div className="view-benefit">
      <h2>{benefit.title}</h2>
      <p>{benefit.description}</p>
      <Link to="/benefits">
        <button className="btn btn-primary">Volver a la lista</button>
      </Link>
    </div>
  );
};

export default ViewBenefit;
