import React from "react";
import Background from "../../../assets/images/pg2BG.png";
import Header from "../../Components/Header";

const About = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] max-w-5xl ml-auto text-left">
        <Header text="Introduction"/>
       
        <p className="text-white mt-4 font-proxima-nova text-[0.875em] sm:text-[1em] md:text-[1em] lg:text-[1.25em] xl:text-[1.75em]">
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
