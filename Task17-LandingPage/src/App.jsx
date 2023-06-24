import Navbar from './Components/Navbar'
import Modal from './Components/Modal'
import React from 'react'


import Footer from './Components/Footer'

import {useState} from 'react'
import Slider from './Components/Slider'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  const [isClick, setIsClick]=useState(false)
  // const notify = () => toast("You got accepted!");
  
  

  return(
    <>
   
      <div className='flex flex-row items-center bg-indigo-100 py-2'>

        <a href="Logo" className='grid grid-cols-2 items-end relative left-10'>
          <img src="https://www.logolynx.com/images/logolynx/ab/ab3cf43cb423c7d9c20eadde6a051a5d.jpeg" className= "h-8 m-2" alt="CUNY Logo" />
          <span className=" self-center font-large py-2 whitespace-nowrap ">C.U.N.Y</span>
        </a>
          
        <div className='grid grid-flow-col absolute right-10'>
          <Navbar>ABOUT</Navbar>
          <Navbar>ACADEMICS</Navbar>
          <Navbar>FINANCIAL AID</Navbar>
          <Navbar>ADMISSIONS</Navbar>
          <Navbar onClick={() => {setIsClick(true)}}>LOGIN</Navbar>
        </div> 
        
      </div>
     
      
      <Slider></Slider>

      {/* <div className='flex justify-center'>
      <button onClick={notify}>Application Status</button>
      <ToastContainer />
      </div> */}
      

      <div className='fixed bottom-0'>  
        <Footer/> 
      </div>
      
      <div className='flex justify-center'>
        {isClick && <Modal/>}
      </div>
     
    </>
  )
  
}

export default App
