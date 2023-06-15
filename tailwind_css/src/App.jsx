import { useState } from "react";

import "./App.css";
import Card from "./component/Card";

function App() {
  return (
    <>
      <div className="flex justify-around bg-lime-100">
        <a href="Home">Home</a>

        <a href="News">News</a>

        <a href="Contact">Contact</a>

        <a href="About">About</a>
      </div>
      <div className=" mt-10 flex p-2.5 justify-around">
        <Card category="Clothing" image="">
          Card
        </Card>
        <Card category="Electronics">Card</Card>
        <Card category="Home Appliances">Card</Card>
        <Card category="Beauty">Card</Card>
      </div>
    </>
  );
}

export default App;
