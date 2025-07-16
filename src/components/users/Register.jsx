import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importez useNavigate pour la navigation
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Calendar,
  UserCheck,
} from "lucide-react"; // Icônes Lucide React
import { registerUser } from "../../services/api"; // Importez votre fonction d'inscription API
import { useLoading } from "../../contexts/LoadingContext"; // Importe le hook de chargement

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(""); // 'success' ou 'error'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({}); // Pour la gestion des erreurs de validation

  const navigate = useNavigate(); // Initialisez le hook de navigation
  const { startLoading, stopLoading } = useLoading(); // Récupère les fonctions de chargement

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Effacer l'erreur pour ce champ quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }

    if (!form.username.trim()) {
      newErrors.username = "Le nom d'utilisateur est requis";
    } else if (form.username.length < 3) {
      newErrors.username =
        "Le nom d'utilisateur doit contenir au moins 3 caractères";
    }

    if (!form.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!form.birthDate) {
      newErrors.birthDate = "La date de naissance est requise";
    } else {
      const birthDate = new Date(form.birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 13) {
        newErrors.birthDate = "Vous devez avoir au moins 13 ans";
      }
    }

    if (!form.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (form.password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Veuillez confirmer votre mot de passe";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setMessageType("");

    if (!validateForm()) {
      setMessage("⚠️ Veuillez corriger les erreurs dans le formulaire.");
      setMessageType("error");
      return;
    }

    startLoading(); // Active le spinner avant l'appel API
    try {
      // Appel à la fonction d'inscription de votre service API
      const data = await registerUser(form);

      if (data.success) {
        setMessage(
          "Inscription réussie ! Vous pouvez maintenant vous connecter."
        );
        setMessageType("success");
        // Redirige vers la page de connexion après un court délai
        setTimeout(() => {
          stopLoading(); // Désactive le spinner avant la redirection
          navigate("/api/login"); // Corrigé: navigation vers /login
        }, 2000);
      } else {
        setMessage(
          data.message || "Une erreur est survenue lors de l'inscription."
        );
        setMessageType("error");
        stopLoading(); // Désactive le spinner en cas d'erreur
      }
    } catch (error) {
      console.error("Erreur d'inscription:", error);
      setMessage("Erreur réseau ou serveur indisponible. Veuillez réessayer.");
      setMessageType("error");
      stopLoading(); // Désactive le spinner en cas d'erreur réseau
    }
  };

  // Fonction pour naviguer vers la page de connexion
  const navigateToLogin = () => {
    startLoading(); // Active le spinner avant de naviguer
    navigate("/api/login"); // Corrigé: navigation vers /login
    // Un petit délai pour s'assurer que le spinner est visible même si la navigation est très rapide
    setTimeout(() => stopLoading(), 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-lg w-full border border-white/20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mb-4">
            <UserCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-emerald-200 drop-shadow-lg">
            Inscription
          </h2>
          <p className="text-emerald-100/70 mt-2">
            Créez votre compte pour commencer
          </p>
        </div>

        {message && (
          <div
            className={`mb-6 py-3 px-4 rounded-xl font-medium ${
              messageType === "success"
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nom et Prénom */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <User className="absolute left-3 top-3.5 h-5 w-5 text-emerald-300/70" />
                <input
                  name="firstName"
                  placeholder="Prénom"
                  value={form.firstName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border ${
                    errors.firstName
                      ? "border-red-500"
                      : "border-emerald-300/50"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-white placeholder-emerald-100/70 font-medium transition-all duration-300`}
                />
              </div>
              {errors.firstName && (
                <p className="text-red-300 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <User className="absolute left-3 top-3.5 h-5 w-5 text-emerald-300/70" />
                <input
                  name="lastName"
                  placeholder="Nom"
                  value={form.lastName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border ${
                    errors.lastName ? "border-red-500" : "border-emerald-300/50"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-white placeholder-emerald-100/70 font-medium transition-all duration-300`}
                />
              </div>
              {errors.lastName && (
                <p className="text-red-300 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          {/* Nom d'utilisateur */}
          <div>
            <div className="relative">
              <UserCheck className="absolute left-3 top-3.5 h-5 w-5 text-emerald-300/70" />
              <input
                name="username"
                placeholder="Nom d'utilisateur"
                value={form.username}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border ${
                  errors.username ? "border-red-500" : "border-emerald-300/50"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-white placeholder-emerald-100/70 font-medium transition-all duration-300`}
              />
            </div>
            {errors.username && (
              <p className="text-red-300 text-sm mt-1">{errors.username}</p>
            )}
          </div>
          {/* Email */}
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-emerald-300/70" />
              <input
                name="email"
                type="email"
                placeholder="Adresse email"
                value={form.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border ${
                  errors.email ? "border-red-500" : "border-emerald-300/50"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-white placeholder-emerald-100/70 font-medium transition-all duration-300`}
              />
            </div>
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          {/* Date de naissance */}
          <div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-emerald-300/70" />
              <input
                name="birthDate"
                type="date"
                placeholder="Date de naissance"
                value={form.birthDate}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border ${
                  errors.birthDate ? "border-red-500" : "border-emerald-300/50"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-white font-medium transition-all duration-300`}
              />
            </div>
            {errors.birthDate && (
              <p className="text-red-300 text-sm mt-1">{errors.birthDate}</p>
            )}
          </div>
          {/* Mot de passe */}
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-emerald-300/70" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                value={form.password}
                onChange={handleChange}
                className={`w-full pl-10 pr-12 py-3 rounded-xl bg-white/20 border ${
                  errors.password ? "border-red-500" : "border-emerald-300/50"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-white placeholder-emerald-100/70 font-medium transition-all duration-300`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-emerald-300/70 hover:text-emerald-300 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          {/* Confirmation mot de passe */}
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-emerald-300/70" />
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmer le mot de passe"
                value={form.confirmPassword}
                onChange={handleChange}
                className={`w-full pl-10 pr-12 py-3 rounded-xl bg-white/20 border ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-emerald-300/50"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-white placeholder-emerald-100/70 font-medium transition-all duration-300`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3.5 text-emerald-300/70 hover:text-emerald-300 transition-colors"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-300 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type="submit" // Important: le type submit déclenche le onSubmit du form
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            S'inscrire
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-emerald-100/80 text-sm">
            Déjà un compte ?{" "}
            <button
              onClick={navigateToLogin}
              className="text-blue-300 hover:text-blue-200 font-semibold hover:underline transition-colors"
            >
              Connectez-vous ici
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
