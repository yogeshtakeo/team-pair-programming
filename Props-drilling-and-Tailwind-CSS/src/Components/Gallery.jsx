import React from "react";
import Button from "./Button";
import Card from "./Card";
import ak from "./ak.jpg";
import kayak from "./kayak.avif";
import Form from "./Form";
import rock from './rock.jpg'
//Parent Component
const Gallery = (props) => {
  console.log(props, "login");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center ">
        <Card img1={true} image src={ak} name="image">
          <p> Vibrant scene of a Hot balloon.</p>
           </Card>
        <Card image src={kayak} name="image">
          <p>A Kayak Gliding Through Nature's Playground</p>
         
        </Card>
        <Card image src={rock} name="image">
          <p>Conquering the Vertical Frontier</p>
         
        </Card>
        </div>
      <Form
       showButton={true}
       type="text"
       placeholder="Email Address">
       </Form>
       <Form
       type="checkbox"
       placeholder="Email Address">

       </Form>
       
      
    </>
  );
};

export default Gallery;
