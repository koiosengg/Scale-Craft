import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FoodAndBeverage from "./components/FoodAndBeverage";
import ScrollToTop from "./components/ScrollToTop";
import Connect from "./components/Home/Connect";
import PrivacyPolicy from "./components/PrivacyPolicy";

function AppContent() {
  const location = useLocation();
  const isPrivacyPage = location.pathname === "/privacy-policy";

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="F&B" element={<FoodAndBeverage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      {!isPrivacyPage && <Connect />}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
