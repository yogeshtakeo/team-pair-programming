import React from "react";

function Button(props) {
  const { primary, secondary} = props
    console.log(props);
    if( primary) 
      return <button className="bg-orange-400 w-52 ">{props.children}</button>
     
    else( secondary) 
      return <button className="bg-orange-400 w-40 ">{props.children}</button>
    

  //return <button className="bg-orange-400 w-52 ">{props.children}</button>;
}

export default Button;
