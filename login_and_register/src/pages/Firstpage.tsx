import React from "react";
import loginimage from "../assets/loginpage.png";
import Input from "../component/Input";
import { Link } from "react-router-dom";

const Firstpage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full m-20">
        <div className="flex w-2/5">
          <img className="object-cover" src={loginimage} alt="Login Image" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl mb-4">Join Us Today</h1>
          <button className="bg-indigo-400  p-2 rounded-lg hover:bg-indigo-800">
            <a href="Registerpage">
              <Link to="/register">Sign Up</Link>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
export default Firstpage;
