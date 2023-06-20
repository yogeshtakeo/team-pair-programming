import React, { useState } from 'react'
import img1 from '../../images/img1.webp'
import img2 from '../../images/img2.webp'
import img3 from '../../images/img3.webp'
import img4 from '../../images/img4.avif'
import {AiFillCaretLeft} from 'react-icons/ai'
import{AiFillCaretRight} from 'react-icons/ai'

const Carousel = () => {
    //useState to update state of index onClick
    const[index , setIndex]=useState(0)
    //array of images
    const slides=[
        {img:img1}, //index-0
        {img:img2}, //index-1
        {img:img3}, //index-2
        {img:img4}, //index-3
    ]
    //array of texts
    const texts=[
        
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
    <div>
        <div className=' relative w-80 rounded-md border-2 mt-2 p-4'>
       <img className='w-full' src={slides[index].img} alt="img1"/>
        <div className='absolute bottom-[45%] text-white'>
       <AiFillCaretLeft onClick={handlePrev}/>
       </div> 
       <div className='absolute bottom-[45%] left-72 text-white'>
       <AiFillCaretRight onClick={handleNext}/>
       </div>
       </div>
        
    </div>
  )
}

export default Carousel