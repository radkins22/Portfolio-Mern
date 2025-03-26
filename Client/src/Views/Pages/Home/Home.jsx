import React from "react";
import Background from "../../../assets/images/pg1BG.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Selfie from "../../../assets/images/selfie.png";

const Home = () => {
  const glitchStyle = {
    position: "relative",
    color: "white",
    textShadow:
      "2px 2px 0px rgba(255, 0, 0, 0.7), -2px -2px 0px rgba(0, 255, 255, 0.7), 2px -2px 0px rgba(0, 255, 0, 0.7), -2px 2px 0px rgba(255, 255, 0, 0.7)",
    animation: "glitch-animation 1s infinite linear alternate-reverse",
    fontSize: "6rem",
  };

  const hollowEffectStyle = {
    position: "relative",
    color: "transparent",
    WebkitBackgroundClip: "text",
    backgroundImage:
      "linear-gradient(to left, rgb(2, 252, 243), rgb(23, 178, 178))",
    fontWeight: 800,
    fontSize: "3.125rem",
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <img
        src={Selfie}
        alt="Rachael Higgins"
        className="rounded-full h-40 w-40 shadow-lg absolute top-25 left-15"
      />
      <div className="h-full flex justify-center items-center text-white relative">
        <div
          className="absolute text-left"
          style={{
            left: "14%", // This is where the text starts (positioned exactly as your original code)
            top: "35%", // Moved 10% down from the original 25%
          }}
        >
          <h1 style={glitchStyle} className="font-bold">
            Rachael Higgins
          </h1>
          <h2
            style={hollowEffectStyle}
            className="font-proxima-nova text-cyan-100"
          >
            Software Developer
          </h2>
          <div className="flex space-x-6 mt-2">
            <a
              href="https://www.linkedin.com/in/rachael-higgins"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <FaLinkedin className="text-blue-400" size={30} />
            </a>
            <a
              href="https://github.com/radkins22"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <FaGithub className="text-purple-400" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
