import React from 'react';
import './pages.css';

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
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Home;



