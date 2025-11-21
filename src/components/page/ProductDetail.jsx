

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../../js/api";
import { addToCart } from "../../js/cartUtils";
import BestSeller from "../BestSeller";
import SizeChert from "../../assets/size.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const allProducts = await getProducts();
      if (allProducts) {
        const selected = allProducts.find((p) => p.id === parseInt(id));
        setProduct(selected);

        // Extract images safely + remove duplicates
        let imgs = [];

        if (selected?.image_url) imgs.push(selected.image_url);
        if (selected?.images?.length > 0) {
          selected.images.forEach((img) => {
            if (img?.image_url && !imgs.includes(img.image_url)) {
              imgs.push(img.image_url);
            }
          });
        }

        setMainImage(imgs[0] || null);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  const handleAddToCart = () => {
    if (!selectedSize) return alert("Please select a size first.");

    addToCart(product, selectedSize, qty);

    navigate("/cart");
  };

  // Collect all images together (no duplicates)
  const imageGallery = [
    product.image_url,
    ...(product.images || []).map((img) => img.image_url)
  ].filter((v, i, a) => v && a.indexOf(v) === i);

  return (
    <div className="min-h-screen bg-white px-6 lg:px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE - IMAGE SECTION */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-3 justify-center">
            {imageGallery.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`Product Thumb ${index}`}
                onClick={() => setMainImage(imgUrl)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border 
                  ${mainImage === imgUrl ? "border-orange-500" : "border-gray-300"}`}
              />
            ))}
          </div>

          <div className="flex-1 flex justify-center items-center">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full max-h-[600px] object-contain rounded-2xl shadow"
            />
          </div>
        </div>

        {/* RIGHT SIDE - PRODUCT DETAILS */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-600 capitalize">{product.category}</p>

          {/* PRICE */}
          <div>
            <span className="text-2xl font-semibold text-gray-900">
              ₹{parseFloat(product.final_price).toFixed(2)}
            </span>

            {product.discount && (
              <>
                <span className="ml-3 text-gray-400 line-through">
                  ₹{parseFloat(product.price).toFixed(2)}
                </span>
                <span className="ml-2 text-green-600 font-medium">
                  ({product.discount}% OFF)
                </span>
              </>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 leading-relaxed">
            {product.description || "No description available."}
          </p>

          {/* SIZE SELECTOR */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Size
            </label>

            <div className="flex flex-wrap gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => {
                const available = product.sizes?.includes(size);
                const selected = selectedSize === size;

                return (
                  <button
                    key={size}
                    onClick={() => available && setSelectedSize(size)}
                    disabled={!available}
                    className={`px-3 py-2 rounded-lg text-sm font-medium border transition
                      ${
                        available
                          ? selected
                            ? "bg-orange-500 text-white"
                            : "bg-white hover:bg-orange-50"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed line-through"
                      }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium">Qty</label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-1"
              >
                −
              </button>
              <div className="px-4">{qty}</div>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-1"
              >
                +
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`text-white font-semibold py-3 px-6 rounded-lg w-full lg:w-1/2 transition-all
              ${
                selectedSize
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-orange-300 cursor-not-allowed"
              }`}
          >
            🛒 Add to Cart
          </button>

          <div className="pt-4 border-t mt-4 text-sm text-gray-600">
            <img
              src={SizeChert}
              alt={product.title}
              className="w-full max-h-[300px] object-contain rounded-2xl shadow"
            />
          
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <BestSeller key={id} />
    </div>
  );
};

export default ProductDetail;
