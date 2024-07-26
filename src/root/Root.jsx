import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-dom/client";
import Home from "../pages/Home/index";
import Fichelogement from "../pages/Fiche-logement/index";
import Apropos from "../pages/A-propos/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Error from "../components/Error/index";

function Rooter() {
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Fiche-Logement/:id" element={<Fichelogement />} />
      <Route path="/A-propos" element={<Apropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>;
}
export default Rooter;
