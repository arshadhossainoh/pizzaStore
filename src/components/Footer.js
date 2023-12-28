import React from "react";
import { SocialIcon } from "react-social-icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <SocialIcon url="https://twitter.com" />
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://linkedin.com" />
        <SocialIcon url="https://instragram.com" />
      </div>

      <p>&copy; 2023 chicagopizza.com</p>
    </div>
  );
}

export default Footer;
