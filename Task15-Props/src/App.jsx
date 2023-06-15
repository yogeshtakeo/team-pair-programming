import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Buttons from './components/Button/Button'


function App() {


  return (
    <>
    <div className='main'>
      <h1>Learning Coding Eventually....</h1>
    </div>
    <img src="https://sepidehkhalili.weebly.com/uploads/1/1/5/6/115643113/17.png" alt="" />

    <div classname='box'>
      <Buttons>Promise</Buttons>
      <Buttons>Then</Buttons>
      <Buttons>Name</Buttons>
    </div>
      
    </>
  )
}

export default App
