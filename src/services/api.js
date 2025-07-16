// On récupère l'URL de notre variable d'environnement
const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";

// Fonction pour l'inscription de l'utilisateur
export const registerUser = async (formData) => {
  try {
    // Ajout du préfixe /api
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

// Fonction pour la connexion
export const loginUser = async (formData) => {
  try {
    // Ajout du préfixe /api
    const res = await fetch(`${SERVER_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

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

// Fonction pour la création de héros
export const createHero = async (formData) => {
  try {
    const response = await fetch(`${SERVER_URL}/api/create-heroes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: "Héros créé avec succès !", data };
    } else {
      return {
        success: false,
        message: data.message || "Erreur lors de la création du héros.",
      };
    }
  } catch (error) {
    console.error("Erreur d'appel API pour la création de héros:", error);
    return {
      success: false,
      message: "Erreur réseau ou serveur indisponible.",
    };
  }
};

// Fonction pour récupérer le profil utilisateur
export const fetchUserProfile = async (token) => {
  try {
    // Ajout du préfixe /api
    const res = await fetch(`${SERVER_URL}/api/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (res.ok) {
      return { success: true, profile: data };
    } else {
      if (res.status === 401 || res.status === 403) {
        return {
          success: false,
          message: "Authentification requise ou session expirée.",
        };
      }
      return {
        success: false,
        message: data.message || "Erreur lors de la récupération du profil.",
      };
    }
  } catch (error) {
    console.error("Erreur d'appel API pour le profil utilisateur:", error);
    return {
      success: false,
      message: "Erreur réseau ou serveur indisponible.",
    };
  }
};

// Fonction pour récupérer la liste des héros
export const getHeroes = async () => {
  try {
    // Ajout du préfixe /api
    const res = await fetch(`${SERVER_URL}/api/heroes`);
    const data = await res.json();

    if (res.ok) {
      return { success: true, heroes: data };
    } else {
      return {
        success: false,
        message: data.message || "Erreur lors de la récupération des héros.",
      };
    }
  } catch (error) {
    console.error("Erreur d'appel API pour la liste des héros:", error);
    return {
      success: false,
      message: "Erreur réseau ou serveur indisponible.",
    };
  }
};
