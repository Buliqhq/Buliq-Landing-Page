import React from "react";
import Contact from "./components/Contact";
import Feature from "./components/Feature";

import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import ValueSection from "./components/ValueSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ValueSection />
        <Contact />

        <Feature />
      </main>
      <Footer />
    </div>
  );
}

export default App;

