import React from "react";
import "./heroimage2.css";
import Img from "../../assets/imgs/house.jpg";

const HeroImage2 = ({ title, text }) => {
  return (
    <section className="hero-image-2">
      <img src={Img} className="hero-image" />
      <div className="details">
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
      </div>
    </section>
  );
};

export default HeroImage2;
