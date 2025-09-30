
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MOCK_DATA } from "../constants/mockData";
import PaintingCard from "../components/PaintingCard";

const CollectionsDetailPage = () => {
  const { id } = useParams(); // collection id
  const navigate = useNavigate();
  // Find collection by id
  const collection = MOCK_DATA.collections.find((c) => c.id === id);

  // Find all paintings belonging to this collection
  const paintings = MOCK_DATA.paintings.filter((p) => p.collectionId === id);
  
  console.log("Collection ID:", id);
  console.log("Found Collections:", collection);
  console.log("Collection Data:", paintings);

  if (!collection) return <h2 className="text-center text-red-600 m-10">Collection not found</h2>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{collection.name} Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paintings.length>0? (
          paintings.map((painting) => (
          <PaintingCard
            key={painting.id}
            painting={painting}
            onClick={() => navigate(`/painting/${painting.id}`)}
          />
        ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No paintings available in this collection.</p>
        ) 
      }
      </div>
    </div>
  );
};

export default CollectionsDetailPage;

