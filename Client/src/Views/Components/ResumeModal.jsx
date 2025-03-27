import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
          className="px-20 py-3 !rounded-full border-2 border-cyan-300 text-cyan-300 font-semibold hover:bg-cyan-300 hover:text-black transition-all cursor-pointer"
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
              LinkedIn
            </a>
            <p>|</p>
            <a
              href="https://github.com/radkins22"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
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
              <ul>
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
              <ul>
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
          <ul>
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
          <ul>
            <li>
              Developing a Google Chrome extension using React, JavaScript, and
              Firebase to assist teachers in grading assignments with
              AI-generated feedback.
            </li>
            <li>
              Implementing OAuth3 authentication and Google Cloud Platform to
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
            href="https://github.com/radkins22/Portfolio-Mern"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio Website
          </a>
          <p>
            Designed and developed a responsive portfolio website using React,
            HTML, CSS, and JavaScript to showcase projects and skills.
          </p>
          <a
            href="https://github.com/radkins22/capture-it-photography"
            target="_blank"
            rel="noopener noreferrer"
          >
            Photography Website
          </a>
          <p>
            Created a full-stack website using Mongoose, Express, React, and
            Node.js.
          </p>

          <a
            href="https://github.com/radkins22/assessment-pathways"
            target="_blank"
            rel="noopener noreferrer"
          >
            Assessment Pathways
          </a>
          <p>
            Developed a google chrome extension using React, Open AI, and
            Firebase.
          </p>
          <a
            href="https://github.com/radkins22/full-mern"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full MERN Library
          </a>

          <p>
            Created a full-stack library application using MongoDB, Express,
            React, and Node.js.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ResumeModal;
