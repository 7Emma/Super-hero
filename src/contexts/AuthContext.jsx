import React, { createContext, useState, useContext, useEffect } from "react";

// Crée le contexte d'authentification
const AuthContext = createContext(null);

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => {
  return useContext(AuthContext);
};

// Fournisseur du contexte d'authentification
export const AuthProvider = ({ children }) => {
  // Initialise l'état de connexion en vérifiant le localStorage
  const [token, setToken] = useState(
    () => localStorage.getItem("authToken") || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  // Met à jour le localStorage et l'état isLoggedIn lorsque le token change
  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem("authToken");
      setIsLoggedIn(false);
    }
  }, [token]);

  // Fonction de connexion
  const login = (newToken) => {
    setToken(newToken);
  };

  // Fonction de déconnexion
  const logout = () => {
    setToken(null);
  };

  // Valeur du contexte qui sera fournie aux composants enfants
  const value = {
    token,
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
