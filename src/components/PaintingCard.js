// src/components/PaintingCard.jsx
import React from "react";

const PaintingCard = ({ painting, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow hover:shadow-lg p-4 cursor-pointer"
    >
      <img
        src={painting.image}
        alt={painting.title}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />
      <h3 className="text-lg font-semibold">{painting.title}</h3>
      <p className="text-gray-600">{painting.artist}</p>
      <p className="text-indigo-600 font-bold">${painting.price}</p>
    </div>
  );
};

export default PaintingCard;
