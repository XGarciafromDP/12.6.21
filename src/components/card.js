import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="Player">
      <p>Render each of the items stored in the data variable in App.js</p>

      <h1>Message: </h1>
      <h3>Number: </h3>
      <h3>Desserts: </h3>
      <h3>Got It: </h3>
    </div>
  );
}

export default Card;
