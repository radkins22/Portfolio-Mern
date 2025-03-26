import { useState } from "react";
import Nav from "./Views/Components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Pages/Home/Home";
import About from "./Views/Pages/About/About";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
