import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
