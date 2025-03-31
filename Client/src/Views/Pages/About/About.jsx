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
          From adversity to innovation, I am proof that determination and
          intelligence can break any barrier. With a strong foundation in STEM
          and a relentless work ethic, I have transformed challenges into
          opportunities, using my expertise to drive meaningful change. I
          connect with others through authenticity and relatability,
          demonstrating that no obstacle is insurmountable. My mission is to
          inspire, build, and lead - proving that success is not defined by the
          past, but by the vision and dedication to shape the future.
        </p>
      </div>
    </div>
  );
};

export default About;
