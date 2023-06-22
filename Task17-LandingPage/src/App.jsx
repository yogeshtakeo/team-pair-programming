import Navbar from './Components/Navbar'
import Modal from './Components/Modal'
import React from 'react'
import Toast from './Components/Toast'
import CourseCard from './Components/CourseCard'
import Footer from './Components/Footer'



function App() {
  
  return(
  <>
  <div>
    <Navbar>Home</Navbar>
    <Navbar>Services</Navbar>
    <Navbar>Blogs</Navbar>
    <Navbar>Login</Navbar>
    <Navbar>Sign-up</Navbar>
  </div>


    {/* <button className='bg-black-200'>click</button> */}
    </>
  )
  
}

export default App
