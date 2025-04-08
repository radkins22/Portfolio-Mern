import React from "react";
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

const Skills = () => {
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

  const numberOfImages = icons.length;
  const radiusX = 320; // Slightly reduced width
  const radiusY = 240; // Slightly reduced height
  const angle = (2 * Math.PI) / numberOfImages;

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden flex justify-center items-start pt-10"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Elliptical Circle container */}
      <div className="relative w-[650px] h-[430px] sm:w-[730px] sm:h-[550px] flex justify-center items-center mt-[-20px]">
        {icons.map((icon, index) => {
          const rotationAngle = angle * index;
          const xPosition = radiusX * Math.cos(rotationAngle);
          const yPosition = radiusY * Math.sin(rotationAngle);
          const isReact = icon.alt === "React";

          return (
            <div
              key={index}
              className="absolute group pb-2"
              style={{
                left: `calc(50% + ${xPosition}px)`,
                top: `calc(50% + ${yPosition}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className={`w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain cursor-pointer transition-transform duration-300 hover:scale-110`}
                style={{
                  transform: isReact ? "scale(2.3)" : undefined,
                }}
                onMouseEnter={(e) => {
                  if (isReact) e.currentTarget.style.transform = "scale-110";
                }}
                onMouseLeave={(e) => {
                  if (isReact) e.currentTarget.style.transform = "scale(2.2)";
                }}
              />
             <span className="absolute left-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-black text-white text-s px-2 py-1 rounded-md whitespace-nowrap">

                {icon.alt}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
