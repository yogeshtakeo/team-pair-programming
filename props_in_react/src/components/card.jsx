import React from "react";
import Button from "./button";

function Card(props) {
  return (
    <>
      <div className="main">
        <h1>{props.heading1}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          recusandae eveniet officiis nihil qui perferendis illo nulla fugiat,
          modi ducimus beatae suscipit maxime? Excepturi omnis, cum debitis
          dolorem inventore recusandae.
        </p>
        <Button buttonName="Book Now"></Button>
      </div>
    </>
  );
}

export default Card;
