import React from "react";

function Button(props) {
  console.log(props);
  return <button className="bg-orange-400 w-52 ">{props.children}</button>;
}

export default Button;
