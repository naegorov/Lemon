import React from "react";
import { Link } from "react-router-dom";
import Food from "../assets/Food.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <h1>Little Lemon</h1>
        <h2>New Delhi</h2>
        <p>
          A cherished family-owned restaurant, serving authentic flavors and heartfelt hospitality.
        </p>
        <button>
          <Link to="/reservation">Table reservation</Link>
        </button>
      </div>
      <div className="right-side">
        <img
          src={Food}
          alt="bread"
        />
      </div>
    </header>
  );
};

export default Header;
