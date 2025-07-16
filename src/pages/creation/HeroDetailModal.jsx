import React from "react";
import { XCircle } from "lucide-react"; // Icône pour fermer la modale

function HeroDetailModal({ hero, onClose }) {
  if (!hero) return null; // Ne rend rien si aucun héros n'est passé

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in-modal">
      <div className="relative bg-gradient-to-br from-slate-800 via-purple-800 to-slate-800 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/20 transform scale-95 animate-scale-in">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors duration-300 z-10"
          aria-label="Fermer la modale"
        >
          <XCircle className="w-8 h-8" />
        </button>

        {/* Contenu de la modale */}
        <div className="p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <img
              src={hero.image}
              alt={hero.name}
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-yellow-400 shadow-lg flex-shrink-0"
            />
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-2">
                {hero.name}
              </h2>
              <p className="text-xl text-gray-300 mb-2">
                Catégorie:{" "}
                <span className="font-semibold">{hero.categorie}</span> | Année:{" "}
                <span className="font-semibold">{hero.date}</span>
              </p>
              <p className="text-purple-300 italic text-lg">
                "{hero.description.signature}"
              </p>
            </div>
          </div>

          <div className="space-y-6 text-gray-200">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                ⚡ Création & Origine
              </h3>
              <p>{hero.description.creation}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">
                🎭 Identité Secrète
              </h3>
              <p>{hero.description.identite}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                💪 Super-Pouvoirs
              </h3>
              <p>{hero.description.pouvoirs}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                📖 Histoire Complète
              </h3>
              <p>{hero.description.histoire}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Styles pour les animations de la modale */}
      <style>{`
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-modal {
          animation: fadeInModal 0.3s ease-out forwards;
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default HeroDetailModal;
