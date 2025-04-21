import Background from "../../../assets/images/pg5BG.png";
import ComingSoon from "../../../assets/images/comingSoon.png";
import LibraryPic from "../../../assets/images/libraryPic.png";
import CapstonePic from "../../../assets/images/capstonePic.png";
import ApChromeExt from "../../../assets/images/ap-chromeExtension.png";
import Portfolio from "../../../assets/images/portfolio.png";
import ApLanding from "../../../assets/images/ap-landing.png";

const Projects = () => {
  const images = [
    {
      src: CapstonePic,
      link: "https://github.com/radkins22/capture-it-photography",
      title: "A full-stack photography app",
    },
    {
      src: LibraryPic,
      link: "https://github.com/radkins22/full-mern",
      title: "A full-stack library app",
    },
    {
      src: ApChromeExt,
      link: "https://github.com/radkins22",
      title: "A Google Chrome extension with Google OAuth2",
    },
    {
      src: Portfolio,
      link: "https://rachael-higgins.vercel.app",
      title: "My Personal Tech Portfolio, a React frontend app",
    },
    {
      src: ApLanding,
      link: "https://www.assessmentpathways.com",
      title: "A full-stack landing page, AI grading app for teachers",
    },
    {
      src: ComingSoon,
      link: "https://github.com/radkins22",
      title: "Project Coming Soon",
    },
  ];

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <h1 className="w-1/2 text-left !text-6xl font-bold !text-cyan-300 absolute left-0 md:top-[8rem] pl-10">
        Projects
      </h1>

      <div className="w-1/2 h-screen absolute right-0 flex items-start justify-center pt-16 pr-5">
        <div className="grid grid-cols-2 grid-rows-3 gap-4 w-full h-[70vh]">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-cyan-300 font-semibold text-sm mb-2 text-center">
                {image.title}
              </p>
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-cyan-300 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full"
              >
                <img
                  src={image.src}
                  alt={image.title || "Project image"}
                  className="w-full h-[120px] object-cover rounded-lg"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
