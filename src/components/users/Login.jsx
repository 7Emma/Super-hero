import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { loginUser } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/LoadingContext"; // Importe le hook de chargement

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const { startLoading, stopLoading } = useLoading(); // Récupère les fonctions de chargement
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setMessageType("");

    if (!form.username.trim() || !form.password.trim()) {
      setMessage(
        "Veuillez entrer votre nom d'utilisateur et votre mot de passe."
      );
      setMessageType("error");
      return;
    }

    startLoading(); // Active le spinner avant l'appel API
    try {
      const response = await loginUser(form);

      if (response.success) {
        login(response.token);
        setMessage("Connexion réussie ! Redirection vers le site...");
        setMessageType("success");
        // Désactive le spinner avant la redirection après un court délai pour que le message soit visible
        setTimeout(() => {
          stopLoading();
          navigate("/");
        }, 1500);
      } else {
        setMessage(
          response.message ||
            "Erreur de connexion. Veuillez vérifier vos identifiants."
        );
        setMessageType("error");
        stopLoading(); // Désactive le spinner en cas d'erreur
        // Si le message indique que l'utilisateur n'est pas inscrit, redirige vers l'inscription
        if (
          response.message &&
          (response.message.includes("utilisateur non trouvé") ||
            response.message.includes("identifiants incorrects"))
        ) {
          setTimeout(() => {
            navigate("/api/register");
          }, 2000); // Laisse le temps à l'utilisateur de lire le message
        }
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      setMessage("Erreur réseau ou serveur indisponible. Veuillez réessayer.");
      setMessageType("error");
      stopLoading(); // Désactive le spinner en cas d'erreur réseau
    }
  };

  const navigateToRegister = () => {
    startLoading(); // Active le spinner avant de naviguer vers l'inscription
    navigate("/api/register");
    // Un petit délai pour s'assurer que le spinner est visible même si la navigation est très rapide
    setTimeout(() => stopLoading(), 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl text-center max-w-md w-full border border-white/20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mb-4">
            <Mail className="w-8 h-8 text-white" />{" "}
            {/* Icône pour la connexion */}
          </div>
          <h2 className="text-4xl font-bold text-emerald-200 drop-shadow-lg">
            Connexion
          </h2>
          <p className="text-emerald-100/70 mt-2">
            Connectez-vous à votre compte
          </p>
        </div>

        {message && (
          <p
            className={`mb-6 py-3 px-4 rounded-xl font-medium ${
              messageType === "success"
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-emerald-300/70" />
              <input
                name="username" // Ou 'email' si votre backend attend l'email ici
                placeholder="Nom d'utilisateur ou Email"
                value={form.username}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border border-emerald-300/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-white placeholder-emerald-100/70 font-medium transition-all duration-300"
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-emerald-300/70" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/20 border border-emerald-300/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-white placeholder-emerald-100/70 font-medium transition-all duration-300"
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
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Se connecter
          </button>
        </form>
        <p className="mt-8 text-emerald-100/80 text-sm">
          Pas encore de compte ?{" "}
          <button
            onClick={navigateToRegister}
            className="text-blue-300 hover:text-blue-200 font-semibold hover:underline transition-colors"
          >
            S'inscrire ici
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
