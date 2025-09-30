import React from 'react'
import Hero from '../components/Hero';
import ExploreCollections from '../components/ExploreCollections';
import TrendingPaintings from '../components/TrendingPaintings';

function HomePage() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <Hero/>
      <ExploreCollections />
      <TrendingPaintings /> 
    </div>
  );
}
 

export default HomePage