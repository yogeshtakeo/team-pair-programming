import React from "react";
import { Link } from "react-router-dom";
import Input from "../component/Input";
import registerimage from "../assets/register.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registerpage = () => {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const navigate = useNavigate();

  function HandlePassword(e: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }
  function HandleEmail(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
  }
  function HandleEmailValidation() {
    const regExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === "") {
      setEmailMessage("Fill the email field");
    } else if (regExp.test(email)) {
      setEmailMessage("Email set");
    } else if (!regExp.test(email)) {
      setEmailMessage("Enter valid email");
    }
  }

  function HandlePasswordValidation() {
    const regExp =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (password === "" && password !== confirmPassword) {
      setPasswordMessage("Please Enter Password");
    } else if (regExp.test(password) && password === confirmPassword) {
      navigate("/login", { state: { confirmPassword } });
      setPasswordMessage("Password set");
    } else if (!regExp.test(password)) {
      setPasswordMessage("Please enter valid Password");
    } else if (regExp.test(password) && password !== confirmPassword) {
      setPasswordMessage("password didn't match");
    }
  }

  function HandleSignup() {
    HandleEmailValidation();
    HandlePasswordValidation();
  }

  return (
    <div className="flex justify-center items-center h-full m-20">
      <div className="flex w-2/5">
        <img className="object-cover" src={registerimage} alt="Login Image" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="px-4 py-2">
          <h1 className="text-xl bold-text mb-4">
            Sign Up to emerge yourself in a digital world{" "}
          </h1>
          <form>
            <div className="flex flex-col ">
              <label>Enter your email</label>
              <input
                className="p-2 mb-2 bg-transparent focus:outline-none border-2 border-indigo-400 rounded-lg hover:border-indigo-800"
                placeholder="Enter your email"
                type="email"
                onChange={HandleEmail}
              />
            </div>

            {emailMessage && (
              <p className="text-red-500 mr-auto ">{emailMessage}</p>
            )}
            <div className="flex flex-col">
              <label>Enter the password</label>
              <input
                className="p-2 mb-2 bg-transparent focus:outline-none border-2 border-indigo-400 rounded-lg hover:border-indigo-800"
                placeholder="Enter the password"
                type="password"
                onChange={HandlePassword}
              />
            </div>

            {passwordMessage && (
              <p className="text-red-500 mr-auto ">{passwordMessage}</p>
            )}
            <div className="flex flex-col">
              <label>Confirm the password</label>
              <input
                className="p-2 mb-2 bg-transparent focus:outline-none border-2 border-indigo-400 rounded-lg hover:border-indigo-800"
                placeholder="re-Enter the password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div>
              <input type="checkbox" />
              <span className="px-1">Agree terms and conditions</span>
            </div>
          </form>
        </div>
        <button
          className="bg-indigo-400  p-2 rounded-lg mt-1 hover:bg-indigo-800"
          onClick={HandleSignup}>
          Sign Up
          {/* <Link to="/login">Sign Up</Link> */}
        </button>
      </div>
    </div>
  );
};

export default Registerpage;
