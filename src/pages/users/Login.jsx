import { useState } from 'react';
import { loginUser } from '../../api'; // On importe la nouvelle fonction

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState(null);
  const [token, setToken] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage(null);

    // On utilise la fonction centralisée de notre service API
    const response = await loginUser(form);

    if (response.success) {
      // Si la connexion a réussi, on stocke le token et le message
      setToken(response.token);
      setMessage('Connexion réussie !');
    } else {
      // Sinon, on affiche le message d'erreur
      setMessage(response.message);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      {message && <p>{message}</p>}
      {!token ? (
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
          <button type="submit">Se connecter</button>
        </form>
      ) : (
        <div>
          <p>Token JWT : {token}</p>
          {/* Ici tu peux stocker le token dans localStorage ou contexte */}
        </div>
      )}
    </div>
  );
}

export default Login;