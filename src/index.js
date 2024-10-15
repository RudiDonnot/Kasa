import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Fichelogement from "./pages/Fiche-logement";
import Apropos from "./pages/A-propos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/home/Fiche-Logement/:id" element={<Fichelogement />} />
        <Route path="/A-propos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
