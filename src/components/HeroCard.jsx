import React, { useState } from "react";
import HeroDetailModal from "../pages/creation/HeroDetailModal"; // Importez le nouveau composant de modale

function HeroCard({ hero }) { // isExpanded et onToggle ne sont plus nécessaires ici
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="group relative bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={hero.image}
            alt={hero.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm">
            {hero.date}
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              {hero.name}
            </h3>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>

          {/* Description brève (toujours affichée) */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start space-x-2">
              <span className="text-yellow-400 text-sm font-semibold min-w-fit">
                ⚡ Création:
              </span>
              <p className="text-gray-300 text-sm line-clamp-3">
                {hero.description.creation}
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-400 text-sm font-semibold min-w-fit">
                🎭 Identité:
              </span>
              <p className="text-gray-300 text-sm line-clamp-3">
                {hero.description.identite}
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-purple-400 text-sm font-semibold min-w-fit">
                💪 Pouvoirs:
              </span>
              <p className="text-gray-300 text-sm line-clamp-4">
                {hero.description.pouvoirs}
              </p>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex space-x-3">
            <button
              onClick={handleOpenModal} // Ouvre la modale
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Voir plus
            </button>
            <button className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              ⚡
            </button>
          </div>
        </div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-red-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* La modale est rendue ici si showModal est vrai */}
      {showModal && <HeroDetailModal hero={hero} onClose={handleCloseModal} />}
    </>
  );
}

export default HeroCard;
