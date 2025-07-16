import React from "react";
import HeroSection from "../pages/HeroSection";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-400 bg-clip-text text-transparent">
              SuperHero
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-lg hover:scale-110 transform relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/galerie"
                  className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-lg hover:scale-110 transform relative group"
                >
                  Galerie
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/create"
                  className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-lg hover:scale-110 transform relative group"
                >
                  Créer
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Rejoindre
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-yellow-400 transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      </div>
    </nav>
  );
}

export default Navbar;
