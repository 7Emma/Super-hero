// On récupère l'URL de notre variable d'environnement
const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";

// Fonction pour l'inscription de l'utilisateur
export const registerUser = async (formData) => {
  try {
    const res = await fetch(`${SERVER_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return await res.json();
  } catch (error) {
    console.error("Erreur d'appel API pour l'inscription:", error);
    return { success: false, message: "Erreur réseau. Veuillez réessayer." };
  }
};

//Fonction pour la connexion ---
export const loginUser = async (formData) => {
  try {
    const res = await fetch(`${SERVER_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    // On retourne la réponse de l'API (avec le token ou le message d'erreur)
    // On ajoute un flag `success` pour faciliter le traitement dans le composant
    if (res.ok) {
      return { success: true, token: data.token };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error("Erreur d'appel API pour la connexion:", error);
    return { success: false, message: "Erreur réseau. Veuillez réessayer." };
  }
};

//Fonction pour la creation
export const createHero = async (formData) => {
  const response = await fetch(`${SERVER_URL}/api/create-heroes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response.json();
};
