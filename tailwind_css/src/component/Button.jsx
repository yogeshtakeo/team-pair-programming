import React from "react";

function Button(props) {
  console.log(props);
  return <button className="bg-lime-600">{props.children}</button>;
}

export default Button;
