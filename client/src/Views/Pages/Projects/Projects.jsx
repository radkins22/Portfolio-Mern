import React from "react";
import BackgroundVideo from "../../Components/BackgroundVideo.jsx";
import LibraryPic from "../../../assets/images/libraryPic.png";
import CapstonePic from "../../../assets/images/capstonePic.png";
import ApChromeExt from "../../../assets/images/ap-chromeExtension.png";
import Portfolio from "../../../assets/images/portfolio.png";
import ApLanding from "../../../assets/images/ap-landing.png";
import WpFoodTruck from "../../../assets/images/wpFoodTruck.png";

const Projects = () => {
  const images = [
    {
      src: CapstonePic,
      link: "https://github.com/radkins22/capture-it-photography",
      title: "Capture It: Full-Stack Photography App",
      backText: "Full-stack photography application built with MERN stack.",
    },
    {
      src: LibraryPic,
      link: "https://github.com/radkins22/full-mern",
      title: "Library App: Full-Stack MERN",
      backText: "A full-stack MERN application for managing library books.",
    },
    {
      src: ApChromeExt,
      link: "https://github.com/radkins22",
      title: "Chrome Extension: Google OAuth2",
      backText: "A Chrome extension integrating Google OAuth2 authentication.",
    },
    {
      src: Portfolio,
      link: "https://rachael-higgins.vercel.app",
      title: "My Personal Portfolio (React App)",
      backText: "A personal portfolio built with React showcasing my work.",
    },
    {
      src: ApLanding,
      link: "https://www.assessmentpathways.com",
      title: "Assessment Pathways: Landing & AI Grading",
      backText: "Landing page for AI-powered grading platform.",
    },
    {
      src: WpFoodTruck,
      link: "https://github.com/coder-j25/phillys",
      title: "Food Truck App (React Frontend)",
      backText: "A React-based frontend for a food truck management app.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-16 flex-grow">
        <h1 className="!text-5xl md:text-7xl !font-bold !text-cyan-300 !mb-12 text-center drop-shadow-lg">
          Projects
        </h1>

        <div className="w-full md:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border-[1px] border-black shadow-xl hover:shadow-2xl transition-all duration-500 bg-cyan-600 bg-opacity-20"
            >
          <div className="relative w-full aspect-[16/9] [perspective:1000px]">
  <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    {/* Front */}
    <div className="absolute inset-0 [backface-visibility:hidden]">
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover object-left rounded-2xl"
      />
    </div>
    {/* Back */}
    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex-col justify-center items-center text-center p-4 sm:p-6 bg-black rounded-2xl">
      <p className="text-cyan-300 font-semibold text-base sm:text-xl">
        {image.backText}
      </p>
      <p className="text-white font-semibold text-base sm:text-xl">
        Click Here: {image.link}
      </p>
    </div>
  </div>
</div>


            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
