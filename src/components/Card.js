import React from 'react';

const Card = ({ pokemon }) => {
  let { id, name, img } = pokemon;

  let capitalizedName =
    name.charAt(0).toUpperCase()
    + name.slice(1)

  return (
    <div className="bg-emerald-100 shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img src={img} alt={capitalizedName} className="w-full h-80 object-fit p-4" />
        <div className="absolute top-0 right-0 m-2">
          <button className="p-1 text-gray-800 hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 6l-7 10-7-10" />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-emerald-400 p-1 flex justify-center">
        {/* <span className="text-gray-600"><i className="fas fa-eye"></i> {id}</span> */}
        <div className="p-2 justify-center">
          <h6 className="text-lg font-bold text-slate-700">{capitalizedName}</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;
