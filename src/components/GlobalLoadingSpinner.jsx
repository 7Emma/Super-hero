import React from "react";
import { useLoading } from "../contexts/LoadingContext"; // Importe le hook de chargement

function GlobalLoadingSpinner() {
  const { isLoading } = useLoading();

  if (!isLoading) return null; // Ne rend rien si pas en chargement

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50 transition-opacity duration-300">
      <div className="w-20 h-20 border-8 border-purple-400 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-white text-xl font-semibold animate-pulse">
        Chargement...
      </p>
      <p className="text-gray-300 text-sm mt-2">Veuillez patienter</p>
    </div>
  );
}

export default GlobalLoadingSpinner;
