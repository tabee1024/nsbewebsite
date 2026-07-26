import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Vision from "./Pages/Vision";
import Sponsorship from "./Pages/Sponsorship";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
      </Routes>
    </Router>
  );
}

export default App;