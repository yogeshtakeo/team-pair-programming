import React from "react";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";

function Modal() {
  //useState to handle the isOpen on onClick.
  const [isOpen, setIsOpen] = useState(false);
  //handleOpen function
  const handleOpen = () => {
    setIsOpen(!isOpen); //states changes between true & false onClick.
  };

  return (
    <div>
      <BsFillPersonFill size={25} onClick={handleOpen} />
      {isOpen ? (
        <div className="absolute right-[30%] left-[30%] top-24 w-[40%] h-auto p-24  border-2 border-zinc-600 rounded-xl  backdrop-blur-2xl m-auto flex flex-col justify-center items-center">
          <h1 className="uppercase text-3xl">Create an Account</h1>
          <input
            className="border-2 border-zinc-700 rounded-xl p-4  mb-12 mt-12 w-full text-black"
            type="text"
            placeholder="Enter your email address"
          />
          <input
            className="border-2  border-zinc-700 rounded-xl p-4 w-full text-black "
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className=" uppercase border-2  border-zinc-600 bg-stone-900 shadow-md shadow-stone-700 rounded-xl p-4 w-32 mt-12 hover:scale-110"
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Modal;
