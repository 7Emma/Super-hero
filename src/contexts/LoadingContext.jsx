import React, { createContext, useContext, useState } from "react";

// Crée le contexte de chargement
const LoadingContext = createContext();

// Hook personnalisé pour utiliser le contexte de chargement
export const useLoading = () => {
  return useContext(LoadingContext);
};

// Fournisseur de contexte de chargement
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour activer le chargement
  const startLoading = () => setIsLoading(true);

  // Fonction pour désactiver le chargement
  const stopLoading = () => setIsLoading(false);

  const value = {
    isLoading,
    startLoading,
    stopLoading,
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
