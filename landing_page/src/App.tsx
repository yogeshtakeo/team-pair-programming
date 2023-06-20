import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Imageslider from "./components/Imageslider";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer";
import Coursecard from "./components/Coursecard";

function App() {
  return (
    <>
      <Nav />
      <Imageslider />
      <div>
        <Modal />
      </div>
      <div className="flex justify-evenly align-center mt-5">
        <Coursecard />
        <Coursecard />
        <Coursecard />
      </div>

      <Footer />
    </>
  );
}

export default App;
