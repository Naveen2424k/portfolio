import React, { useState } from "react";
import Nav from "./components/Nav";
import Bodymain from "./components/Bodymain";
import Here from "./components/Here";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Project from "./components/Project";
import Card from "./components/Card";
import Contact  from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [isDark, setIsDark] = useState(true);

  // function to toggle theme
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Static/legacy layout was here — navigation and route-driven views are used instead. */}
      <Router>
        <Nav isDark={isDark} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Bodymain isDark={isDark} />} />
          <Route path="/education" element={<Education isDark={isDark} toggleTheme={toggleTheme} />} />
          <Route path="/projects" element={<Project isDark={isDark} toggleTheme={toggleTheme} />} />
          <Route path="/contact" element={<Contact isDark={isDark} toggleTheme={toggleTheme} />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
