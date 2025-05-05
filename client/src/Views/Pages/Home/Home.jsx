import React from "react";
import Background from "../../../assets/images/pg1BG.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Selfie from "../../../assets/images/selfie2.png";

const Home = () => {
  const glitchStyle = {
    position: "relative",
    color: "white",
    textShadow:
      "2px 2px 0px rgba(255, 0, 0, 0.7), -2px -2px 0px rgba(0, 255, 255, 0.7), 2px -2px 0px rgba(0, 255, 0, 0.7), -2px 2px 0px rgba(255, 255, 0, 0.7)",
    animation: "glitch-animation 1s infinite linear alternate-reverse",
    fontSize: "clamp(2rem, 6vw, 6rem)",
  };

  const hollowEffectStyle = {
    position: "relative",
    color: "transparent",
    WebkitBackgroundClip: "text",
    backgroundImage: "linear-gradient(to left,  #FF5252,  #FF4081,  #4DD0E1",
    fontWeight: 800,
    fontSize: "clamp(1.5rem, 4vw, 3.125rem)",
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden relative"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover", // Ensures image scales
        backgroundPosition: "center",
      }}
    >
      <img
        src={Selfie}
        alt="Rachael Higgins"
        className="rounded-full h-32 w-32 sm:h-40 sm:w-40 shadow-lg absolute top-[3%] left-[3%] sm:top-[12%] sm:left-[12%]"
      />
      <div className="h-full flex justify-center items-center text-white relative">
        <div className="absolute text-left left-4 top-1/4 sm:left-[14%] sm:top-[35%] max-w-[90%]">
          <h1 style={glitchStyle} className="font-bold">
            Rachael Higgins
          </h1>
          <h2
            style={hollowEffectStyle}
            className="font-proxima-nova text-3xl sm:text-7xl font-semibold text-cyan-300"
          >
            Software Developer
          </h2>
          <h5 className="text-white">
            Building robust backend logic to dynamic UI, <br />I turn complex
            requirements into real-world, maintainable code.
          </h5>
          <div className="flex space-x-6 mt-6">
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
