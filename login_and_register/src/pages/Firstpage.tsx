import React from "react";
import loginimage from "../assets/loginpage.png";
import Input from "../component/Input";
import { Link } from "react-router-dom";

const Firstpage = () => {
  return (
    <>
      <div className="flex align-center justify-center">
        <div className="h-96 w-96">
          <img src={loginimage} />
        </div>
        <div className="flex flex-col align-center justify-center">
          <h1> Frontend world </h1>
          <form className="flex flex-col">
            <Input
              label="Enter your email"
              placeholder="Enter your email"
              type="text"></Input>
            <Input
              label="Enter the password"
              placeholder="Enter the password"
              type="password"></Input>
            <button type="submit">
              {" "}
              <Link to="/login">Log in</Link>
            </button>
          </form>
          <div>Sign in with </div>
          <div>
            Don't have an account?
            <a href="Registerpage">
              <Link to="/register">Sign Up</Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Firstpage;
