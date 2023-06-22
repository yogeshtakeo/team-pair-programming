import Navbar from './Components/Navbar'
import Modal from './Components/Modal'
import React from 'react'
import Toast from './Components/Toast'
import CourseCard from './Components/CourseCard'
import Footer from './Components/Footer'
import LoginForm from './Components/Toast'
import {useState} from 'react'


function App() {
  
  return(
  <>
  {/* <div className='flex sm:justify-around space-x-12 bg-blue-200 py-4'> */}
  <div className='flex flex-row items-center bg-rose-100 py-2'>
    
      <a href="Logo" className='grid grid-cols-2 items-end relative left-10'>
        <img src="https://www.logolynx.com/images/logolynx/ab/ab3cf43cb423c7d9c20eadde6a051a5d.jpeg" className= "h-8 m-2" alt="CUNY Logo" />
        <span className=" self-center font-large py-2 whitespace-nowrap ">C.U.N.Y</span>
      </a>
      
      <div className='grid grid-flow-col fixed right-10'>
        <Navbar>ABOUT</Navbar>
        <Navbar>ACADEMICS</Navbar>
        <Navbar>FINANCIAL AID</Navbar>
        <Navbar>ADMISSIONS</Navbar>
        <Navbar>APPLY</Navbar>
        <button className="font-medium bg-gray-100 px-2 rounded">LOG IN</button>
    </div>
  </div>
 
    <Modal/>
  <div>
    <Footer/>
  </div> 
    </>
  )
  
}

export default App
