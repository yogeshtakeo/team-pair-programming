import React from "react";
import { useState } from "react";

function Carousel() {
  const slides = [
    {
      url: "https://images.pexels.com/photos/3414792/pexels-photo-3414792.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKaJ-2zPZvaBXp5sF8_zZmemKt2JZqpYHLQ&usqp=CAU",
    },
  ];

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
      <div
        style={{ backgroundImage: "url(${slides[0].url})" }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
    </div>
  );
}

export default Carousel;
