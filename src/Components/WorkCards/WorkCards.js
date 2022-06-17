import React from "react";
import "../../assets/css/style.css";
import WorkCard from "../WorkCard/WorkCard";
import "./WorkCards.css";
import cardImage from "../../assets/imgs/house_card.webp";

const WorkCards = () => {
  return (
    <section className="project-cards">
      <div className="container">
        <h2 className="title">projects</h2>
        <div className="cards">
          <WorkCard
            image={cardImage}
            title="Course Web Design"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled"
            url="https://www.google.com"
            source="https://www.youtube.com"
          />
          <WorkCard
            image={cardImage}
            title="Course Web Design"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled"
            url="https://www.google.com"
            source="https://www.youtube.com"
          />
          <WorkCard
            image={cardImage}
            title="Course Web Design"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled"
            url="https://www.google.com"
            source="https://www.youtube.com"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkCards;
