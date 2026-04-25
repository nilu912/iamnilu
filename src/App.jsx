import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Work />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;