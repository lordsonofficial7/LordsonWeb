import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Logo from "../assets/LOGO.png"; // adjust path if needed

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Logo}
                alt="Lordson Logo"
                className="h-10 w-auto object-contain"
              />
              <h2 className="text-lg font-bold text-white">LORDSON</h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium fitness apparel built for performance and comfort.
              Designed to help you look good and feel unstoppable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} LORDSON. All rights reserved.</p>
          <p className="mt-3 md:mt-0">
            Designed with 💪 by <span className="text-white font-semibold">FreakFit</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
