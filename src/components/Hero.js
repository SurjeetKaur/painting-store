import React, { useState, useEffect } from "react";
import { MOCK_DATA } from "../constants/mockData.js";
import WavyDivider from "./WavyDivider.js";
import HeroShimmer from "./HeroShimmer.js";


 function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    // simulate API fetch delay
    setTimeout(() => setHeroData(MOCK_DATA.hero), 1000);
  }, []);

  if (!heroData) {
    // Shimmer loader 
    return(
      <HeroShimmer/>
    )  
  }

  return (
   
    <section className="relative h-auto flex items-center">
        {/* Background image */}
        <img
            src={heroData.backgroundImage}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
        />
        

        {/* Content container */}
        <div className="relative container h-auto mb-28 mt-10 mx-auto flex flex-col md:flex-row items-center justify-center px-2 md:px-20">
            
            {/* Left text */}
            <div className="text-white md:w-1/2 w-10/12 space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold">{heroData.title}</h1>
            <p className="text-lg md:text-xl">{heroData.subtitle}</p>
            <button className="mt-4 px-6 py-3 bg-orange rounded-lg font-semibold hover:bg-green-600 transition">
                {heroData.buttonText}
            </button>
            </div>
            {/* Right images */}
            <div className="md:w-1/2 w-10/12 flex justify-center m-4 md:m-0 space-x-4">
                <div className="flex flex-col space-y-2">
                    <img
                    src={heroData.painting1}
                    alt="Hero Painting"
                    className="w-40 h-40 rounded-lg shadow-lg"
                />
                    <img
                        src={heroData.painting2}
                        alt="Hero Painting 2"
                        className="w-40 h-40 rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex mx-2">
                    <img
                    src={heroData.painting3}
                    alt="Hero Painting 3"
                    className="w-40 h-[325px] rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
        <WavyDivider />
    </section>

  );
}

export default Hero
  