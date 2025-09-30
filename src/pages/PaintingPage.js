
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MOCK_DATA } from "../constants/mockData";



const PaintingPage = () => {
  const { id } = useParams(); // painting id
  let painting = null;
  const [collectionData, setCollectionData] = useState(null);
  
    useEffect(() => {
      // simulate API fetch delay
      setTimeout(() => setCollectionData(MOCK_DATA.collections), 2000);
    }, []);
  
    if (!collectionData) {
      // Shimmer loader 
      return(
        <p> Loading....</p>
      )  
    }

  // Find painting in all collections
  for (let col of collectionData) {
    painting = col.paintings.find((p) => p.id === id);
    if (painting) break;
  }

  if (!painting) return <h2 className="text-center text-red-600 mt-10">Painting not found</h2>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img
        src={painting.image}
        alt={painting.title}
        className="w-full h-96 object-cover rounded-2xl mb-6"
      />
      <h1 className="text-3xl font-bold">{painting.title}</h1>
      <p className="text-gray-600 text-lg mt-2">By {painting.artist}</p>
      <p className="text-indigo-600 font-bold text-xl mt-4">${painting.price}</p>
    </div>
  );
};

export default PaintingPage;
