import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Imageslider from "./components/Imageslider";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Imageslider />
      <div>
        <Modal />
      </div>
      <Footer />
    </>
  );
}

export default App;
