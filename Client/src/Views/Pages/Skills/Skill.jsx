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
  const radius = 350; // Adjust the radius for a larger circle
  const angle = (2 * Math.PI) / numberOfImages; // Calculate angle between each image

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        height: "100vh",
        width: "100vw",
      }}
    >
      {" "}
      {/* Adjusted margin-top to bring it closer */}
      {/* Elliptical Circle container */}
      <div className="relative w-full h-screen flex justify-center items-start mt-12">
      <div
        className="absolute w-[600px] h-[400px] rounded-full flex justify-center items-center"
        style={{
          position: "relative",
        }}
      >
        {/* Images arranged in an elliptical circle */}
        {icons.map((icon, index) => {
          const rotationAngle = angle * index; // Calculate the rotation for each image
          const xPosition = radius * Math.cos(rotationAngle); // Calculate the x position (horizontal position)
          const yPosition = (radius / 1.5) * Math.sin(rotationAngle); // Adjust for elliptical effect by stretching the y-axis

          return (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="absolute"
              style={{
                left: `calc(50% + ${xPosition}px)`,
                top: `calc(50% + ${yPosition}px)`,
                width: "100px",
                height: "100px",
              }}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Skills;
