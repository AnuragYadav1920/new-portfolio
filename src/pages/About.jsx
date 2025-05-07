import React from 'react';
import './pages.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="./images/resume-photo.png" alt="Anurag Yadav" />
        </div>
        <div className="about-content">
          <h1>
            Hi, I'm <span className="highlight">Anurag Yadav</span>
          </h1>
          <p className="lead">Full Stack Web Developer</p>
          <p className="bio">
            I'm a passionate web developer with a solid foundation in both front-end and back-end technologies. I specialize in building responsive, user-centric websites and applications, emphasizing problem-solving and delivering efficient solutions.
          </p>
          <p className="skills">
            <strong>Skills:</strong> C++, Data Structures & Algorithms, HTML, CSS, JavaScript, React, Redux, Node.js, Express, MongoDB, MySQL, Git, GitHub, REST APIs.
          </p>
          <p className="skills">
            <strong>Tools:</strong> Visual Studio Code, Postman
          </p>
          <p className="contact">
            <strong>Contact:</strong> anuragyadav.webdev@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

