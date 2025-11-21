// // src/api/api.js
// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// // Generic helper for GET requests
// export const fetchData = async (endpoint) => {
//   try {
//     const response = await fetch(`${BASE_URL}/${endpoint}/`);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch ${endpoint}: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("API Fetch Error:", error);
//     return null;
//   }
// };

// // Specific API functions
// export const getBanners = async () => {
//   return fetchData("banners");
// };

// // Later you can add more:
// export const getProducts = async () => {
//   return fetchData("products");
// };

// // 🔹 T-shirt Products API
// export const getTshirts = async () => fetchData("products/tshirts");

// // 🔹 Sweatshirt Products API
// export const getSweatshirts = async () => {
//   return fetchData("products/sweatshirts");
// };


// // 🧾 Place COD Order API
// export const placeCODOrder = async (orderData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/orders/create-cod-order/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderData),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("Order Error:", errorData);
//       throw new Error(errorData.error || "Failed to place COD order");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("COD Order API Error:", error);
//     throw error;
//   }
// };



const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 🧩 Generic helper for GET requests
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null;
  }
};

// 🖼️ Get Homepage Data
export const getBanners = async () => fetchData("banners");
export const getProducts = async () => fetchData("products");
export const getTshirts = async () => fetchData("products/tshirts");
export const getSweatshirts = async () => fetchData("products/sweatshirts");

// 🧾 Place Cash on Delivery (COD) Order
export const placeCODOrder = async (orderData) => {
  try {
    const response = await fetch(`${BASE_URL}/orders/create-cod-order/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("COD Order Error:", errorData);
      throw new Error(errorData.error || "Failed to place COD order");
    }

    return await response.json();
  } catch (error) {
    console.error("COD Order API Error:", error);
    throw error;
  }
};

// // 💳 Create Razorpay Online Order
// export const createRazorpayOrder = async (orderData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/orders/create-razorpay-order/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderData),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("Razorpay Create Order Error:", errorData);
//       throw new Error(errorData.error || "Failed to create Razorpay order");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Razorpay Order API Error:", error);
//     throw error;
//   }
// };

// // ✅ Verify Razorpay Payment after success
// export const verifyRazorpayPayment = async (verifyData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/orders/verify-payment/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(verifyData),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("Razorpay Verify Error:", errorData);
//       throw new Error(errorData.error || "Failed to verify payment");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Razorpay Verify API Error:", error);
//     throw error;
//   }
// };
