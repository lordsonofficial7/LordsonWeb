// import React from "react";
// import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
// import Logo from "../assets/LOGO.png"; // adjust path if needed

// export default function Footer() {
//   return (
//     <footer className="bg-black text-gray-300 py-12 mt-20">
//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
//           {/* Logo + About */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <img
//                 src={Logo}
//                 alt="Lordson Logo"
//                 className="h-10 w-auto object-contain"
//               />
//               <h2 className="text-lg font-bold text-white">LORDSON</h2>
//             </div>
//             <p className="text-sm text-gray-400 leading-relaxed">
//                   LORDSON is your ultimate destination for premium fitness apparel, combining style, comfort, and performance. Our carefully crafted collections are designed to empower you in every workout, from high-intensity training to casual athleisure.

//             </p>
//           </div>

//           {/* Quick Links */}
//           {/* <div>
//             <h3 className="text-white font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Shop
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Best Sellers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   New Arrivals
//                 </a>
//               </li>
//             </ul>
//           </div> */}

//           {/* Support */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Support</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a
//                   href="https://wa.me/918929526626?text=Can%20I%20get%20more%20information%20about%20your%20product%3F"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-white transition"
//                 >
//                   Contact Us
//                 </a>
//               </li>


//               <li>
//                 <a href="/shipping-exchange" className="hover:text-white transition">
//                   Shipping & Exchange
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="https://www.instagram.com/lordson.in/?igsh=MWxtajRibTJoN2ZpZg=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>

//               {/* <a
//                 href="#"
//                 className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
//               >
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
//               >
//                 <Youtube className="w-5 h-5" />
//               </a> */}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
//           <p>© {new Date().getFullYear()} LORDSON. All rights reserved.</p>

//         </div>
//       </div>
//     </footer>
//   );
// }



import React from "react";
import { Instagram } from "lucide-react";
import Logo from "../assets/LOGO.png";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          {/* Logo + About */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Logo}
                alt="Lordson Logo"
                className="h-10 w-auto object-contain"
              />
              <h2 className="text-lg font-bold text-white">LORDSON</h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              LORDSON is your ultimate destination for premium fitness apparel, combining style, comfort, and performance. Our carefully crafted collections empower you in every workout, from high-intensity training to casual athleisure.
            </p>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/918929526626?text=Can%20I%20get%20more%20information%20about%20your%20product%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/shipping-exchange"
                  className="hover:text-white transition"
                >
                  Shipping & Exchange
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/lordson.in/?igsh=MWxtajRibTJoN2ZpZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
          <p className="mb-2 md:mb-0">
            © {new Date().getFullYear()} LORDSON. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}
