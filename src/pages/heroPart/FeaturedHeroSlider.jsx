import React, { useState, useEffect } from "react";
import HeroCard from "../../components/HeroCard"; // Assurez-vous que le chemin est correct

function FeaturedHeroSlider({ heroes }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gère le défilement automatique des héros
  useEffect(() => {
    if (heroes.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroes.length);
    }, 5000); // Change de héros toutes les 5 secondes

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [heroes]); // Relance l'effet si la liste des héros change

  // Fonctions pour la navigation manuelle (optionnel)
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroes.length) % heroes.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroes.length);
  };

  if (heroes.length === 0) {
    return (
      <div className="text-center text-gray-400 text-lg">
        Aucun héros à afficher dans le carrousel.
      </div>
    );
  }

  const currentHero = heroes[currentIndex];

  return (
    <div className="relative w-full max-w-2xl mx-auto my-8">
      {/* Bouton Précédent */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 
                   bg-white/10 text-white p-3 rounded-full shadow-lg 
                   hover:bg-white/20 transition-all duration-300 z-10"
        aria-label="Héros précédent"
      >
        &#10094; {/* Flèche gauche */}
      </button>

      {/* Affichage du HeroCard actuel */}
      <div className="relative z-0">
        <HeroCard
          hero={currentHero}
          isExpanded={false} // Le carrousel n'affiche pas la carte en mode étendu
          onToggle={() => {}} // Pas de bascule d'expansion dans le carrousel
        />
      </div>

      {/* Bouton Suivant */}
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 
                   bg-white/10 text-white p-3 rounded-full shadow-lg 
                   hover:bg-white/20 transition-all duration-300 z-10"
        aria-label="Héros suivant"
      >
        &#10095; {/* Flèche droite */}
      </button>

      {/* Indicateurs de position (points) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroes.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentIndex ? "bg-yellow-400" : "bg-gray-400/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller au héros ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default FeaturedHeroSlider;
