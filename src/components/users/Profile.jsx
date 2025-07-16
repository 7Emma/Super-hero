import React, { useState, useEffect } from 'react';
import { User, Mail, Calendar, Info } from 'lucide-react'; // Icônes Lucide React
import { useAuth } from '../../contexts/AuthContext'; // Pour récupérer le token
import { fetchUserProfile } from '../../services/api'; // Pour l'appel API

function Profile() {
  const { token, logout } = useAuth(); // Récupère le token et la fonction logout du contexte
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      if (!token) {
        setError("Aucun token d'authentification trouvé. Veuillez vous connecter.");
        setIsLoading(false);
        logout(); // Déconnecte si pas de token
        return;
      }

      const result = await fetchUserProfile(token);

      if (result.success) {
        setProfile(result.profile);
      } else {
        setError(result.message || "Impossible de charger le profil.");
        // Si l'erreur est liée à l'authentification (token invalide/expiré), déconnecter l'utilisateur
        if (result.message && (result.message.includes("Authentification requise") || result.message.includes("session expirée"))) {
          logout(); 
        }
      }
      setIsLoading(false);
    };

    getProfile();
  }, [token, logout]); // Dépendances: relance l'effet si le token ou la fonction logout changent

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-300 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-emerald-100">Chargement du profil...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
        <div className="bg-red-500/20 text-red-300 border border-red-500/30 p-6 rounded-xl shadow-lg text-center max-w-md w-full">
          <Info className="w-12 h-12 mx-auto mb-4 text-red-400" />
          <h2 className="text-2xl font-bold mb-4">Erreur de chargement</h2>
          <p>{error}</p>
          <button 
            onClick={logout} 
            className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center max-w-md w-full border border-white/20">
          <h2 className="text-2xl font-bold text-amber-200 mb-4">Profil non trouvé</h2>
          <p className="text-amber-100/70">
            Les données du profil n'ont pas pu être chargées.
          </p>
          <button 
            onClick={logout} 
            className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl text-center max-w-md w-full border border-white/20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mb-4 shadow-xl">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-blue-200 drop-shadow-lg">
            Profil de {profile.username}
          </h2>
          <p className="text-blue-100/70 mt-2">Vos informations personnelles</p>
        </div>

        <div className="space-y-4 text-left">
          <div className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10">
            <User className="w-5 h-5 text-blue-300 mr-3" />
            <span className="font-semibold text-blue-100">Prénom:</span>
            <span className="ml-auto text-white">{profile.firstName}</span>
          </div>
          <div className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10">
            <User className="w-5 h-5 text-blue-300 mr-3" />
            <span className="font-semibold text-blue-100">Nom:</span>
            <span className="ml-auto text-white">{profile.lastName}</span>
          </div>
          <div className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10">
            <Mail className="w-5 h-5 text-blue-300 mr-3" />
            <span className="font-semibold text-blue-100">Email:</span>
            <span className="ml-auto text-white">{profile.email}</span>
          </div>
          <div className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10">
            <Calendar className="w-5 h-5 text-blue-300 mr-3" />
            <span className="font-semibold text-blue-100">Date de naissance:</span>
            <span className="ml-auto text-white">{profile.birthDate}</span>
          </div>
        </div>

        <button 
          onClick={logout} 
          className="mt-10 w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}

export default Profile;
