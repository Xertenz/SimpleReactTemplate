import React from "react";
import HouseCardImg from "../../assets/imgs/house_card.webp";
import "../../assets/css/style.css";
import "./WorkCard.css";

const WorkCard = ({ image, title, text, url, source }) => {
  return (
    <>
      <div className="card">
        <img src={image} className="card-img" />
        <div className="card-details">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{text}</p>
          <div className="controls">
            <a href={url} target="_blank">
              <button className="btn">View</button>
            </a>
            <a href={source} target="_blank">
              <button className="btn">Source</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
