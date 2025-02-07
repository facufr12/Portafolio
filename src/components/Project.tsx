import React from "react";

import mock09 from '../assets/images/calculadora.png';
import mock10 from '../assets/images/cober.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Complete App Cober</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
            <div className="project">
                <a href="https://calculadora-scoring-bajas.netlify.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://calculadora-scoring-bajas.netlify.app/" target="_blank" rel="noreferrer"><h2>Scoring Calculator</h2></a>
                <p>A calculator designed specifically for a company department that is connected to a backend. This backend is a Google Sheets implementation(Appscript) where different types of variables can be edited, thus defining the outcome, all in real time.</p>
            </div>
          
        </div>
    </div>
    );
}

export default Project;