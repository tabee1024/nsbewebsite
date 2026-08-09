import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Vision from "./Pages/Vision";
import Sponsorship from "./Pages/Sponsorship";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;