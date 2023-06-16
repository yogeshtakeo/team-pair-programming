import React from "react";
import Button from "./Button";
//import ak from './ak.jpg'

const Card = (props) => {
  return (
    <>
      <div>
        {props.img1 ? (
          <div className="flex ">
            <div className="w-80 mr-4 h-96 flex  justify-center items-center flex-col p-2 text-sm  bg-zinc-400 border-solid rounded-lg pb-4 shadow-xl shadow-neutral-700 ">
              <Button tertiary={true}>X</Button>
              <div className="flex justify-center items-center rounded-2xl w-56 h-full m-1 border-2 p-1 border-zinc-600 border-solid">
                <img
                  className="rounded-2xl h-full hover:scale-110"
                  src={props.src}
                  alt={props.name}
                />
              </div>
              {props.children}
              <Button secondary={true}>Read More</Button>
            </div>
          </div>
        ) : (
          <div className="w-80 h-96 mr-4 flex justify-center items-center flex-col p-1 text-center text-sm bg-zinc-400 border-solid rounded-lg pb-4 shadow-xl shadow-neutral-700 ">
            <Button tertiary={true}>X</Button>
            <div className="flex justify-center items-center rounded-xl w-56 h-full m-1 p-1 border-2 border-zinc-600 border-solid">
              <img
                className="rounded-2xl h-full hover:scale-110"
                src={props.src}
                alt={props.name}
              />
            </div>
            {props.children} <Button secondary={true}>Read More</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
