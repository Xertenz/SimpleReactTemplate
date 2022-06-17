import React from "react";
import "../../assets/css/style.css";
import "./pricingcards.css";

const PricingCards = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="cards">
          <div className="card">
            <p>-Basics-</p>
            <p>-----</p>
            <h2>100$</h2>
            <p>-3 Days-</p>
            <p>-3 Pages-</p>
            <p>-Featured-</p>
            <p>-Responsive Design-</p>
            <button className="purchase">purchase now</button>
          </div>
          <div className="card">
            <p>-Basics-</p>
            <p>-----</p>
            <h2>100$</h2>
            <p>-3 Days-</p>
            <p>-3 Pages-</p>
            <p>-Featured-</p>
            <p>-Responsive Design-</p>
            <button className="purchase">purchase now</button>
          </div>
          <div className="card">
            <p>-Basics-</p>
            <p>-----</p>
            <h2>100$</h2>
            <p>-3 Days-</p>
            <p>-3 Pages-</p>
            <p>-Featured-</p>
            <p>-Responsive Design-</p>
            <button className="purchase">purchase now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
