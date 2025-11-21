


import React, { useEffect, useState } from "react";
import { getCart, removeFromCart, clearCart, updateCartItem } from "../../js/cartUtils";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook


const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // ✅ initialize navigate

  console.log(cart);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id, size) => {
    removeFromCart(id, size);
    setCart(getCart());
  };

  const handleClear = () => {
    clearCart();
    setCart([]);
  };

  const handleQtyChange = (id, size, newQty) => {
    if (newQty < 1) return;
    updateCartItem(id, size, newQty);
    setCart(getCart());
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.final_price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />

                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          handleQtyChange(item.id, item.size, item.qty - 1)
                        }
                        className="px-2 py-1 border rounded-l-md hover:bg-gray-100"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 border-t border-b">
                        {item.qty}
                      </span>
                      <button
                        onClick={() =>
                          handleQtyChange(item.id, item.size, item.qty + 1)
                        }
                        className="px-2 py-1 border rounded-r-md hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-orange-500 font-medium">
                    ₹{(item.final_price * item.qty).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id, item.size)}
                    className="text-red-500 hover:text-red-700 mt-1 text-sm"
                  >
                    🗑 Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Total */}
            <div className="mt-6 flex justify-between items-center border-t pt-4">
              <p className="text-lg font-semibold">
                Total: ₹{subtotal.toFixed(2)}
              </p>
              <button
                onClick={handleClear}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Clear Cart
              </button>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600"
            >
              PROCEED TO BUY
            </button>

          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
