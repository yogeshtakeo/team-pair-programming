import React from "react";
import Button from "./Button";

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="w-60 h-72 bg-orange-200 m-2.5  flex flex-col justify-center items-center justify-around hover:bg-orange-600 rounded shadow-2xl">
        <h1>{props.children}</h1>
        <div className="w-52 h-52 bg-emerald-950 overflow-hidden rounded ">
          <img className="object-cover" src={props.image} />
        </div>

        <Button primary>Check Out</Button>
      </div>
    </>
  );
}

export default Card;
