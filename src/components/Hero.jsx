


import React, { useEffect, useState } from "react";
import { getBanners } from "../js/api";

export default function Hero() {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
console.log(banner);
  useEffect(() => {
    const fetchBannerData = async () => {
      const data = await getBanners();
      if (data && data.length > 0) {
        const activeBanner = data.find((b) => b.is_active) || data[0];
        setBanner(activeBanner);
      }
      setLoading(false);
    };

    fetchBannerData();
  }, []);

  if (loading)
    return (
      <section className="flex justify-center items-center h-screen bg-gradient-to-l from-white to-black">
        <p className="text-gray-300 text-lg">Loading banner...</p>
      </section>
    );

  if (!banner)
    return (
      <section className="flex justify-center items-center h-screen bg-gradient-to-l from-white to-black">
        <p className="text-gray-300 text-lg">No banner available.</p>
      </section>
    );

  return (
    <section
     className="relative left-0 w-full h-[calc(100vh-80px)]
  text-white overflow-hidden"
    >
      {/* 🖼 Background image with blur + transparency */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${banner.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(15px) brightness(1)", // 🔥 Soft blur + dim effect
          transform: "scale(1.1)", // prevents edge blur cutting
        }}
      ></div>

      {/* 🩶 Overlay gradient from right to left */}
      <div className="absolute inset-0 bg-gradient-to-l from-white via-gray-900/70 to-black/90 opacity-90 z-10"></div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-20 gap-10 h-full">
        
        {/* Left: Text Section */}
        <div className="md:w-1/2 space-y-6 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
         
            <span className="text-gray-300">{banner.title}</span>
          </h1>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            {banner.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 font-semibold text-white bg-black rounded-md hover:bg-gray-800 transition-transform hover:scale-105">
              Join Now
            </button>
            <button className="px-6 py-2 font-semibold text-black bg-white rounded-md hover:bg-gray-100 transition-transform hover:scale-105">
              More Info
            </button>
          </div>
        </div>

        {/* Right: Foreground Image */}
        <div className="md:w-1/2 flex justify-center items-center h-full relative">
          <div
            className="relative w-72 h-72 md:w-[750px] md:h-[750px] 
                        overflow-hidden shadow-2xl 
                       transform md:translate-x-10 lg:translate-x-16 backdrop-blur-sm"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
