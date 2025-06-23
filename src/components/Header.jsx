import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white h-16 py-4 px-5 shadow-sm">
      <div className="flex justify-between items-center w-full">
        <Link to="#" className="text-4xl text-[#fa4128] font-bold">
          SocioCliq
        </Link>

        <nav className="flex space-x-6 text-lg font-serif text-gray-800">
          <Link to="/" className="hover:text-blue-600">Platform</Link>
          <Link to="#" className="hover:text-orange-600">Solutions</Link>
          <Link to="#" className="hover:text-green-600">Resources</Link>
          <Link to="#" className="hover:text-pink-600">Company</Link>
          <Link to="/pricingPage" className="hover:text-yellow-500">Pricing</Link>
        </nav>

        <div className="flex items-center text-lg space-x-5 font-serif">
          <Link to="#" className="text-gray-700 hover:underline">Log In</Link>
          <Link to="#" className="text-gray-700 hover:underline">Free Trial</Link>
          <Link to="#">
            <div className="bg-[#fa4128] text-white px-4 py-2 hover:bg-[#7a443d] transition">
              Get a Demo
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
