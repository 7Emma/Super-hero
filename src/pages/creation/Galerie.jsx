import React, { useEffect, useState } from "react";
import initialHerosData from "../../data/Hero";
import HeroCard from "../../components/HeroCard";
import { Link } from "react-router-dom";
import { getHeroes } from "../../services/api";

function Galerie() {
  const [heroes, setHeroes] = useState([]); // La liste combinée des héros (JSON + Backend)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedHeroId, setExpandedHeroId] = useState(null); // Gère l'expansion par ID

  useEffect(() => {
    const fetchAndCombineHeroes = async () => {
      try {
        const backendResult = await getHeroes(); // Appel à la fonction API du backend
        let combinedHeroes = [...initialHerosData]; // Commence avec vos héros JSON

        if (backendResult.success && backendResult.heroes) {
          // Filtrer les doublons si un héros du backend a le même _id qu'un héros initial
          const backendHeroesFiltered = backendResult.heroes.filter(
            (backendHero) =>
              !initialHerosData.some(
                (initialHero) => initialHero._id === backendHero._id
              )
          );
          combinedHeroes = [...combinedHeroes, ...backendHeroesFiltered];
        } else if (backendResult.message) {
          setError(backendResult.message); // Affiche l'erreur du backend si la requête échoue
        }

        setHeroes(combinedHeroes);
      } catch (err) {
        console.error(
          "Erreur lors du chargement ou de la combinaison des héros :",
          err
        );
        setError(
          "Erreur réseau ou serveur indisponible lors du chargement des héros."
        );
        setHeroes(initialHerosData); // Affiche au moins les héros JSON en cas d'erreur grave
      } finally {
        setLoading(false);
      }
    };

    fetchAndCombineHeroes();
  }, []); // L'effet ne se relance qu'une fois au montage

  const toggleExpanded = (id) => {
    // Utilise l'ID pour basculer l'expansion
    setExpandedHeroId(expandedHeroId === id ? null : id);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-300 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-amber-100">Chargement des héros...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
        <div className="bg-red-500/20 text-red-300 border border-red-500/30 p-6 rounded-xl shadow-lg text-center max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Erreur de chargement</h2>
          <p>{error}</p>
          <button
            onClick={() => {
              setHeroes(initialHerosData); // Affiche au moins les héros initiaux en cas d'erreur
              setError(null); // Réinitialise l'erreur
            }}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Afficher les héros par défaut
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 relative overflow-hidden">
      {/* Fond animé avec formes géométriques */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1000ms" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2000ms" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-400 bg-clip-text text-transparent">
            Galerie des Héros
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heroes.map((hero) => (
            <HeroCard
              key={hero._id} // Utilise _id pour la clé, assurez-vous qu'il est unique
              hero={hero}
              isExpanded={expandedHeroId === hero._id}
              onToggle={() => toggleExpanded(hero._id)}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center text-white">
            <div className="text-4xl font-bold mb-2">{heroes.length}</div>
            <div className="text-lg">Héros Créés</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-red-500 rounded-xl p-6 text-center text-white">
            <div className="text-4xl font-bold mb-2">∞</div>
            <div className="text-lg">Pouvoirs Possibles</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-center text-white">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-lg">Protection Active</div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/create"
            className="group relative inline-flex items-center gap-2 
                       bg-gradient-to-r from-red-500 to-red-700 
                       text-white px-8 py-4 rounded-full font-bold text-lg 
                       overflow-hidden shadow-lg 
                       transition-all duration-500 ease-out 
                       hover:scale-105 hover:shadow-xl 
                       active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-500/50
                       animate-pulse-subtle" // Nouvelle animation
          >
            <span className="relative z-10">🦸 Créer le vôtre</span>
            {/* Effet de brillance au survol */}
            <span
              className="absolute inset-0 w-full h-full bg-white opacity-0 
                                group-hover:opacity-20 transition-all duration-300 
                                transform -translate-x-full group-hover:translate-x-full 
                                skew-x-12"
            />
          </Link>
        </div>
      </div>

      {/* Styles (déplacés dans une balise <style> standard) */}
      <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}

export default Galerie;
