import React from "react";
import "./Card.css";

const Card = ({ image, title, price, description }) => {
  return (
    <div className="card">
      <img width="300px" src={image} alt="greek salad" />
      <div className="dish-info">
        <div className="title">
          <h3>{title}</h3>
          <p className="price">INR {price}</p>
        </div>
        <p>{description}</p>
        <span
          role="button"
          aria-label="On Click"
          className="specials-order-btn"
        >
        </span>
      </div>
    </div>
  );
};

export default Card;
