import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Importe useNavigate
import { useLoading } from "../../contexts/LoadingContext"; // Importe le hook de chargement

function HeroSection() {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();

  const handleStartAdventureClick = () => {
    startLoading(); // Active le spinner
    navigate("/api/create"); // Navigue vers la page de création
    // Le spinner sera désactivé par le GlobalLoadingSpinner lorsque la nouvelle page est rendue,
    // ou par un setTimeout si la navigation est trop rapide pour un effet visuel.
    setTimeout(() => stopLoading(), 1000);
  };
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
          <Link
            onClick={handleStartAdventureClick}
            className="mt-8 inline-flex items-center gap-2 
                     bg-gradient-to-r from-purple-600 to-indigo-700 
                     text-white px-8 py-4 rounded-full font-bold text-lg 
                     shadow-lg hover:shadow-xl transition-all duration-300 
                     transform hover:scale-105 active:scale-95 animate-pulse-subtle"
          >
            ✨ Commencer l'aventure
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
