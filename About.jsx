import React from "react";
import myImage from "/images/Photo.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { BsTelephoneForward } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={myImage} alt="Harshada" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiGraduateCap className="about_icon" />
              <h5>Degree</h5>
              <small>
                BE Information Technology
                <br />
                <i>University of Pune</i> <br />
              </small>
              <small>
                Diploma Information Technology <br />
                <i>Nashik Board</i>
              </small>
            </article>
            <article className="about_card">
              <BsTelephoneForward className="about_icon" />
              <h5>Contact</h5> <br />
              <small>
                <ul>
                  <li>Phone: +91.8788153128</li>
                  <li>Email: patil.harshada2114@gmail.com</li>
                </ul>
              </small>
            </article>
            <article className="about_card">
              <TfiWorld className="about_icon" />
              <h5>Location</h5> <br />
              <small>Nashik, Maharashtra</small>
            </article>
          </div>
          <p>
            Hi, I'm Harshada Patil, Accomplished Frontend Developer with expert
            knowledge across various development stacks and languages.
            Communicates and collaborates well to progress and attain project
            objectives. Produces deliverables within agreed limitations for
            successful, cost-effective completion. With expertise in ReactJS,
            JavaScript, Bootstrap, Material UI.
            {/* a skilled Frontend developer with passion
            for building robust,scalable and efficient applications. With
            expertise in ReactJS, BootStrap,Material UI, JavaScript. */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
