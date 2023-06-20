import React from "react";
import Button from "./Button";
import {useState} from "react";


function Form(props) {
  return (
    <div className=" flex  justify-center items-center p-10 ">
      <input
        className="border-2 border-amber-500 rounded mr-5"
        type="text"
        placeholder="Enter your shop item"
      />
      <Button secondary disable={false}>
        Add to Card
      </Button>
    </div>
  );
}

export default Form;
