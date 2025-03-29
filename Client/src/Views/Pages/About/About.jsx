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
      <div className="absolute bottom-1/8 left-1/2 transform -translate-x-1/8 text-left flex flex-col p-6">
        <h1 className="!text-cyan-300 !text-5xl !font-bold !font-proxima-nova">
          Introduction
        </h1>
        <p className="text-white text-3xl w-full h-1/4 mt-4 font-proxima-nova">
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
