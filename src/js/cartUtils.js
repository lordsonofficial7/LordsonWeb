// src/js/cartUtils.js

// 🔹 Get all cart items
export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

// 🔹 Save all cart items
const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// 🔹 Add a product to the cart
export const addToCart = (product, size, qty) => {
  const cart = getCart();

  // ✅ Correct image selection
  const image =
    product.image_url ||
    product.image ||
    (product.images?.length > 0 ? product.images[0].image_url : null);

  const existingIndex = cart.findIndex(
    (item) => item.id === product.id && item.size === size
  );

  if (existingIndex !== -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      size,
      qty,
      price: parseFloat(product.price),
      final_price: parseFloat(product.final_price),

      // 🔥 Save as `image` (cart standard)
      image: image
    });
  }

  saveCart(cart);
};

// 🔹 Remove one item from the cart
export const removeFromCart = (id, size) => {
  const cart = getCart().filter(
    (item) => !(item.id === id && item.size === size)
  );
  saveCart(cart);
};

// 🔹 Update quantity for an item
export const updateCartItem = (id, size, qty) => {
  const cart = getCart();
  const index = cart.findIndex((item) => item.id === id && item.size === size);
  if (index !== -1) {
    cart[index].qty = qty;
    saveCart(cart);
  }
};

// 🔹 Clear all cart items
export const clearCart = () => {
  localStorage.removeItem("cart");
};
