import { useState } from "react";
import { registerUser } from "../../api";

function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    // On utilise notre nouvelle fonction !
    const data = await registerUser(form);

    // On met à jour le message en fonction de la réponse de l'API
    if (data.success) {
      setMessage("Inscription réussie !");
    } else {
      setMessage(data.message || "Une erreur est survenue.");
    }
  };
  
  return (
    <div>
      <h2>Inscription</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Nom d'utilisateur"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Register;
