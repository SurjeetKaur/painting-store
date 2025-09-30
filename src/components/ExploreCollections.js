
import { MOCK_DATA } from "../constants/mockData.js";
import WavyDivider from "./WavyDivider.js";
import{useNavigate} from "react-router-dom";
import React, { useState, useEffect } from "react";

function ExploreCollections() {
  const navigate=useNavigate();
  const [collectionData, setCollectionData] = useState(null);
  
    useEffect(() => {
      // simulate API fetch delay
      setTimeout(() => setCollectionData(MOCK_DATA.collections), 1000);
    }, []);
  
    if (!collectionData) {
      // Shimmer loader 
      return(
        <p>Loading...</p>
      )  
    }
  return (
    <section className="relative py-12 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {collectionData.map((collection) => (
          <div
            key={collection.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg p-6 text-center cursor-pointer "
          >
            <img onClick={()=> navigate(`/collection/${collection.id}`)}
              src={collection.image}
              alt={collection.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">{collection.name}</h3>
          </div>
        ))}
      </div>
      <WavyDivider color='#F8E0C8'/>
    </section>
  );
}

export default ExploreCollections;
