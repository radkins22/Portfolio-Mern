import React from "react";
import Background from "../../../assets/images/pg2BG.png";

const About = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="absolute top-1/8 left-1/2 transform -translate-x-[15%] text-left flex flex-col p-6">
        <h1 className="!text-cyan-300 !font-bold !font-proxima-nova text-[1.5em] sm:text-[2em] md:text-[2.5em] lg:text-[3em] xl:text-[3.5em]">
          Introduction
        </h1>
        <p className="text-white w-full h-1/4 mt-4 font-proxima-nova text-[0.875em] sm:text-[1em] md:text-[1em] lg:text-[1.25em] xl:text-[1.75em]">
          From adversity to full-stack innovation, I've turned setbacks into
          source code. With a strong STEM foundation and relentless drive, I
          build real-world solutions— from scalable backends to responsive
          frontends. I write clean, efficient code with purpose, using every
          challenge as fuel to grow, solve, and ship. I'm not here just to build
          apps—I'm here to break barriers, inspire through action, and prove
          that where you start doesn't define how far you can go.
        </p>
      </div>
    </div>
  );
};

export default About;
