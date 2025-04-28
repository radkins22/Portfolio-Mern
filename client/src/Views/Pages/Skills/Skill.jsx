import React, { useState } from "react";
import Background from "../../../assets/images/pg4BG.png";
import ReactAnimation from "../../../assets/animation/reactAnimate.gif";
import JsAnimation from "../../../assets/animation/jsAnimate.gif";
import GitAnimation from "../../../assets/animation/gitAnimate.gif";
import MongoAnimate from "../../../assets/animation/mongoAnimate.gif";
import GcpAnimate from "../../../assets/animation/gcpAnimate.gif";
import NodeAnimate from "../../../assets/animation/nodeAnimate.gif";
import ExpressAnimate from "../../../assets/animation/expressAnimate.gif";
import HtmlAnimate from "../../../assets/animation/htmlAnimate.gif";
import TailwindAnimate from "../../../assets/animation/tailwindAnimate.gif";
import SkillsBgVideo from "../../Components/SkillsBgVideo.jsx"; // Import the background video component

const Skills = () => {
  // State to track which icon was clicked
  const [clickedIcon, setClickedIcon] = useState(null);

  const icons = [
    { src: ReactAnimation, alt: "React" },
    { src: JsAnimation, alt: "JavaScript" },
    { src: GitAnimation, alt: "Git" },
    { src: MongoAnimate, alt: "MongoDB" },
    { src: GcpAnimate, alt: "GCP" },
    { src: NodeAnimate, alt: "Node.js" },
    { src: HtmlAnimate, alt: "HTML" },
    { src: ExpressAnimate, alt: "Express" },
    { src: TailwindAnimate, alt: "Tailwind" },
  ];

  // Handle icon click to toggle text visibility
  const handleIconClick = (alt) => {
    setClickedIcon(clickedIcon === alt ? null : alt); // Toggle visibility
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* Background Video */}
      <SkillsBgVideo />
      <div className="relative w-full">
        {/* Title */}
        <div className="flex justify-center mb-4 sm:mb-8 mt-4">
          <h1 className="!text-cyan-300 !font-bold !font-proxima-nova text-[2em] sm:text-[2.5em] md:text-[3em] lg:text-[3.5em] xl:text-[4em]">
            Skills
          </h1>
        </div>

        {/* Icons Grid */}
        <div className="flex justify-center items-center pt-4 sm:pt-10">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-12">
    {icons.map((icon, index) => (
      <div key={index} className="flex justify-center items-center relative">
        {/* Icon */}
        <img
          src={icon.src}
          alt={icon.alt}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 transition-all duration-300 cursor-pointer"
          onClick={() => handleIconClick(icon.alt)}
        />

        {/* Text Visibility */}
        {clickedIcon === icon.alt && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-white text-lg opacity-100 bg-black px-4 py-2 rounded transition-all duration-300">
            {icon.alt}
          </div>
        )}
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Skills;
