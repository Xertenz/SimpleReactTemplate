import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/imgs/2435550.webp";
import Project from "../Project/Project";
import "./heroimage.css";

const HeroImage = () => {
  return (
    <div className="hero">
      <img src={Image} className="hero-img" />
      <div className="hero-info">
        <p>I am a freelancer</p>
        <h1>React Developer</h1>
        <div className="controls">
          <Link to="/project" className="btn btn-project">
            Project
          </Link>
          <Link to="/contact" className="btn btn-contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
