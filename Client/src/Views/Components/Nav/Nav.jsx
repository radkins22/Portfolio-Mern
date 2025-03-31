import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/logo/logo.png";

const Nav = () => {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-md border-b-2 border-cyan-500 relative z-50">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => nav("/")}> 
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <span className="text-xl font-semibold">Rachael Higgins</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
          <div
            key={item}
            onClick={() => nav(`/${item.toLowerCase()}`)}
            className="cursor-pointer text-cyan-300 hover:text-cyan-400 transition"
          >
            {item}
          </div>
        ))}
      </div>
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 border-t border-cyan-500 md:hidden transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"} z-50`}>        
        {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
          <div
            key={item}
            onClick={() => { nav(`/${item.toLowerCase()}`); setIsOpen(false); }}
            className="cursor-pointer !text-cyan-300 hover:text-cyan-400 transition"
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
