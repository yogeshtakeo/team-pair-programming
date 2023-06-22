import React from "react";

import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

import { useState } from "react";

function Imageslider() {
  const images = [
    "https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80",
    "https://previews.123rf.com/images/leaf/leaf1109/leaf110900450/10723370-college-students-studying-on-university-campus-ground.jpg",
    "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="flex justify-evenly align-center h-96 ">
        <div>
          <GrCaretPrevious
            className="mt-48"
            onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)}
          />
        </div>

        <div className="  h-96 rounded ">
          <img
            className="w-full h-full object-contain "
            src={images[currentIndex]}
            alt="Slider Image"
          />
        </div>
        <div>
          <GrCaretNext
            className="mt-48"
            onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
          />
        </div>

        {/* <div className="flex justify-center align-center pr-2 mt-2">
            <button
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)}>
              Previous
            </button>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}>
              Next
            </button>
          </div> */}
      </div>
    </>
  );
}

export default Imageslider;
