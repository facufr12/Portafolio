import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSuperpowers,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "Astro",
  "TypeScript",
  "JavaScript",
  "CSS",
  "SASS",
  "Nextjs",
  "Tailwind",
  "Bootstrap",
  "Postman",
];

const labelsSecond = ["NodeJs", "NestJs", "Docker", "Linux", "MongoDB", "SQL"];

const labelsThird = ["Jira", "Word", "Excel", "Trello"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development (2024 - Current)</h3>
            <p>
              Currently working for a prepaid healthcare company, developing
              custom, scalable software and focusing on backend development to
              become a full-stack developer..
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

        

          <div className="skill">
            <FontAwesomeIcon icon={faSuperpowers} size="3x" />
            <h3>Functional Analyst (2022 - 2024)</h3>
            <p>
              Intermediary between the developer and the end client,
              documenting, gathering requirements, and testing applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
            <h3>Backend</h3>
            <p>
              I developed basic backend projects where endpoints are consumed,
              data is updated and deleted, and authentication and login are also
              implemented.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
