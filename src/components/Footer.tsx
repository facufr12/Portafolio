import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import '../assets/styles/Footer.scss'


function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/facufr12" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/facundofierro-frontend/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://wa.me/1125315884" target="_blank" rel="noreferrer"><WhatsappIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;