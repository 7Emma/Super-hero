import HeroSection from "./heroPart/HeroSection";
import initialHerosData from "../data/Hero"; // Importe vos données JSON initiales
import FeaturedHeroSlider from "./heroPart/FeaturedHeroSlider"; // Importe le nouveau composant de carrousel

function Home() {
  // Prend les 3 premiers héros de vos données initiales pour le carrousel
  const heroesForSlider = initialHerosData.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
          L'univers des Super-Héros
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Êtes-vous fan d'animés ou du monde mystérieux?
        </p>
        <p className="text-md md:text-lg text-gray-400">
          Découvrez ici vos héros préférés, leur histoire, leurs pouvoirs et
          bien plus encore.
        </p>
      </div>

      {/* Section des héros avec le nouveau carrousel */}
      <div className="mt-16">
        <HeroSection />
        <FeaturedHeroSlider heroes={heroesForSlider} />
      </div>
    </div>
  );
}

export default Home;
