// import React from 'react';

// const Banner = () => {
//     return (
//         <div className='min-h-[60vh] bg-linear-to-r from-purple-600 to-purple-300 container mx-auto'>
//             Banner
//         </div>
//     );
// };

// export default Banner;

import React from "react";

// 👉 তুমি তোমার image এখানে import করবে
import bannerImg from "../../../assets/banner-main.png"; // path change করো যদি লাগে

const Banner = () => {
  return (
    <div className="container mx-auto px-4 mt-5">
      
      {/* 👉 Main Banner Container */}
      <div
        className="relative rounded-3xl overflow-hidden min-h-[60vh] flex items-center justify-center text-center"
        
        // 👉 Background image + gradient overlay
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(128,0,128,0.4)), url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 👉 Content */}
        <div className="text-white max-w-2xl px-4">
          
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 mb-6">
            Beyond Boundaries Beyond Limits
          </p>

          {/* Button */}
          <button className="btn bg-lime-400 text-black font-semibold border-none hover:bg-lime-500">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;