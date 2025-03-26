import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";

const Nav = () => {
  const nav = useNavigate();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-md">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => nav("/")}>
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <span className="text-xl font-semibold">Rachael Higgins</span>
      </div>
      <div className="flex space-x-6">
        <div
          onClick={() => nav("/about")}
          className="cursor-pointer text-cyan-300 hover:text-cyan-400 transition"
        >
          About
        </div>
        <div
          onClick={() => nav("/projects")}
          className="cursor-pointer text-cyan-300 hover:text-cyan-400 transition"
        >
          Projects
        </div>
        <div
          onClick={() => nav("/contact")}
          className="cursor-pointer text-cyan-300 hover:text-cyan-400 transition"
        >
          Contact
        </div>
      </div>
    </nav>
  );
};

export default Nav;
