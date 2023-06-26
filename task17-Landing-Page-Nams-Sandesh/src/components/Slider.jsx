import React from "react";

function Slider() {
  return (
    <div className="mb-0">
      <div
        id="myCarousel"
        className="carousel slide mb-100"
        data-bs-ride="carousel"
        data-bs-theme="light"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Captain Underpant's Partner</h1>
                <p className="opacity-100">
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a className="btn btn-sm btn-primary" href="#">
                    Get To Know Our Partner Programs
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption">
                <h1>Captain Underpants in Pop Culture</h1>
                <p>Our College Has Been Featured in Majoy TV Shows</p>
                <p>
                  <a className="btn btn-sm btn-primary" href="#">
                    Check Here
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>The Future Of The College</h1>
                <p>
                  We relie on your donations to innovate and devlop new
                  facilities on campus
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Donate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;

// {
//     url: "https://images.pexels.com/photos/3414792/pexels-photo-3414792.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     url: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     url: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     url: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKaJ-2zPZvaBXp5sF8_zZmemKt2JZqpYHLQ&usqp=CAU",
//   },
// ];
