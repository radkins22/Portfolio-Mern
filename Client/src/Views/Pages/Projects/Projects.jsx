import Background from "../../../assets/images/pg5BG.png";
const Projects = () => {
  const images = [
    { src: 'url1.jpg', link: 'https://example.com/site1' }, 
    { src: 'url2.jpg', link: 'https://example.com/site2' },
    { src: 'url3.jpg', link: 'https://example.com/site3' },
    { src: 'url4.jpg', link: 'https://example.com/site4' },
    { src: 'url5.jpg', link: 'https://example.com/site5' },
    { src: 'url6.jpg', link: 'https://example.com/site6' },
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
              className="border-[3px] border-cyan-300 rounded-lg bg-transparent shadow-lg double-border hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-all duration-300"
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.src}
                alt={`Grid Item ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
