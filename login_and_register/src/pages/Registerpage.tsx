import React from "react";
import { Link } from "react-router-dom";
import Input from "../component/Input";
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
    <div>
      <h6> Sign Up to emerge yourself in a digital world </h6>

      <div>
        <form>
          <label>Enter your email</label>
          <input
            placeholder="Enter your email"
            type="email"
            onChange={HandleEmail}
          />
          <p>{emailMessage}</p>

          <label>Enter the password</label>
          <input
            placeholder="Enter the password"
            type="password"
            onChange={HandlePassword}
          />

          <p>{passwordMessage}</p>

          <label>Confirm the password</label>
          <input
            placeholder="re-Enter the password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </form>
      </div>
      <div>
        By signing up, you agree to our Terms , Privacy Policy and Cookies
        Policy .
      </div>
      <button onClick={HandleSignup}>
        Sign Up
        {/* <Link to="/login">Sign Up</Link> */}
      </button>
    </div>
  );
};

export default Registerpage;
