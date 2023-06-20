import React from "react";

function Button(props) {
  const { primary, secondary } = props;
  console.log(typeof props.disable);
  // const disable = true;
  if (primary)
    return (
      <button disabled={props.disable} className="bg-orange-400 w-52 rounded ">
        {props.children}
      </button>
    );
  else secondary;
  return (
    <button disabled={props.disable} className="bg-orange-400 w-32 rounded ">
      {props.children}
    </button>
  );
}

export default Button;
