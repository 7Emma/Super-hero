// src/pages/HeroGallery.jsx
import React, { useState } from 'react';
import heros from '../data/Hero';
import HeroCard from '../components/HeroCard';

function HeroGallery() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-400 bg-clip-text text-transparent">
            Galerie des Héros
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heros.map((hero, index) => (
            <HeroCard
              key={hero.id}
              hero={hero}
              isExpanded={expandedCard === index}
              onToggle={() => toggleExpanded(index)}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center text-white">
            <div className="text-4xl font-bold mb-2">{heros.length}</div>
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
      </div>

      {/* Styles */}
      <style jsx>{`
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
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default HeroGallery;