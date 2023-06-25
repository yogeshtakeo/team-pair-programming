import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import Modal from './Components/Modal'
import CourseCard from './Components/CourseCard'
import Slider from './Components/Slider'
import Footer from './Components/Footer'



function App() {
 
  const [isClick, setIsClick]=useState(false)
  return(
    <>
   
      <div className='flex flex-row items-center bg-indigo-200 py-2'>

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
        <div className='fixed bottom-0'>  
        <Footer/> 
      </div>
      
      <div className='flex justify-center'>
        {isClick && <Modal/>}
      </div>
     
      <div className='static grid grid-cols-2 h-full w-full'>
        <CourseCard heading='What you will learn: ' info='JavaScript, React.js, Redux, Next.js, HTML, CSS' button='Learn More'>Frontend Developer Bootcamp</CourseCard>
        <CourseCard heading='What you will learn: '  info='Java, Spring Boot, REST API, SQL, AWS' button='Learn More'>Java Developer Bootcamp</CourseCard>
        <CourseCard heading='What you will learn: '  info='JavaScript, React.js, Spring, SQL, DevOps' button='Learn More'>Full Stack Developer Bootcamp</CourseCard>
        <CourseCard heading='What you will learn: '  info='Python, Django, AWS, Cloud Migration' button='Learn More'>AWS Python Developer Bootcamp</CourseCard>
      </div>

    </>
  )
  
}

export default App
