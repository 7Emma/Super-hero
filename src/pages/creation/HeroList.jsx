// src/components/HeroList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/heroes")
      .then((res) => {
        setHeroes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des héros :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des héros...</p>;

  return (
    <div>
      <h2>Liste des Héros</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {heroes.map((hero) => (
          <div key={hero._id} style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
            <h3>{hero.name}</h3>
            <img src={hero.image} alt={hero.name} style={{ width: "100%" }} />
            <p><strong>Catégorie :</strong> {hero.categorie}</p>
            <p><strong>Date :</strong> {hero.date}</p>
            <p><strong>Création :</strong> {hero.description.creation}</p>
            <p><strong>Identité :</strong> {hero.description.identite}</p>
            <p><strong>Pouvoirs :</strong> {hero.description.pouvoirs}</p>
            <p><strong>Signature :</strong> {hero.description.signature}</p>
            <p><strong>Histoire :</strong> {hero.description.histoire}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroList;
