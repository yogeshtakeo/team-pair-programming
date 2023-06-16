import React from "react";
import Button from "./Button";
import Card from "./Card";
import ak from "./ak.jpg";
import kayak from "./kayak.avif";
import Form from "./Form";
import rock from "./rock.jpg";
//Parent Component

const Gallery = (props) => {
  console.log(props, "login");
  

  return (
    <>
      <div className="w-full bg-fuchsia-200 md:flex md:flex-row h-auto flex-col justify-center items-center ">
        <Card img1={true} image src={ak} name="image">
          <p> Vibrant scene of a Hot balloon</p>
        </Card>
        <Card image src={kayak} name="image">
          <p>A Kayak Gliding Through Nature's Playground</p>
        </Card>
        <Card image src={rock} name="image">
          <p>Conquering the Vertical Frontier</p>
        </Card>
      </div>

      <footer className="flex flex-col bg-zinc-700 justify-center items-center mt-16">
        <Form checkbox={true} type="checkbox" disabled={false}>
        
          <p>
            {" "}
            I want to get daily notifications and newsletters on new updates.
          </p>
        </Form>

        <Form showButton={true} type="text" placeholder="Email Address"  />
      </footer>
    </>
  );
};

export default Gallery;
