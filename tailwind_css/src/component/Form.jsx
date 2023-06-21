import React from "react";
import Button from "./Button";
import { useState } from "react";

function Form(props) {
  const [items, setItems] = useState("");

  const [list, setList] = useState([]);
  // const item = [];

  function AddItems(event) {
    setItems(event.target.value);
    console.log(items);
  }
  function AddToCard() {
    const item = [];
    setList([...list, items]);
    setItems("");
    console.log(list);
  }

  return (
    <>
      <div className=" flex  justify-center items-center p-10 ">
        <input
          onChange={AddItems}
          value={items}
          className="border-2 border-amber-500 rounded mr-5 pl-2"
          type="text"
          placeholder="Enter your shop item"
        />
        <Button onclick={AddToCard} secondary disable={false}>
          Add to Card
        </Button>
      </div>
      <div className="flex justify-center align-center">
        <ul className="list-none list-inside ">
          {list.map((i, index) => {
            return (
              <li key={index}>
                <div>{i}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Form;
