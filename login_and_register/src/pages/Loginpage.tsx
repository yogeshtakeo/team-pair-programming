import React from "react";
import { useState } from "react";
import loginimage from "../assets/login.png";

import { FormEventHandler } from "react";
// import { useContext } from "react";
// import { UserContext } from "../types/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
function Loginpage() {
  const location = useLocation();
  const navigate = useNavigate();
  const transferredState = location.state;
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function HandleEmail(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
  }

  function HandlePassword(e: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (password === transferredState.confirmPassword) {
      navigate("/home");
    } else {
      setMessage("enter correct password");
    }
  };
  return (
    <div className="flex justify-center items-center h-full m-20">
      <div className="flex w-2/5">
        <img className="object-cover" src={loginimage} alt="Login Image" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-xl bold-text mb-4">Log Into Our World</h1>
          <div className="flex flex-col ">
            <label>Enter your email</label>
            <input
              className="p-2 mb-2 bg-transparent focus:outline-none border-2 border-indigo-400 rounded-lg hover:border-indigo-800"
              placeholder="Enter email"
              type="text"
              onChange={HandleEmail}
            />
          </div>
          <div className="flex flex-col">
            <label>Enter the password</label>
            <input
              className="p-2 mb-2 bg-transparent focus:outline-none border-2 border-indigo-400 rounded-lg hover:border-indigo-800"
              placeholder="Enter the password"
              type="password"
              onChange={HandlePassword}
            />
          </div>

          {message && <p className="text-red-500 mr-auto ">{message}</p>}

          <button
            className="bg-indigo-400  p-2 rounded-lg mt-1 hover:bg-indigo-800"
            type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
