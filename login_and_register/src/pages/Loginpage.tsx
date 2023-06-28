import React from "react";
import { useState } from "react";

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
    <div>
      {/* <h1>{msg} </h1> */}
      <form onSubmit={handleSubmit}>
        <label>Enter your email</label>
        <input placeholder="Enter email" type="text" onChange={HandleEmail} />
        <label>Enter the password</label>
        <input
          placeholder="Enter the password"
          type="password"
          onChange={HandlePassword}
        />
        <p>{message}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Loginpage;
