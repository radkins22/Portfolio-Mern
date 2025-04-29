import React, { useState } from "react";
import BackgroundVideo from "../../Components/BackgroundVideo.jsx";
import LibraryPic from "../../../assets/images/libraryPic.png";
import CapstonePic from "../../../assets/images/capstonePic.png";
import ApDemo from "../../../assets/images/apDemo.png";
import Portfolio from "../../../assets/images/portfolio.png";
import ApLanding from "../../../assets/images/ap-landing.png";
import WpFoodTruck from "../../../assets/images/wpFoodTruck.png";
import Header from "../../Components/Header.jsx";

const Projects = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleTouchStart = (e) => {
    const touchStartPos = e.touches[0].clientX;
    setTouchStart(touchStartPos);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const touchMovePos = e.touches[0].clientX;
    setTouchEnd(touchMovePos);
  };

  const handleTouchEnd = (e, index, link) => {
    const swipeDistance = touchStart - touchEnd;

    if (Math.abs(swipeDistance) > 50) {
      toggleFlip(index);
    } else {
      window.location.href = link;
    }

    setTouchStart(0);
    setTouchEnd(0);
    setIsSwiping(false);
  };

  const images = [
    {
      src: ApDemo,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfGQyOCJD204B_GeCdr5peJ84cHLIc_BKH-md4E4sXcz1QQIg/viewform",
      title: "Assessment Pathways AI Demo",
      backText:
        "Developed an interactive demo using OpenAI, Google Forms, and Google Apps Script to showcase automated grading capabilities, demonstrating the integration of AI-driven assessment tools in education.",
    },
    {
      src: WpFoodTruck,
      link: "https://github.com/coder-j25/phillys",
      title: "Willy's Philly's Food Truck Website",
      backText:
        "Collaborated on building a responsive frontend for a local Arizona-based food truck using React and Tailwind CSS, emphasizing mobile-first design and brand consistency.",
    },
    {
      src: ApLanding,
      link: "https://www.assessmentpathways.com",
      title: "Assessment Pathways (Production Site)",
      backText:
        "Created a platform from the ground up to help educators streamline grading workflows by allowing them to upload student assignments and receive AI-assisted grades and feedback, reducing manual evaluation time.",
    },
    {
      src: Portfolio,
      link: "https://rachael-higgins.vercel.app",
      title: "Rachael Higgins Portfolio",
      backText:
        "Designed and developed a personal tech portfolio using React to highlight project experience, frontend proficiency, and visual design skills.",
    },
    {
      src: LibraryPic,
      link: "https://github.com/radkins22/full-mern",
      title: "Personal Library Manager (MERN Stack)",
      backText:
        "Full-stack library management application built with MongoDB, Express, React, and Node.js, allowing users to catalog and track personal reading collections.",
    },
    {
      src: CapstonePic,
      link: "https://github.com/radkins22/capture-it-photography",
      title: "Capture It Photography Website",
      backText:
        "Developed a full-stack photography portfolio site with user-friendly image galleries, leveraging modern web technologies to support client engagement and booking.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      <BackgroundVideo />
      <Header text="Projects" align="center" />
      <div className="relative z-10 flex flex-col items-center px-4 py-4 flex-grow">
        <div className="w-full md:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={(e) => handleTouchEnd(e, index, image.link)}
              className="group relative overflow-hidden rounded-2xl border-[1px] border-black shadow-xl hover:shadow-2xl transition-all duration-500 bg-cyan-600 bg-opacity-20"
            >
              <div className="relative w-full aspect-[16/9] [perspective:1000px]">
                <div
                  className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                    flippedCards[index]
                      ? "[transform:rotateY(180deg)]"
                      : "group-hover:[transform:rotateY(180deg)]"
                  }`}
                >
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover object-left rounded-2xl"
                    />
                  </div>
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center text-justify p-4 sm:p-6 bg-black rounded-2xl">
                    <p className="text-cyan-300 font-semibold text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1rem]">
                      {image.backText}
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
