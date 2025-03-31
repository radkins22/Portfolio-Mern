import React from "react";
import Background from "../../../assets/images/pg3BG.png";
import { Card } from "react-bootstrap";
import ResumeModal from "../../Components/ResumeModal";

const Experience = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex justify-center pb-20"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="flex justify-center items-center w-full px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-45 px-4 md:px-8 overflow-auto">
          {/* Left Section with two cards */}
          <div className="flex flex-col space-y-1">
            {/* Left Card 1 */}
            <Card className="bg-transparent border-0 max-w-lg w-full">
              <Card.Body className="flex flex-col justify-between">
                <div className="flex flex-col space-y-2">
                  <h5 className="text-xl md:text-2xl font-semibold !text-cyan-300">
                    Software Developer
                  </h5>
                  <h5 className="text-xl md:text-2xl font-semibold !text-cyan-300">
                    Banyan Labs LLC
                  </h5>
                  <p className="text-white text-sm md:text-base">
                    03/2025 - Present
                  </p>
                  <ul className="text-white text-sm md:text-base">
                    <li>
                      - Collaborate in Agile Scrum teams, participating in daily
                      stand-ups, sprint planning, and retrospectives.
                    </li>
                    <li>
                      - Develop and debug software solutions through paired
                      programming and Jira-managed tasks.
                    </li>
                    <li>
                      - Work on real-world client projects, implementing
                      scalable and efficient code.
                    </li>
                    <li>
                      - Utilize version control (Git) and cloud-based tools to
                      enhance team collaboration.
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>

            {/* Left Card 2 */}
            <Card className="bg-transparent border-0 max-w-lg w-full">
              <Card.Body className="flex flex-col justify-between">
                <div className="flex flex-col space-y-2">
                  <h5 className="text-xl md:text-2xl font-semibold !text-cyan-300">
                    Full-Stack Developer
                  </h5>
                  <h5 className="text-xl md:text-2xl font-semibold !text-cyan-300">
                    Full-Stack Development Certification
                  </h5>
                  <p className="text-white text-sm md:text-base">June 2024</p>
                  <ul className="text-white text-sm md:text-base">
                    <li>
                      - Completed comprehensive training in full-stack
                      development with hands-on projects.
                    </li>
                    <li>
                      - Gained expertise in API integration, responsive web
                      design, and agile development practices.
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* Right Section with two cards */}
          <div className="flex flex-col space-y-1">
            {/* Right Card 1 */}
            <Card className="bg-transparent border-0 max-w-lg w-full">
              <Card.Body className="flex flex-col justify-between">
                <div className="flex flex-col space-y-2">
                  <h5 className="!text-5xl md:text-4xl font-semibold !text-cyan-300">
                    Experience
                  </h5>
                </div>
              </Card.Body>
            </Card>

            {/* Right Card 2 */}
            <Card className="bg-transparent border-0 max-w-lg w-full">
              <Card.Body className="flex flex-col justify-between">
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
                  <ul className="text-white text-sm md:text-base">
                    <li>
                      - Developing a Google Chrome extension using React,
                      JavaScript, and Firebase to assist teachers in grading
                      assignments with AI-generated feedback.
                    </li>
                    <li>
                      - Implementing OAuth2 authentication and Google Cloud
                      Platform to ensure secure access, scalability, and
                      efficient AI processing.
                    </li>
                    <li>
                      - Optimizing AI models to provide accurate grading and
                      constructive feedback, enhancing efficiency in education.
                    </li>
                    <li>
                      - Collaborating with educators and developers in an Agile
                      environment to refine functionality and user experience.
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>

            <div className="flex justify-center">
              <ResumeModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
