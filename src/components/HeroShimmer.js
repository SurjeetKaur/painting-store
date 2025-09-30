import React from 'react';
import Shimmer from './Shimmer.js';

function HeroShimmer() {
  return (
    <div className="w-full h-[500px] relative overflow-hidden rounded-xl bg-gray-100 p-4 md:p-20 flex flex-col md:flex-row items-center justify-center animate-pulse">
      {/* Left text shimmer */}
      <div className="flex-1 space-y-4">
        <Shimmer width="75%" height="32px" />  {/* title */}
        <Shimmer width="83%" height="24px" />  {/* subtitle */}
        <Shimmer width="33%" height="40px" className="mt-4" /> {/* button */}
      </div>

      {/* Right images shimmer */}
      <div className="flex-1 flex justify-center space-x-4 mt-6 md:mt-0">
        <div className="flex flex-col space-y-4">
          <Shimmer width="160px" height="160px" className="rounded-lg" />
          <Shimmer width="160px" height="160px" className="rounded-lg" />
        </div>
        <Shimmer width="160px" height="325px" className="rounded-lg" />
      </div>
    </div>
  );
}
export default HeroShimmer;