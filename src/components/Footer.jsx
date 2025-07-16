function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 w-full"></div>
      <div className="h-2 bg-white shadow-md w-full"></div>

      <footer className="bg-red-600 text-white py-4 text-center w-4xl">
        <div className="container mx-auto px-4">
          <p className="text-lg font-semibold">
            &copy; {year}{" "}
            <span className="text-yellow-300">
              {" "}
              <a href="http://emmanuelagb.netlify.app/">ManuTech</a>{" "}
            </span>
          </p>
          <p className="text-sm">Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
