import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CarInsurance from "./pages/CarInsurance";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import About from "./pages/about";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-insurance" element={<CarInsurance />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;