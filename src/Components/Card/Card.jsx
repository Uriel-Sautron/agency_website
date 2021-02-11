import React from 'react';

const Card = ({ name, title }) => (
  <div className="card">
    <h2>{name}</h2>
    <h3>{title}</h3>
  </div>
);

export default Card;
