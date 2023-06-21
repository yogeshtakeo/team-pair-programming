import React from "react";

interface CardProps {
  title: string;
  img_url: string;
}

function Coursecard(props: CardProps) {
  return (
    <>
      <div className="flex flex-col justify-center align-center h-72 w-56 border-2 border-blue-800 rounded p-2">
        <h1 className="pl-14 font-bold">{props.title}</h1>
        <div className=" flex justify-center align-center">
          <img className="w-48 h-52 rounded " src={props.img_url} alt="" />
        </div>
        <p>See More....</p>
      </div>
    </>
  );
}

export default Coursecard;
