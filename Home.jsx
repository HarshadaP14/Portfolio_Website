import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import ME from "/images/me.png";
import MyResume from "/CV/Harshada_Patil_CV.pdf";
import "./Home.css";

const Home = () => {
  return (
    <header id="home">
      <div className="container home_container">
        <h5>Hello, I'm</h5>
        <h1>Harshada Patil</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <div className="cta">
          <a href={MyResume} download="Harshada_Patil_CV.pdf" className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact ME
          </a>
        </div>
        <div className="home_social">
          <a href="https://www.linkedin.com/in/harshada-patil-119aa0208/">
            <BsLinkedin />
          </a>
          <a href="https://github.com/HarshadaP14">
            <BsGithub />
          </a>
          <a href="">
            <BsMedium />
          </a>
        </div>
        <div className="me">
          <img src={ME} alt="Harshada" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Home;
