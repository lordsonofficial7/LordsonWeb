

// import { Menu, ShoppingBag } from "lucide-react";
// import Logo from "../assets/LOGO.png"; // ⚠️ Ensure correct path (no space in filename)

// export default function Header() {
//   return (
//     <header className="w-full border-b bg-white">
//       <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4 lg:py-8 transition-all duration-300">
//         {/* Left Section */}
//         <div className="flex items-center">
//           {/* Mobile Menu Icon */}

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8 text-xl font-medium text-gray-700">
//             <a href="#" className="hover:text-orange-600 transition">Best Seller</a>
//             <a href="#" className="hover:text-orange-600 transition">T-Shirt</a>
//             <a href="#" className="hover:text-orange-600 transition">Sweatshirt</a>
//           </nav>
//         </div>

//         {/* Center Section - Always visible Logo */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
//           <img
//             src={Logo}
//             alt="Logo"
//             className="object-contain h-12 sm:h-15 lg:h-20 w-auto transition-all duration-300"
//           />
//         </div>

//         {/* Right Section - Cart Icon */}
//         <div className="flex items-center">
//           <ShoppingBag className="w-6 h-6 cursor-pointer text-gray-700 hover:text-orange-600" />
//         </div>
//       </div>
//     </header>
//   );
// }



import { Menu, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link
import Logo from "../assets/LOGO.png"; // make sure this path is correct

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4 lg:py-8 transition-all duration-300">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xl font-medium text-gray-700">
            <Link to="/" className="hover:text-orange-600 transition">
              Best Seller
            </Link>
            <Link to="/category/tshirt" className="hover:text-orange-600 transition">
              T-Shirt
            </Link>
            <Link to="/category/sweatshirt" className="hover:text-orange-600 transition">
              Sweatshirt
            </Link>
          </nav>
        </div>

        {/* Center Section - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="object-contain h-12 sm:h-15 lg:h-20 w-auto transition-all duration-300"
            />
          </Link>
        </div>

        {/* Right Section - Cart Icon */}
        <div className="flex items-center">
          <Link to="/cart" className="relative">
            <ShoppingBag className="w-6 h-6 cursor-pointer text-gray-700 hover:text-orange-600" />
          </Link>
        </div>
      </div>
    </header>
  );
}
