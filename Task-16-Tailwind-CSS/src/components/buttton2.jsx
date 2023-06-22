import React from "react";

export const button2 = (props) => {
  const { primary, secondary, children, ...rest } = props;

  if (primary)
    return (
      <button2 {...rest} style={{ background: "blue" }}>
        {props.children}
      </button2>
    );
  else if (secondary)
    return <button2 style={{ background: "green" }}>{props.children}</button2>;
  else
    return <button2 style={{ background: "white" }}>{props.children}</button2>;
};
