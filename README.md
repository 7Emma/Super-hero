# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🦸‍♂️ Galerie des Super-Héros

Bienvenue dans **ManuTech SuperHero Gallery**, une application React qui présente des super-héros avec leurs identités, pouvoirs, histoires et visuels dans une interface animée et responsive.

---

## 🚀 Fonctionnalités

- 🎨 Affichage dynamique des cartes de super-héros
- 📖 Description détaillée avec section extensible ("Voir plus")
- 🌈 UI moderne avec **Tailwind CSS**
- 📱 Responsive sur mobile, tablette et desktop
- 📊 Statistiques visuelles (nombre de héros, pouvoirs, etc.)
- ⚡ Animations fluides au survol et à l’expansion

---

## 🧩 Structure du projet

```
src/
├── components/
│
│   └── HeroCard.jsx          # Carte individuelle pour chaque héros
│   └── Header.jsx            #Entete
│   └── Footer.jsx
├── pages/
│   └── HeroGallery.jsx       # Affiche toutes les cartes via HeroCard
│   └── Home.jsx
├── data/
│   └── Hero.js               # Données des super-héros (nom, pouvoir, image...)
├── App.jsx                   # Routes et structure principale
├── Home.jsx                  # Page d'accueil avec intro + HeroSection
└── index.css / main.jsx      # Fichiers d’entrée React + Tailwind
```

---

## 🛠️ Installation

1. **Clone le repo :**

```bash
git clone https://github.com/manuphil/manutech-superhero.git
cd manutech-superhero
```

2. **Installe les dépendances :**

```bash
npm install
```

3. **Lance l’application :**

```bash
npm run dev
```

4. **Accède à l’app :**
   [http://localhost:5173](http://localhost:5173)

---

## 📁 Exemple de données (`Hero.js`)

```js
export const hero = [
  {
    id: 1,
    name: "Superman",
    image: "superman.jpg",
    date: "1938",
    description: {
      creation: "Créé en 1938 (Action Comics #1)",
      identite: "Clark Kent / Kal‑El",
      pouvoirs: "Force, vol, rayons X...",
      histoire: "Kal-El est né sur Krypton...",
      signature: "Symbole d'espoir"
    },
    categorie: "DC"
  },
  ...
];
```

---

## 📷 Crédits images

Les images proviennent de **Wikimedia Commons** ou sites libres de droits. Veuillez vérifier les droits si vous les utilisez à des fins commerciales.

---

## 👨‍💻 Auteur

Développé avec ❤️ par **ManuTech**  
📧 Contact : [ton-email@example.com]

---

## 📄 Licence

Ce projet est sous licence MIT — libre de l'utiliser et de le modifier.
