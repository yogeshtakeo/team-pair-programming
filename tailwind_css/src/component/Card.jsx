import React from "react";
import Button from "./Button";

function Card(props) {
  return (
    <>
      <div className="w-60 h-72 bg-lime-100 m-2.5  flex flex-col justify-center items-center justify-around">
        <h1>{props.category}</h1>
        <div className="w-52 h-52 bg-emerald-950">
          <img className="object-cover" src={props.image} />
        </div>

        <Button>Check Out</Button>
      </div>
    </>
  );
}

export default Card;
