// import React, { useEffect, useState } from "react";
// import { getSweatshirts } from "../js/api";

// export default function SweatshirtSection() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = await getSweatshirts();
//       if (data && data.length > 0) {
//         setProducts(data);
//       }
//       setLoading(false);
//     };
//     fetchProducts();
//   }, []);

//   if (loading)
//     return (
//       <section className="flex justify-center items-center h-96 bg-gray-50">
//         <p className="text-gray-600 text-lg">Loading Sweatshirts...</p>
//       </section>
//     );

//   return (
//     <section className="py-16 bg-gray-50 w-full">
//       <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
//         Sweatshirts 🧥
//       </h2>

//       {/* Responsive Grid */}
//       <div
//         className="w-full grid 
//         grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
//         gap-6 px-2 sm:px-6 lg:px-10"
//       >
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-xl shadow-md hover:shadow-xl 
//             transition overflow-hidden relative"
//           >
//             {/* Tag */}
//             <div className="absolute top-2 left-2 bg-white/80 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
//               TRENDING 🔥
//             </div>

//             {/* Image */}
//             <div className="w-full aspect-[3/4] overflow-hidden">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             {/* Product Info */}
//             <div className="p-4">
//               <h3 className="text-sm font-semibold text-gray-800 truncate">
//                 {product.title}
//               </h3>

//               {/* Prices */}
//               <div className="mt-2 flex items-center gap-2">
//                 <span className="text-lg font-bold text-gray-900">
//                   ₹{parseFloat(product.final_price).toLocaleString()}
//                 </span>
//                 <span className="text-sm text-gray-400 line-through">
//                   ₹{parseFloat(product.price).toLocaleString()}
//                 </span>
//               </div>

//               {/* Sizes */}
//               <div className="flex flex-wrap gap-2 mt-3">
//                 {product.sizes?.map((size, i) => (
//                   <span
//                     key={i}
//                     className="border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded-md"
//                   >
//                     {size}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import React, { useEffect, useState } from "react";
import { getSweatshirts } from "../js/api";
import { Link } from "react-router-dom"; // ✅ import Link

export default function SweatshirtSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getSweatshirts();
      if (data && data.length > 0) {
        setProducts(data);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <section className="flex justify-center items-center h-96 bg-gray-50">
        <p className="text-gray-600 text-lg">Loading Sweatshirts...</p>
      </section>
    );

  if (products.length === 0)
    return (
      <section className="flex justify-center items-center h-96 bg-gray-50">
        <p className="text-gray-600 text-lg">No Sweatshirts found.</p>
      </section>
    );

  return (
    <section className="py-16 bg-gray-50 w-full">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        SWEATSHIRTS 🧥
      </h2>

      <div
        className="w-full grid 
        grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6 px-2 sm:px-6 lg:px-10"
      >
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`} // ✅ redirect to ProductDetail page
            className="bg-white rounded-xl shadow-md hover:shadow-xl 
              transition overflow-hidden relative group"
          >
            {/* Tag */}
            <div className="absolute top-2 left-2 bg-white/80 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
              TRENDING 🔥
            </div>

            {/* Image */}
            <div className="w-full aspect-[3/4] overflow-hidden">
              <img
                src={product.image_url}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800 truncate">
                {product.title}
              </h3>

              {/* Prices */}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  ₹{parseFloat(product.final_price).toLocaleString()}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{parseFloat(product.price).toLocaleString()}
                </span>
              </div>

              {/* Sizes */}
              <div className="flex flex-wrap gap-2 mt-3">
                {product.sizes?.map((size, i) => (
                  <span
                    key={i}
                    className="border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded-md"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
