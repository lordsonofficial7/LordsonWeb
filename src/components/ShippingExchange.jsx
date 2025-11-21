import React from "react";

export default function ShippingExchange() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Shipping & Exchange Policy
        </h1>

        {/* Shipping Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Shipping</h2>
          <p className="text-gray-600 leading-relaxed">
            We strive to deliver your products as quickly as possible. 
            <br />
            🚚 Standard shipping usually takes <span className="font-semibold">6 to 7 working days</span> to reach you.
          </p>
        </section>

        {/* Exchange Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Exchange Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            Your satisfaction is our priority. You can exchange your product within 
            <span className="font-semibold"> 7 days after delivery</span>. 
            <br />
            Please ensure the product is unused, in original packaging, and in the same condition as received.
          </p>
        </section>

        {/* Optional CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-500">
            For further assistance, contact us via 
            <a
              href="https://wa.me/918929526626?text=Can%20I%20get%20more%20information%20about%20your%20Shipping%20and%20Exchange%20policy%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-semibold ml-1 hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
