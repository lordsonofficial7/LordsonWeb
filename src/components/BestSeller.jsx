

import React, { useEffect, useState } from "react";
import { getProducts } from "../js/api";
import { Link } from "react-router-dom"; // 👈 Import Link for navigation

export default function BestSeller() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      if (data && data.length > 0) {
        // Shuffle and pick 8 random products
        const randomProducts = [...data]
          .sort(() => 0.5 - Math.random())
          .slice(0, 8);
        setProducts(randomProducts);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <section className="flex justify-center items-center h-96 bg-gray-50">
        <p className="text-gray-600 text-lg">Loading Best Sellers...</p>
      </section>
    );

  return (
    <section className="py-16 bg-gray-50 w-full">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        Best Seller 🚀
      </h2>

      {/* Full-width responsive grid */}
      <div
        className="w-full grid 
        grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6 px-2 sm:px-6 lg:px-10"
      >
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`} // 👈 Redirect to product detail
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl 
            transition overflow-hidden relative cursor-pointer"
          >
            {/* Tag */}
            <div className="absolute top-2 left-2 bg-white/80 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
              NEW ARRIVAL 🔥
            </div>

            {/* Image */}
            <div className="w-full aspect-[3/4] overflow-hidden">
              <img
                src={product.image_url}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
