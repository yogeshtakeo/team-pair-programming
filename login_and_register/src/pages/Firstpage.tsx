import React from "react";
import loginimage from "../assets/loginpage.png";
import Input from "../component/Input";
import { Link } from "react-router-dom";

const Firstpage = () => {
  return (
    <>
      <div className="flex flex-col align-center justify-center h-full">
        <div className=" h-96 w-96 ">
          <img src={loginimage} />
        </div>

        <h1>Create your account </h1>
        <a href="Registerpage">
          <Link to="/register">Sign Up</Link>
        </a>
      </div>
    </>
  );
};
export default Firstpage;
