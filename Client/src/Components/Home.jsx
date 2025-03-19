import React from "react";

// This is the home page of the application. It contains the main components of the application.
const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to My Tech Portfolio</h1>
      <p>
        Hi, I'm a software developer specializing in full-stack development.
        Check out my projects and skills below.
      </p>
      <div style={{ marginTop: "30px" }}>
        <h2>Projects</h2>
        <ul>
          <li>Project 1: Description of project 1</li>
          <li>Project 2: Description of project 2</li>
          <li>Project 3: Description of project 3</li>
        </ul>
      </div>
      <div style={{ marginTop: "30px" }}>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
