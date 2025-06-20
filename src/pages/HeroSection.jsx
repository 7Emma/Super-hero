import React from "react";

function HeroSection() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Hero Section */}
        <div className="text-center py-16 border-t border-white/20 mt-4">
          <div className="text-6xl md:text-7xl animate-pulse font-bold text-blue-600">
            <p className="">
              Bienvenue sur la page officielle des{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                Super Hero
              </span>
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 py-8">
            Découvrez Votre
            <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-purple-400 bg-clip-text text-transparent">
              Super Hero Admire
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Créez, personnalisez et partagez vos super-héros dans un univers
            sans limites
          </p>
          <a
            href="./Home.jsx"
            className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
          >
            Commencer L'Aventure ⚡
          </a>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
