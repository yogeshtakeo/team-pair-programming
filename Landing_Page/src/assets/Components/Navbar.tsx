import React, {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
//import{BsFillPersonFill} from 'react-icons/bs'
import Modal from './Modal'
import CourseCard from './CourseCard'


function Navbar() {
    //const [isOpen, setIsopen] = useState(false)
  return (
    <div className='relative flex justify-between items-center w-full p-4  bg-black bg-opacity-50 text-white'>
      
        <ul>
            <li className="text-3xl">JS Business School</li>
        </ul>
        <ul className='flex gap-4 text-lg'>
            <li className='hover:border-2 rounded-lg pl-2 pr-2 cursor-pointer'><CourseCard/></li>
            <li className='hover:border-2 rounded-lg pl-2 pr-2 cursor-pointer'>ARTICLES & EVENTS</li>
            <li className='hover:border-2 rounded-lg pl-2 pr-2 cursor-pointer'>ABOUT US</li>
            <li className='hover:border-2 rounded-lg pl-2 pr-2 cursor-pointer'>BUSINESS INNOVATION</li>
            <li className='hover:border-2 rounded-lg pl-2 pr-2 cursor-pointer'><AiOutlineSearch size={25}/></li>
            <li className='hover:border-2 rounded-lg pl-2 pr-2 cursor-pointer' ><Modal/></li>
        </ul>
        </div>
    
  )
}

export default Navbar