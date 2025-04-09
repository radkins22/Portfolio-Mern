import Background from "../../../assets/images/pg5BG.png";
import ComingSoon from "../../../assets/images/comingSoon.png";
import LibraryPic from "../../../assets/images/libraryPic.png";
import CapstonePic from "../../../assets/images/capstonePic.png";
import ApChromeExt from "../../../assets/images/ap-chromeExtension.png";
import Portfolio from "../../../assets/images/portfolio.png";
import ApLanding from "../../../assets/images/ap-landing.png";

const Projects = () => {
  const images = [
    { src: CapstonePic, link: "https://github.com/radkins22/capture-it-photography" },
    { src: LibraryPic, link: "https://github.com/radkins22/full-mern" },
    { src: ApChromeExt, link: "https://github.com/radkins22" },
    { src: Portfolio, link: "https://github.com/radkins22/Portfolio-Mern" },
    { src: ApLanding, link: "https://github.com/radkins22" },
    { src: ComingSoon, link: "https://github.com/radkins22" },
  ];

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1 className="w-1/2 text-left !text-6xl font-bold !text-cyan-300 absolute left-0 md:top-[8rem] pl-10">
        Projects
      </h1>
      <div className="w-1/2 h-screen absolute right-0 flex items-start justify-center pt-16">
        <div className="grid grid-cols-2 grid-rows-3 gap-4 w-[100%] h-[70vh]">
          {images.map((image, index) => (
            <a
              key={index}
              className="border-[3px] border-cyan-300 rounded-lg bg-transparent shadow-lg hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-all duration-300"
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.src}
                alt={`Grid Item ${index + 1}`}
                className="mx-auto w-90 h-35 object-cover rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
