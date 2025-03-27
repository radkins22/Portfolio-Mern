import { useState } from "react";
import Nav from "./Views/Components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Pages/Home/Home";
import About from "./Views/Pages/About/About";
import Experience from "./Views/Pages/Experience/Experience";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./Views/Pages/Skills/Skill";
// import Projects from "./Views/Pages/Projects/Projects";
// import Contact from "./Views/Pages/Contact/Contact";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
