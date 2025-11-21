import React, { useState, useEffect } from "react";
import { getCart, clearCart } from "../../js/cartUtils";
import { useNavigate } from "react-router-dom";
import {
  placeCODOrder,
  // createRazorpayOrder,
  // verifyRazorpayPayment,
} from "../../js/api";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "COD",
  });

  const navigate = useNavigate();

  // 🛒 Load cart on mount
  useEffect(() => {
    const cartData = getCart();
    if (!cartData.length) {
      navigate("/cart");
      return;
    }
    setCart(cartData);
  }, [navigate]);

  // 💰 Subtotal Calculation
  const subtotal = cart.reduce(
    (acc, item) => acc + item.final_price * item.qty,
    0
  );

  // 🔄 Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 💳 Load Razorpay script dynamically
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // 🧾 Handle Order Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }

    const orderData = {
      customer_name: formData.name,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      pincode: formData.pincode,
      payment_method: formData.paymentMethod,
      total_amount: subtotal,
      cart_data: cart.map((item) => ({
        product_id: item.id,
        product_title: item.title,
        size: item.size,
        qty: item.qty,
        price: item.final_price,
        total_price: item.final_price * item.qty,
      })),
    };

    // 🧾 COD FLOW
    if (formData.paymentMethod === "COD") {
      try {
        const result = await placeCODOrder(orderData);
        if (result?.order_id) {
          alert(`✅ COD Order placed successfully! Order ID: ${result.order_id}`);
          clearCart();
          navigate("/order-success");
        } else {
          alert("⚠️ Something went wrong while placing your COD order.");
        }
      } catch (error) {
        console.error("Order placement failed:", error);
        alert(error.message || "❌ Failed to place order.");
      }
      return;
    }

    // 💳 ONLINE PAYMENT FLOW
    if (formData.paymentMethod === "Online") {
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        alert("Razorpay SDK failed to load. Check your connection.");
        return;
      }

      try {
        const data = await createRazorpayOrder(orderData);
        if (!data?.razorpay_order_id) {
          alert("❌ Failed to initiate Razorpay order.");
          return;
        }

        const options = {
          key: data.razorpay_key,
          amount: data.amount,
          currency: "INR",
          name: "LORDSON", // ✅ You can change this business name
          description: "Secure Online Payment",
          order_id: data.razorpay_order_id,  // ✅ Correct key name
          handler: async function (response) {
            try {
              await verifyRazorpayPayment({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                order_db_id: data.order_db_id,
              });
              clearCart();
              navigate("/order-success");
            } catch (err) {
              console.error("Payment verification failed:", err);
              alert("❌ Payment verification failed.");
            }
          },
          prefill: {
            name: formData.name,
            contact: formData.phone,
          },
          theme: {
            color: "#F97316",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error("Razorpay Payment Error:", error);
        alert("❌ Failed to start Razorpay payment.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          🧾 Checkout Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Address *
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* City & Pincode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Payment Method
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={formData.paymentMethod === "COD"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>

              {/* <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Online"
                  checked={formData.paymentMethod === "Online"}
                  onChange={handleChange}
                />
                Pay Online (Razorpay)
              </label> */}

              <label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Online"
                  disabled
                />
                Pay Online (Coming Soon)
              </label>

            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg font-bold text-orange-500">
              ₹{subtotal.toFixed(2)}
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            {formData.paymentMethod === "Online"
              ? "Pay Now"
              : "Place COD Order"}
          </button>
        </form>
      </div>
    </div>
  );
}
