import React from "react";
import "./aboutcontent.css";
import Image1 from "../../assets/imgs/portfolio1.png";
import Image2 from "../../assets/imgs/portfolio2.png";

const AboutContent = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="left">
          <div className="jumbotron">
            <h2 className="title">Who Am I?</h2>
            <p className="text">
              I'm a front end developer. I create responsive secure websites for
              my clients.
            </p>
            <button className="btn">contact</button>
          </div>
        </div>
        <div className="right">
          <div className="image1">
            <img src={Image1} />
          </div>
          <div className="image2">
            <img src={Image2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
