import React from "react";
import  Button from './Button'

function Form(props) {
  return (
    <div>
      <input type="text" placeholder="Enter your email" />
      <Button secondary>Add to Cart</Button>
    </div>
  );
}

export default Form;
