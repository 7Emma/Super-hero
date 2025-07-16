import React from "react";
import { AuthProvider } from "./contexts/AuthContext"; // Importez AuthProvider
import AppContext from "./routes/AppContext"; // Importez votre composant de routes

// Composant App principal qui enveloppe toute l'application
function App() {
  return (
    <AuthProvider>
      {" "}
      {/* AuthProvider doit envelopper tout ce qui a besoin du contexte d'auth */}
      <AppContext /> {/* Votre composant de routes principal */}
    </AuthProvider>
  );
}

export default App;
