import { useState } from "react";

import "./App.css";
import Card from "./component/Card";
import Form from "./component/Form";

function App() {
  return (
    <>
      <div className=" flex justify-around items-center bg-orange-200 h-10 ">
        <a href="Home">Home</a>

        <a href="News">News</a>

        <a href="Contact">Contact</a>

        <a href="About">About</a>
      </div>
      <div className=" mt-10 flex p-2.5 justify-around ">
        <Card image="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80">
          Clothing
        </Card>
        <Card image="https://images.unsplash.com/photo-1566647387313-9fda80664848?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60">
          Electronics
        </Card>
        <Card image="https://images.unsplash.com/photo-1618283183091-0f79c89fcc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYXRlcyUyMGFuZCUyMGN1cHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60">
          Home Appliances
        </Card>
        <Card image="https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFrZSUyMHVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60">
          Beauty
        </Card>
      </div>
      <div>
        <Form></Form>
      </div>
    </>
  );
}

export default App;
