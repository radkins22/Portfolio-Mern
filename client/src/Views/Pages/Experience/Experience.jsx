import React from "react";
import Background from "../../../assets/images/pg3BG.png";
import ResumeModal from "../../Components/ResumeModal";

const Experience = () => {
  return (
    <div
      className="w-screen min-h-screen lg:h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center pb-6"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="flex flex-col items-center w-full max-w-screen-xl px-4 md:px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">

          {/* Left Side */}
          <div className="flex flex-col order-2 md:order-1">
            {/* Banyan Labs */}
            <div className="bg-black bg-opacity-50 rounded-lg w-full">
              <div className="flex flex-col ">
                <h5 className="text-xl md:text-2xl font-semibold !text-cyan-300">
                  Software Developer
                </h5>
                <h5 className="text-xl md:text-2xl font-semibold !text-cyan-300">
                  Banyan Labs LLC
                </h5>
                <p className="text-white text-sm md:text-base">
                  03/2025 - Present
                </p>
                <ul className="text-white text-sm md:text-base list-disc ml-5 mt-2 space-y-2">
                  <li>
                    Collaborate in Agile Scrum teams, participating in daily
                    stand-ups, sprint planning, and retrospectives.
                  </li>
                  <li>
                    Develop and debug software solutions through paired
                    programming and Jira-managed tasks.
                  </li>
                  <li>
                    Work on real-world client projects, implementing scalable
                    and efficient code.
                  </li>
                  <li>
                    Utilize version control (Git) and cloud-based tools to
                    enhance team collaboration.
                  </li>
                </ul>
              </div>
            </div>

            {/* Full-Stack Certification */}
            <div className="bg-black bg-opacity-50 rounded-lg p-6 w-full">
              <div className="flex flex-col space-y-2">
                <h5 className="text-xl md:text-2xl font-semibold !text-cyan-300">
                  Full-Stack Developer
                </h5>
                <h5 className="text-xl md:text-2xl font-semibold !text-cyan-300">
                  Full-Stack Development Certification
                </h5>
                <p className="text-white text-sm md:text-base">June 2024</p>
                <ul className="text-white text-sm md:text-base list-disc ml-5 mt-2 space-y-2">
                  <li>
                    Completed comprehensive training in full-stack development
                    with hands-on projects.
                  </li>
                  <li>
                    Gained expertise in API integration, responsive web design,
                    and agile development practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col space-y-3 order-1 md:order-2">
            {/* Experience Heading */}
            <div className="bg-transparent rounded-lg mb-2">
              <h1 className="!text-cyan-300 !font-bold !font-proxima-nova text-[1.5em] sm:text-[2em] md:text-[2.5em] lg:text-[3em] xl:text-[3.5em]">
                Experience
              </h1>
            </div>

            {/* Assessment Pathways */}
            <div className="bg-black bg-opacity-50 rounded-lg p-6 w-full">
              <div className="flex flex-col space-y-2">
                <h5 className="text-xl md:text-2xl font-semibold !text-cyan-300">
                  Software Developer
                </h5>
                <h5 className="text-xl md:text-2xl font-semibold !text-cyan-300">
                  Assessment Pathways
                </h5>
                <p className="text-white text-sm md:text-base">
                  03/2025 - Present
                </p>
                <ul className="text-white text-sm md:text-base list-disc ml-5 mt-2 space-y-2">
                  <li>
                    Developing a Google Chrome extension using React,
                    JavaScript, and the MERN stack to assist teachers.
                  </li>
                  <li>
                    Implementing OAuth2 authentication and Google Cloud
                    integration.
                  </li>
                  <li>
                    Optimizing AI models to provide accurate grading feedback.
                  </li>
                  <li>
                    Collaborating with educators and developers in an Agile
                    environment.
                  </li>
                </ul>
              </div>
            </div>

            {/* Resume Modal */}
            <div className="flex justify-center mb-4">
              <ResumeModal />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
