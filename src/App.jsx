import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import Home from "./pages/Home";
import Galerie from "./pages/Galerie";
import Create from "./pages/Create";

function App() {
  return (
    <div className="bg-primary">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
