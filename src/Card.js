import React from 'react';
import './Card.css';

const Card = ({ pokemon }) => {
  const { id, name, img } = pokemon;

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <div className="card-img">
            <img src={img} alt="" />
          </div>
          <h6 className="card-subtitle">
            {name}
          </h6>
        </div>
        <div className="card-footer">
          <span className=""><i className="fas fa-eye"></i>{id}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
