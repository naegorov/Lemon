import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>Contact Information</h3>
        <ul>
          <li>Address: 1 St Street Toronto</li>
          <li>(403)111-1212</li>
          <li>littlelemon@gmail.ca</li>          
        </ul>
      </nav>
      <nav>
        <h3>Little Lemon Opening times</h3>
        <ul>
          <li>Monday - Friday: 11:00 - 22:00</li>
          <li>Saturday: 08:00 - 24:00</li>
          <li>Sunday Closed</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
