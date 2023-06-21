import React from "react";
import { Carousel, initTE } from "tw-elements";
import { useState, useEffect } from "react";

function Imageslider() {
  const images = [
    "https://thumbs.dreamstime.com/b/bu-diamond-building-bangkok-university-rangsit-college-thailand-february-symbol-creativity-also-place-73118975.jpg",
    "https://previews.123rf.com/images/leaf/leaf1109/leaf110900450/10723370-college-students-studying-on-university-campus-ground.jpg",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
  ];
  initTE({ Carousel });

  const [currentIndex, setCurrentIndex] = useState(0);
  function ChangeImage() {
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }, [images.length]);
  }

  return (
    <>
      <div
        id="carouselExampleControls"
        className="relative w-4/5 ml-24 rounded"
        data-te-carousel-init
        data-te-carousel-slide>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active>
            <img
              src={images[currentIndex]}
              className="block w-full h-96 rounded"
              alt="Wild Landscape"
            />
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            <img
              src={images[currentIndex]}
              className="block w-full"
              alt="Camera"
            />
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            <img
              src={images[currentIndex]}
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button onClick={ChangeImage}>next</button>

        {/* <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="prev">
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>

        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="next">
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button> */}
      </div>
    </>
  );
}

export default Imageslider;
