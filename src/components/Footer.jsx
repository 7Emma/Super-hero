function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-red-600 text-white py-4 text-center mt-10">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold">&copy; {year} <span className="text-yellow-300">ManuTech</span></p>
        <p className="text-sm">Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
