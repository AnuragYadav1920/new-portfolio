import React from 'react';
import {Link} from "react-router-dom"
import './pages.css';
import {Link} from "react-router-dom

const Home = () => {
  return (
    <section className="home-section">
      <div className="overlay">
        <div className="content">
          <h1>Hello, I'm <span style={{color:"#ff6347"}}>Anurag Yadav</span></h1>
          <p className="lead">A Passionate Full Stack Web Developer</p>
          <p className="description">
            Crafting seamless and scalable web applications using the latest technologies. Let's build something amazing together!
          </p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;



