import React from "react";
import Background from "../../../assets/images/pg2BG.png";

const About = () => {

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${Background})`, height: '100vh', width: '100vw' }}
    >
      <div className="h-full flex justify-center items-center text-white">
        <h1 className="text-4xl font-bold">About</h1>
      </div>
    </div>
  );
};
export default About;
