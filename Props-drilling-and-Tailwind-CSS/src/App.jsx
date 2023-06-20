import { useState } from "react";

import "./App.css";

import Gallery from "./Components/Gallery";


function App() {
  return (
    <>
      <div className=" w-full h-auto  justify-center items-center bg-gradient-to-tr from-neutral-400 to-stone-200 ">
        <header className="flex justify-between h-12 w-full bg-zinc-700 items-center mb-8">
          <ul className="text-white pl-4 text-2xl font-semibold font-sans">
            <li>
              <h2>Adventure Scapes</h2>
            </li>
          </ul>
          <ul className=" flex text-white text-xl">
            <li className="pr-4">
              <a href="#">Home</a>
            </li>
            <li className="pr-4">
              <a href="#">Gallery</a>
            </li>
            <li className="pr-4">
              <a href="#">About</a>
            </li>
            <li className="pr-4">
              <a href="#">Contact</a>
            </li>
          </ul>
        </header>
        <h4 className="mb-4 font-serif text-2xl text-center">
          Hello! Welcome to Adventure Scapes Gallery.{" "}
        </h4>
        <Gallery />
      </div>
    </>
  );
}

export default App;
