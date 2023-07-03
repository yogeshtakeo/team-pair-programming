import React from "react";
import welcome from "../assets/welcome.png";

export const Homepage = () => {
  return (
    <div className="flex justify-center items-center h-full m-20">
      <div className="flex w-2/5 mt-20">
        <img className="object-cover" src={welcome} alt="Login Image" />
      </div>
    </div>
  );
};

export default Homepage;
