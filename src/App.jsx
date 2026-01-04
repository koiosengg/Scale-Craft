import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FoodAndBeverage from "./components/FoodAndBeverage";
import ScrollToTop from "./components/ScrollToTop";
import Connect from "./components/Home/Connect";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="F&B" element={<FoodAndBeverage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Connect />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
