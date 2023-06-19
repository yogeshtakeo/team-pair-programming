import React from "react";

function Card(props) {
  return (
    <div className="container">
      <h2 className="name">{props.name}</h2>
      <img
        className="circle-img"
        src={props.img}
        height="200px"
        width="200px"
        alt="avatar_img"
      />
      <p className="details">{props.description}</p>
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
    </div>
  );
}

export default Card;
