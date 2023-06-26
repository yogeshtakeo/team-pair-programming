import React from "react";
import { Link } from "react-router-dom";
import Input from "../component/Input";
import { useContext } from "react";
import { UserContext } from "../types/UserContext";

const Loginpage = () => {
  const msg = useContext(UserContext);
  return (
    <div>
      <h1>{msg} </h1>
      <form>
        <Input
          label="Enter your email"
          placeholder="Enter your email"
          type="text"></Input>
        <Input
          label="Enter the password"
          placeholder="Create password"
          type="password"></Input>

        <button>
          {" "}
          <Link to="/home">Log in</Link>
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
