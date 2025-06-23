import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/pricingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricingPage" element={<PricingPage />} />
      </Routes>
    </Router>
  );
}
