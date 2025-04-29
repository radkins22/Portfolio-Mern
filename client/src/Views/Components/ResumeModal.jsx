import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function ResumeModal() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <button
          key={idx}
          className="!text-xl px-20 py-3 !rounded-full border-2 border-cyan-300 text-cyan-300 font-semibold hover:bg-cyan-300 hover:text-black transition-all cursor-pointer"
          onClick={() => handleShow(v)}
        >
          Resume
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title class="text-5xl">Rachael Higgins' Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="flex space-x-4">
            <p>(308) 293-4243</p>
            <p>|</p>
            <p> rhiggins.persevere@gmail.com</p>
          </div>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/rachael-higgins/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <p>|</p>
            <a
              href="https://github.com/radkins22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-black" />
            </a>
          </div>
          <h3 class="underline">Summary</h3>
          <p>
            Detail-oriented and resourceful web developer with a strong
            foundation in mathematics and sciences, bringing a unique analytical
            approach to software development. Experienced in leveraging
            programming languages, web technologies, and problem-solving skills
            to create innovative solutions. Passionate about combining technical
            expertise, creativity, and scientific curiosity to drive community
            impact and inspire innovation.{" "}
          </p>
          <h3 class="underline">Skills</h3>
          <div class="flex space-x-20">
            <div>
              <h5>Technical Skills</h5>
              <ul className="list-disc">
                <li>
                  Full-Stack Web Development (HTML, CSS, JavaScript, React,
                  Node.js)
                </li>
                <li>Database Management (MongoDB, MySQL)</li>
                <li>API Development & Integration</li>
                <li>Version Control (Git, GitHub)</li>
                <li>Responsive Web Design</li>
                <li>Testing & Debugging</li>
              </ul>
            </div>
            <div>
              <h5>Professional Skills</h5>
              <ul className="list-disc">
                <li>Problem-Solving & Critical Thinking</li>
                <li>Technical Troubleshooting</li>
                <li>Process Optimization & Documentation</li>
                <li>Project Management & Collaboration</li>
                <li>Strong Written & Verbal Communication</li>
                <li>Adaptability & Continuous Learning</li>
              </ul>
            </div>
          </div>
          <h3 class="underline">Work Experience</h3>
          <h4>Software Developer, Banyan Labs, Remote</h4>
          <p>03/18/2025 - Present</p>
          <ul class="list-disc">
            <li>
              Collaborate in Agile Scrum teams, participating in daily
              stand-ups, sprint planning, and retrospectives.
            </li>
            <li>
              Develop and debug software solutions through paired programming
              and Jira-managed tasks.
            </li>
            <li>
              Work on real-world client projects, implementing scalable and
              efficient code.
            </li>
            <li>
              Utilize version control (Git) and cloud-based tools to enhance
              team collaboration.
            </li>
          </ul>
          <h4>Software Developer, Assessment Pathways, Remote</h4>
          <p>03/18/2025 - Present</p>
          <ul className="list-disc">
            <li>
            Developing a Google Chrome extension using React, JavaScript, and the MERN stack to assist teachers in grading assignments with AI-generated feedback.
            </li>
            <li>
              Implementing OAuth2 authentication and Google Cloud Platform to
              ensure secure access, scalability, and efficient AI processing.
            </li>
            <li>
              Optimizing AI models to provide accurate grading and constructive
              feedback, enhancing efficiency in education.
            </li>
            <li>
              Collaborating with educators and developers in an Agile
              environment to refine functionality and user experience.
            </li>
          </ul>
          <h3 class="underline">Education & Certification</h3>
          <h5>B.S., Biology/Math, University of Nebraska, Kearney, NE</h5>
          <p>In-Progress</p>
          <h5>
            Full Stack Developer Certification, Persevere Coding Academy, York,
            NE
          </h5>
          <p>June 06, 2024</p>
          <h5>A.S., Southeast Community College, Lincoln, NE</h5>
          <p>03/12/2012</p>
          <h3 class="underline">Projects</h3>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfGQyOCJD204B_GeCdr5peJ84cHLIc_BKH-md4E4sXcz1QQIg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
           Assessment Pathways AI Demo
          </a>
          <p>
          Developed an interactive demo using OpenAI, Google Forms, and Google Apps Script to showcase automated grading capabilities, demonstrating the integration of AI-driven assessment tools in education.
          </p>
          <a
            href="https://github.com/coder-j25/phillys"
            target="_blank"
            rel="noopener noreferrer"
          >
            Philly’s Food Truck Website
          </a>
          <p>
          Built a responsive frontend for a local Arizona-based food truck using React and Tailwind CSS, emphasizing mobile-first design and brand consistency.
          </p>

          <a
            href="https://www.assessmentpathways.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Assessment Pathways (Production Site)
          </a>
          <p>
          Created a platform from the ground up to help educators streamline grading workflows by allowing them to upload student assignments and receive AI-assisted grades and feedback, reducing manual evaluation time.
          </p>
          <a
            href="https://rachael-higgins.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rachael Higgins Portfolio
          </a>
          <p>
          Designed and developed a personal tech portfolio using React to highlight project experience, frontend proficiency, and visual design skills.
          </p>
          <a
            href="https://github.com/radkins22/full-mern"
            target="_blank"
            rel="noopener noreferrer"
          >
            Personal Library Manager (MERN Stack)
          </a>
          <p>
          Full-stack library management application built with MongoDB, Express, React, and Node.js, allowing users to catalog and track personal reading collections.
          </p>
          <a
            href="https://github.com/radkins22/capture-it-photography"
            target="_blank"
            rel="noopener noreferrer"
          >
            Capture It Photography Website
          </a>
          <p>
          Developed a full-stack photography portfolio site with user-friendly image galleries, leveraging modern web technologies to support client engagement and booking.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ResumeModal;
