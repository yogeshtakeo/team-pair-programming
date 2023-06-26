import React from "react";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <div className="h-16 w-full bg-white text-[13px] text-black flex items-center justify-around border-b border-gray-200">
      <div className="flex w-[1200px] items-center">
        <h1 className="ml-0 mt-4 mr-20 text-xl font-bold mb-3">
          Captain Underpant's College Of Arts & Science
        </h1>
        <ul className="flex items-center justify-around  w-[540px]">
          <li className="hover:underline">History</li>
          <li className="hover:underline">Academics</li>
          <li className="hover:underline">Programs</li>
          <li className="hover:underline">Campus Life</li>
          <li className="hover:underline">Notabe Alumni</li>
          <li className="hover:underline">Student Support</li>
        </ul>
      </div>
      <div className="flex justify-between items-center mr-4">
        <h4 className="pr-4 text-bold">Log In</h4>
        <VscAccount className="h-6 w-6 cursor-pointer " />
      </div>
    </div>
  );
}

export default Navbar;

/* <div>
        <button> Upcoming Events </button>

        <ol>
          <li>Alumni Renuion</li>
          <li>120th Graduation Ceremony</li>
          <li> Career Search Day</li>
          <li>Senior Cruise</li>
        </ol>
      </div> */
