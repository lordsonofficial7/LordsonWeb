// import React, { useEffect, useState } from "react";
// import { getBanners } from "../js/api";

// export default function EvenBanner() {
//   const [evenBanner, setEvenBanner] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBannerData = async () => {
//       const data = await getBanners();
//       if (data && data.length > 0) {
//         const even = data.find((b) => b.id % 2 === 0);
//         setEvenBanner(even);
//       }
//       setLoading(false);
//     };
//     fetchBannerData();
//   }, []);

//   if (loading) return null;
//   if (!evenBanner) return null;

//   return (
//     <section className="relative w-full h-[80vh] text-white overflow-hidden">

//       {/* Background Blur */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${evenBanner.image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           filter: "blur(15px) brightness(1)",
//           transform: "scale(1.1)",
//         }}
//       ></div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent z-10"></div>

//       {/* Content */}
//       <div className="relative z-20 max-w-7xl mx-auto flex items-center justify-between px-6 py-12 h-full gap-x-16">

//         {/* Left Image */}
//         <div className="w-1/2 flex justify-center items-center">
//           <img
//             src={evenBanner.image}
//             alt={evenBanner.title}
//             className="w-full h-full object-cover opacity-95 rounded-xl shadow-xl"
//           />
//         </div>

//         {/* Right Text */}
//         <div className="w-1/2 space-y-6">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-200">
//             {evenBanner.title}
//           </h2>
//           <p className="text-lg text-gray-300 leading-relaxed">
//             {evenBanner.description}
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }
// // 


import React, { useEffect, useState } from "react";
import { getBanners } from "../js/api";

export default function EvenBanner() {
  const [evenBanner, setEvenBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBannerData = async () => {
      const data = await getBanners();
      if (data && data.length > 0) {
        const even = data.find((b) => b.id % 2 === 0);
        setEvenBanner(even);
      }
      setLoading(false);
    };
    fetchBannerData();
  }, []);

  if (loading) return null;
  if (!evenBanner) return null;

  return (
    <section className="relative w-full text-white overflow-hidden">

      {/* Background Blur */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${evenBanner.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(15px) brightness(1)",
          transform: "scale(1.1)",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-8 md:gap-16">

        {/* Left Image on desktop / top on mobile */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={evenBanner.image}
            alt={evenBanner.title}
            className="w-full h-full object-cover opacity-95 rounded-xl shadow-xl"
          />
        </div>

        {/* Right Text on desktop / bottom on mobile */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-200">
            {evenBanner.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            {evenBanner.description}
          </p>
        </div>

      </div>
    </section>
  );
}
