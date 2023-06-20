import React, { useState } from 'react'
import img1 from '../../images/img1.avif'
import img2 from '../../images/img2.avif'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import {AiFillCaretLeft} from 'react-icons/ai'
import{AiFillCaretRight} from 'react-icons/ai'

const Carousel = () => {
    //useState to update state of index onClick
    const[index , setIndex]=useState(0)
    //array of images and datas
    const slides=[
        {img:img1,
        texts:["Launch Your Career with an MBA Degree",
               "Unlock New Opportunities with our MBA Programs"]    }, //index-0
        {img:img2,
        texts:["Experience World-Class Faculty and Research",
        "Learn from Renowned Industry Experts"]}, //index-1
        {img:img3,
        texts:["Join a Diverse and Collaborative Business Community",
        "Network with Ambitious Peers from Around the World"]}, //index-2
        {img:img4,
        texts:["Receive Guidance for Internships and Job Placements",
        "Enhance Your Job Prospects with Career Workshops and Coaching"]}, //index-3
    ]
    
    
    //prev function
    const handlePrev=()=>{
        const currentSlide=index===0
        const newSlide=currentSlide?slides.length-1:index-1
        setIndex(newSlide)
    }
    //next function
    const handleNext=()=>{
        const lastSlide=index===slides.length-1
        const newSlide=lastSlide?0: index+1
        setIndex(newSlide)
    }
  return (
    
        <div className='relative w-full h-screen' 
        style={{backgroundImage:`url(${slides[index].img})`,
               backgroundSize:`cover`,
               backgroundRepeat:`no-repeat`,
               backgroundPosition:`center`}}>
        <div className=' w-full h-full bg-slate-900 bg-opacity-50 border-2 mt-2 p-4 flex flex-col justify-center items-center'>
       
        <div className='absolute bottom-[45%] left-16 text-slate-300 hover:scale-150'>
       <AiFillCaretLeft size={35} onClick={handlePrev}/>
       </div> 
       <div className='absolute bottom-[45%] right-16 text-slate-300 hover:scale-150'>
       <AiFillCaretRight size={35} onClick={handleNext}/>
       </div>
       <div className='flex flex-col justify-center items-center'>
        {slides[index].texts.map((items:string, index:number)=>(
            <li className='list-none text-neutral-200 text-3xl mb-12 ' key={index}>{items}</li>

        ))}
        </div>
       </div>
       </div>
        
    
  )
}

export default Carousel