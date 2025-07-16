import { useState } from "react";
import useCreateHero from "../../hooks/useCreateHero";

function Create() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    date: "",
    categorie: "DC",
    description: {
      creation: "",
      identite: "",
      pouvoirs: "",
      signature: "",
      histoire: "",
    },
  });

  const { isLoading, message, messageType, submitHero } = useCreateHero();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("description.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        description: {
          ...prev.description,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    // Effacer l'erreur pour ce champ quand l'utilisateur commence à taper
    if (errors[name] || errors[name.split(".")[1]]) {
      // Gère aussi les erreurs de description
      const newErrors = { ...errors };
      delete newErrors[name];
      delete newErrors[name.split(".")[1]];
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation des champs principaux
    if (!formData.name.trim()) {
      newErrors.name = "Le nom du héros est obligatoire";
    }
    if (!formData.image.trim()) {
      newErrors.image = "L'image du héros est obligatoire";
    }
    if (!formData.date.trim()) {
      newErrors.date = "L'année de création est obligatoire";
    }

    // Validation des descriptions
    if (!formData.description.creation.trim()) {
      newErrors.creation = "La description de création est obligatoire";
    }
    if (!formData.description.identite.trim()) {
      newErrors.identite = "L'identité est obligatoire";
    }
    if (!formData.description.pouvoirs.trim()) {
      newErrors.pouvoirs = "Les pouvoirs sont obligatoires";
    }
    if (!formData.description.signature.trim()) {
      newErrors.signature = "La phrase signature est obligatoire";
    }
    if (!formData.description.histoire.trim()) {
      newErrors.histoire = "L'histoire complète est obligatoire";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setMessage("⚠️ Veuillez remplir tous les champs obligatoires.");
      setMessageType("error");
      setTimeout(() => setMessage(null), 5000);
      return;
    }

    const isSuccess = await submitHero(formData);

    if (isSuccess) {
      setFormData({
        name: "",
        image: "",
        date: "",
        categorie: "DC",
        description: {
          creation: "",
          identite: "",
          pouvoirs: "",
          signature: "",
          histoire: "",
        },
      });
    }
  };

  const inputClasses =
    "w-full rounded-xl px-5 py-4 border-2 border-amber-300/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-amber-100/70 text-white font-medium shadow-lg hover:shadow-xl";

  const getInputClassesWithError = (fieldName) => {
    // Gère les erreurs pour les champs directs et les champs de description
    const errorKey = fieldName.includes("description.")
      ? fieldName.split(".")[1]
      : fieldName;
    const baseClasses = inputClasses;
    const errorClasses = errors[errorKey]
      ? " border-red-500 bg-red-500/10"
      : "";
    return baseClasses + errorClasses;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Fond animé avec formes géométriques */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1000ms" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2000ms" }}
        ></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Loading Landing (déjà présent) */}
        {isLoading && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="text-center">
              <div className="relative">
                <div className="w-32 h-32 border-8 border-amber-300/30 border-t-amber-400 rounded-full animate-spin mx-auto mb-8"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl animate-pulse">🦸‍♂️</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-amber-200 mb-4">
                Création en cours...
              </h2>
              <p className="text-amber-100/70 text-lg">
                Votre héros prend vie dans l'univers !
              </p>
              <div className="mt-6 flex justify-center space-x-2">
                <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
                <div
                  className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        {/* En-tête avec animation */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-yellow-400 via-red-500 to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
            🦸‍♂️ HERO CREATOR
          </h1>
          <p className="text-xl text-amber-100/90 max-w-3xl mx-auto leading-relaxed font-light">
            Donnez vie à vos super-héros légendaires et créez des personnages
            extraordinaires qui marqueront l'histoire.
          </p>
        </div>

        {/* Message d'alerte avec animation */}
        {message && (
          <div
            className={`max-w-4xl mx-auto mb-8 px-8 py-4 rounded-2xl font-bold shadow-2xl text-center text-lg transform transition-all duration-500 ${
              messageType === "success"
                ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white animate-bounce"
                : "bg-gradient-to-r from-red-500 to-pink-600 text-white"
            }`}
          >
            {message}
          </div>
        )}

        {/* Formulaire principal */}
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-10 space-y-8 border border-white/20 shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
          <form onSubmit={handleSubmit}>
            {/* Section informations générales */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-amber-200 font-semibold mb-3 text-lg">
                    🎭 Nom du héros
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ex: Captain Marvel"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={getInputClassesWithError("name")}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2">
                      ⚠️ {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-amber-200 font-semibold mb-3 text-lg">
                    🖼️ Image du héros
                  </label>
                  <input
                    type="url"
                    name="image"
                    placeholder="https://example.com/hero-image.jpg"
                    value={formData.image}
                    onChange={handleChange}
                    className={getInputClassesWithError("image")}
                  />
                  {errors.image && (
                    <p className="text-red-400 text-sm mt-2">
                      ⚠️ {errors.image}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-amber-200 font-semibold mb-3 text-lg">
                    📅 Année de création
                  </label>
                  <input
                    type="number"
                    name="date"
                    placeholder="1938"
                    value={formData.date}
                    onChange={handleChange}
                    min="1900"
                    max="2025"
                    className={getInputClassesWithError("date")}
                  />
                  {errors.date && (
                    <p className="text-red-400 text-sm mt-2">
                      ⚠️ {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-amber-200 font-semibold mb-3 text-lg">
                    🏢 Univers
                  </label>
                  <select
                    name="categorie"
                    value={formData.categorie}
                    onChange={handleChange}
                    className={`${inputClasses} cursor-pointer`}
                  >
                    <option value="DC" className="bg-gray-800 text-white">
                      DC Comics
                    </option>
                    <option value="Marvel" className="bg-gray-800 text-white">
                      Marvel
                    </option>
                    <option value="Autre" className="bg-gray-800 text-white">
                      Autre univers
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section description détaillée */}
            <div className="space-y-6 pt-8 border-t border-white/20">
              <h3 className="text-2xl font-bold text-center text-amber-200 mb-8">
                📝 Description détaillée
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-amber-200 font-semibold mb-3">
                    🎨 Création & Origine
                  </label>
                  <textarea
                    name="description.creation"
                    placeholder="Décrivez les circonstances de création du héros..."
                    value={formData.description.creation}
                    onChange={handleChange}
                    rows={3}
                    className={`${getInputClassesWithError(
                      "creation"
                    )} resize-none`}
                  />
                  {errors.creation && (
                    <p className="text-red-400 text-sm mt-2">
                      ⚠️ {errors.creation}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-amber-200 font-semibold mb-3">
                    🎭 Identité secrète
                  </label>
                  <textarea
                    name="description.identite"
                    placeholder="Qui se cache derrière le masque ?"
                    value={formData.description.identite}
                    onChange={handleChange}
                    rows={3}
                    className={`${getInputClassesWithError(
                      "identite"
                    )} resize-none`}
                  />
                  {errors.identite && (
                    <p className="text-red-400 text-sm mt-2">
                      ⚠️ {errors.identite}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-amber-200 font-semibold mb-3">
                    ⚡ Super-pouvoirs
                  </label>
                  <textarea
                    name="description.pouvoirs"
                    placeholder="Quels sont ses pouvoirs extraordinaires ?"
                    value={formData.description.pouvoirs}
                    onChange={handleChange}
                    rows={3}
                    className={`${getInputClassesWithError(
                      "pouvoirs"
                    )} resize-none`}
                  />
                  {errors.pouvoirs && (
                    <p className="text-red-400 text-sm mt-2">
                      ⚠️ {errors.pouvoirs}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-amber-200 font-semibold mb-3">
                    💬 Phrase signature
                  </label>
                  <textarea
                    name="description.signature"
                    placeholder="Sa phrase culte..."
                    value={formData.description.signature}
                    onChange={handleChange}
                    rows={3}
                    className={`${getInputClassesWithError(
                      "signature"
                    )} resize-none`}
                  />
                  {errors.signature && (
                    <p className="text-red-400 text-sm mt-2">
                      ⚠️ {errors.signature}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-amber-200 font-semibold mb-3">
                  📖 Histoire complète
                </label>
                <textarea
                  name="description.histoire"
                  placeholder="Racontez l'histoire complète de votre héros..."
                  value={formData.description.histoire}
                  onChange={handleChange}
                  rows={5}
                  className={`${getInputClassesWithError(
                    "histoire"
                  )} resize-none`}
                />
                {errors.histoire && (
                  <p className="text-red-400 text-sm mt-2">
                    ⚠️ {errors.histoire}
                  </p>
                )}
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="text-center pt-8">
              <button
                type="submit"
                disabled={isLoading}
                className={`relative px-12 py-4 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isLoading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white hover:shadow-emerald-500/50"
                }`}
              >
                {isLoading ? (
                  <>🚀 Création en cours...</>
                ) : (
                  <>🚀 Créer le Héros</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Éléments décoratifs animés */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-5 h-5 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
    </div>
  );
}

export default Create;
