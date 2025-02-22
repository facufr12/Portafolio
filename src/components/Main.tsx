import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import '../assets/styles/Main.scss';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import Logo from "../assets/images/logofacu.jpeg"
import Memoji from "../assets/images/memoji.webp"
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={Memoji} alt="Avatar" />

        </div>
        <div className="content">
          <div className="social_icons">
          <a href="/FacundoFrontend.pdf" download=" Frontend.pdf">
  <FilePresentIcon />
</a>
            <a href="https://github.com/facufr12" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/facundofierro-frontend/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://wa.me/1125315884" target="_blank" rel="noreferrer"><WhatsappIcon/></a>
          </div>
          <h1>Facundo Fierro</h1>
          <p>Frontend Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://wa.me/1125315884" target="_blank" rel="noreferrer"><WhatsappIcon/></a>
            <a href="/FacundoFrontend.pdf" download=" Frontend.pdf">
  <FilePresentIcon />
</a>
      
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;