import React from 'react'
import Buttons from './Buttons'
import Card from './Card'
import ak from './ak.jpg'
import kayak from './kayak.avif'
//Parent Component
const Gallery = (props) => {
    console.log(props,"login")
  return ( 
    <>
    <Buttons primary={true}>Primary</Buttons>
    <Buttons secondary={true}>Secondary</Buttons>
    <Buttons tertiary={true}>X</Buttons>
   
    <Card img1={true}  image src={ak} name='image'>
      <p>  Vibrant scene of a parachute suspended against a clear blue sky. 
        </p>
    </Card>
    <Card image src={kayak} name='image'>
      <p>A Kayak Gliding Through Nature's Playground</p>
    </Card>
  
    </>
  )
}

export default Gallery