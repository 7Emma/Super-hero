import HeroSection from "./HeroSection";

function Home() {
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
          Découvrez ici vos héros préférés, leur histoire, leurs pouvoirs et bien plus encore.
        </p>
      </div>

      {/* Section des héros */}
      <div className="mt-16">
        <HeroSection />
      </div>
    </div>
  );
}

export default Home;