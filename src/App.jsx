import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import NewArrivals from "./components/BestSeller";
import TshirtSection from "./components/TshirtSection";
import SweatshirtSection from "./components/SweatshirtSection";
import Footer from "./components/Footer";
import ProductDetail from "./components/page/ProductDetail";
import CartPage from "./components/page/CartPage";
import CheckoutPage from "./components/page/CheckoutPage";
import EvenBanner from "./components/EvenBanner";
import ShippingExchange from "./components/ShippingExchange";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* 🏠 Home page (no separate Home component needed) */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <NewArrivals />
              <EvenBanner />
              <TshirtSection />
              <SweatshirtSection />
            </>
          }
        />

        {/* 🛍️ Product Detail Page */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shipping-exchange" element={<ShippingExchange />} />


      </Routes>
              <Footer />

    </Router>
  );
}

export default App;
