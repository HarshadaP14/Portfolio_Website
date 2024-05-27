import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        harshada
      </a>
      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <div className="footer_social">
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
      <div className="footer_copyright">
        <small>&copy; Harshada Patil. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
