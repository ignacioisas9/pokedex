import React from 'react';

const Card = ({ pokemon }) => {
  const { id, name, img } = pokemon;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img src={img} alt={name} className="w-full h-48 object-fit p-4" />
        <div className="absolute top-0 right-0 m-2">
          <button className="p-1 text-gray-800 hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 6l-7 10-7-10" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h6 className="text-lg font-bold">{name}</h6>
      </div>
      <div className="bg-gray-100 p-4">
        <span className="text-gray-600"><i className="fas fa-eye"></i> {id}</span>
      </div>
    </div>
  );
}

export default Card;
