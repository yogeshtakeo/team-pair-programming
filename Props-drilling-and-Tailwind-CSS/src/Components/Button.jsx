import React from "react";
//Child Components
const Button = (props) => {
  return (
    <button disabled={props.disabled}
      className={`ml-1 mt-1 ${
        props.primary && "bg-red-700 rounded-lg p-1 w-28 h-9 text-white text-lg"
      }   ${
        props.secondary &&
        "p-1 pl-2 pr-2 mt-2 border-2 border-solid border-zinc-700 hover:scale-110 rounded-lg shadow-md shadow-stone-300"
      }  ${
        props.tertiary &&
        " w-7 ml-auto p-1 underline-offset-1 bg-red-500 shadow-md shadow-red-700 rounded-[50%] hover:scale-110 "
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
