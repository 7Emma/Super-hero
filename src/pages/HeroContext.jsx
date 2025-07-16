import { createContext, useContext, useState, useEffect } from "react";

const HeroContext = createContext();

export const useHero = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("useHero must be used within a HeroProvider");
  }
  return context;
};

export const HeroProvider = ({ children, defaultHeroes = [] }) => {
  const [heroes, setHeroes] = useState(defaultHeroes);

  // Charger les héros personnalisés depuis sessionStorage au démarrage
  useEffect(() => {
    const savedCustomHeroes = JSON.parse(
      sessionStorage.getItem("customHeroes") || "[]"
    );
    if (savedCustomHeroes.length > 0) {
      // Combiner les héros par défaut avec les héros personnalisés
      const allHeroes = [...defaultHeroes, ...savedCustomHeroes];
      setHeroes(allHeroes);
    }
  }, [defaultHeroes]);

  const addHero = (newHero) => {
    // Générer un ID unique
    const id = Math.max(0, ...heroes.map((h) => h.id || 0)) + 1;
    const heroWithId = { ...newHero, id };

    // Mettre à jour l'état
    const updatedHeroes = [...heroes, heroWithId];
    setHeroes(updatedHeroes);

    // Sauvegarder uniquement les héros personnalisés
    const customHeroes = updatedHeroes.filter(
      (hero) => !defaultHeroes.find((dh) => dh.id === hero.id)
    );
    sessionStorage.setItem("customHeroes", JSON.stringify(customHeroes));

    return heroWithId;
  };

  const removeHero = (heroId) => {
    const updatedHeroes = heroes.filter((hero) => hero.id !== heroId);
    setHeroes(updatedHeroes);

    // Mettre à jour le stockage
    const customHeroes = updatedHeroes.filter(
      (hero) => !defaultHeroes.find((dh) => dh.id === hero.id)
    );
    sessionStorage.setItem("customHeroes", JSON.stringify(customHeroes));
  };

  const value = {
    heroes,
    addHero,
    removeHero,
    setHeroes,
  };

  return <HeroContext.Provider value={value}>{children}</HeroContext.Provider>;
};
