// import React from "react";
// import Weather from "/images/weather.png";
// import Organic from "/images/organic_sanskriti.webp";
// import "./Projects.css";
// const Projects = () => {
//   return (
//     <section id="projects">
//       <h5>My Recent Works</h5>
//       <h2>Projects</h2>
//       <div className="container project_container">
//         <article className="project_item">
//           <div className="project_item_image">
//             <img src={Weather} alt="weather_app" />
//           </div>
//           <h3>Weather App</h3>
//           <small className="text-light">
//             Frontend Developement
//           </small>
//           <div className="project_item_btn">
//             <a
//               href="https://live-weather-results.netlify.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-primary"
//             >
//               See Work
//             </a>
//           </div>
//         </article>
//         <article className="project_item">
//           <div className="project_item_image">
//             <img src={Organic} alt="organic_sanskruti" />
//           </div>
//           <h3>Organic Farm</h3>
//           <small className="text-light">Wordpress Developement</small>
//           <div className="project_item_btn">
//             <a
//               href="https://organicsanskruteefarms.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-primary"
//             >
//               See Work
//             </a>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";
import Weather from "/images/weather.png";
import Organic from "/images/organic_sanskriti.webp";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container project_container">
        <article className="project_item">
          <div className="project_item_image">
            <img src={Weather} alt="weather_app" />
          </div>
          <h3>Weather App</h3>
          <small className="text-light">Frontend Development</small>
          <div className="project_item_btn">
            <a
              href="https://live-weather-results.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              See Work
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img src={Organic} alt="organic_sanskruti" />
          </div>
          <h3>Organic Farm</h3>
          <small className="text-light">Wordpress Development</small>
          <div className="project_item_btn">
            <a
              href="https://organicsanskruteefarms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              See Work
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
